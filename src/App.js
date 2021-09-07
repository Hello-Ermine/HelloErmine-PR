import Home from './containers/Home';
import About from './containers/About';
import Team from './containers/Team';
import FAQs from './containers/FAQs';
import Game from './containers/Game';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import { AppSocial, BlackScreen } from './App.style';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const scrollHeightMultiplier = 6;

const getLabel = (index) => {
  return `page-${index}`;
};

const killScrollTriggerTweens = (st) => {
  const scrub = st.getTween();
  const snap = st.getTween(true);

  if (scrub) {
    scrub.kill();
  }
  if (snap) {
    snap.kill();
  }
};

const App = () => {
  const [isChanging, setIsChanging] = useState(false);
  const [timeline, setTimeline] = useState(null);
  const [pageIndex, _setPageIndex] = useState(0);
  const [isAboutEntered, setIsAboutEntered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollTriggerInstance, setScrollTriggerInstance] = useState(null);
  const wrapperRef = useRef(null);
  const blackScreenRef = useRef(null);
  const dataRef = useRef({ isResizing: false, pageIndex });

  const setPageIndex = (index) => {
    dataRef.current.pageIndex = index;
    _setPageIndex(index);
  };

  useEffect(() => {
    if (pageIndex === 1) {
      setIsAboutEntered(true);
    }
  }, [pageIndex]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const blackScreen = blackScreenRef.current;
    const targets = wrapper.childNodes;
    const multiplier = targets.length - 1;

    const tl = gsap.timeline({
      defaults: {
        ease: 'none',
      },
      scrollTrigger: {
        trigger: wrapper,
        scrub: 0.5,
        end: () => `+=${window.innerWidth * scrollHeightMultiplier * multiplier}`,
        pin: true,
        snap: {
          snapTo: "labelsDirectional",
          duration: 0.5,
          delay: 0.1,
          ease: 'none',
        },
      },
    });

    const st = tl.scrollTrigger;

    const handleScrollTriggerCallbacks = (i) => () => {
      if (dataRef.current.isResizing) {
        return;
      }
      console.log(`PAGE INDEX: ${i}`);
      setPageIndex(i);
    };

    targets.forEach((target, i, targets) => {
      const startEnd = window.innerWidth * scrollHeightMultiplier * i - 1; // using wrapper.offsetWidth includes the scrollbar width only for the first page
      const endEnd = window.innerWidth * scrollHeightMultiplier * (i + 1) - 1;
      
      ScrollTrigger.create({
        trigger: target,
        start: () => `top top-=${startEnd}`,
        end: () => `top top-=${endEnd}`,
        onEnter: handleScrollTriggerCallbacks(i),
        onEnterBack: handleScrollTriggerCallbacks(i),
      });

      const xPercentEnterSet = -100 * (i - 1); // left: 100%
      const xPercentEnterTo = -100 * i; // left: 0
      const xPercentExitTo = -100 * (i + 1); // left: -100%
      
      if (i > 0) { // enter animation (skip first page)
        tl.set(target, {
          xPercent: xPercentEnterSet,
        }, "<");
        tl.to(target, {
          xPercent: xPercentEnterTo,
        }, "<");
        tl.to(blackScreen, {
          autoAlpha: 0,
        });  
      }

      tl.addLabel(getLabel(i)); // add a label after enter animation (the page is now fully visible)

      if (i === targets.length - 1) { // exit animation (skip last page)
        return;
      }

      tl.to(blackScreen, {
        autoAlpha: 1,
      });
      tl.to(target, {
        xPercent: xPercentExitTo,
      }, "+=.5");
    });

    ScrollTrigger.addEventListener('refreshInit', () => {
      dataRef.current.isResizing = true;
    });

    ScrollTrigger.addEventListener('refresh', () => {
      killScrollTriggerTweens(st);
      st.scroll(dataRef.current.pageIndex * window.innerWidth * scrollHeightMultiplier);
      dataRef.current.isResizing = false;
    });

    // reset scroll position to 0 after a refresh
    window.addEventListener('beforeunload', () => {
      st.disable();
    });   

    setTimeline(tl);
    setScrollTriggerInstance(st);
    setIsLoaded(true);
  }, []);

  const handlePageAnchor = (index) => {
    if (pageIndex === index || isChanging) {
      return;
    }

    killScrollTriggerTweens(scrollTriggerInstance);

    const blackScreen = blackScreenRef.current;

    gsap.to(blackScreen, {
      autoAlpha: 1,
      duration: 0.25,
      onComplete: () => {
        timeline.seek(getLabel(index));
        scrollTriggerInstance.scroll(index * window.innerWidth * scrollHeightMultiplier);
        gsap.fromTo(blackScreen, {
          autoAlpha: 1,
        }, {
          autoAlpha: 0,
          duration: 0.25,
          onComplete: () => {
            setPageIndex(index);
            setIsChanging(false);
          },
        });
      }
    });

    setIsChanging(true);
  };

  return (
    <>
      <Wrapper ref={wrapperRef}>
        <Home />
        <About in={isAboutEntered} />
        <Team />
        <FAQs />
        <Game />
      </Wrapper>
      <BlackScreen ref={blackScreenRef} visible={isLoaded} />
      <Navbar onClick={handlePageAnchor} pageIndex={pageIndex} />
      <AppSocial>
        <a href="https://www.facebook.com" target='_blank' rel='noreferrer'><i className='fab fa-facebook'/></a>
        <a href="https://www.instagram.com" target='_blank' rel='noreferrer'><i className='fab fa-instagram'/></a>
      </AppSocial>
    </>
  );
};

export default App;
