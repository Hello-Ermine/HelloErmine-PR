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

const getLabel = (index) => {
  return `page-${index}`;
};

const App = () => {
  const wrapperRef = useRef(null);
  const blackScreenRef = useRef(null);
  const [isChanging, setIsChanging] = useState(false);
  const [timeline, setTimeline] = useState(null);
  const [pageIndex, _setPageIndex] = useState(0);
  const pageIndexRef = useRef(pageIndex);
  const dataRef = useRef({ isResizing: false });
  const [isAboutEntered, setIsAboutEntered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollTriggerInstance, setScrollTriggerInstance] = useState(null);

  useEffect(() => {
    if (pageIndex === 1) {
      setIsAboutEntered(true);
    }
  }, [pageIndex]);

  const setPageIndex = (index) => {
    pageIndexRef.current = index;
    _setPageIndex(index);
  };

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
        end: () => `+=${wrapper.offsetWidth * multiplier}`,
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
      setPageIndex(i);
    };

    targets.forEach((target, i, targets) => {
      ScrollTrigger.create({
        trigger: target,
        start: () => `top top-=${target.offsetWidth * i - 1}`,
        end: () => `top top-=${target.offsetWidth * (i + 1) - 1}`,
        onEnter: handleScrollTriggerCallbacks(i),
        onEnterBack: handleScrollTriggerCallbacks(i),
      });

      const xPercentEnterSet = -100 * (i - 1);
      const xPercentEnterTo = -100 * i;
      const xPercentExitTo = -100 * (i + 1);
      
      if (i > 0) {
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

      tl.addLabel(getLabel(i));

      if (i === targets.length - 1) {
        return;
      }

      tl.to(blackScreen,{
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
      const scrub = st.getTween();
      const snap = st.getTween(true);

      if (scrub) {
        scrub.kill();
      }
      if (snap) {
        snap.kill();
      }

      st.scroll(pageIndexRef.current * wrapperRef.current.offsetWidth);
      dataRef.current.isResizing = false;
    });

    setTimeline(tl);
    setScrollTriggerInstance(st);
    setIsLoaded(true);
  }, []);

  const handlePageAnchor = (index) => {
    if (pageIndex === index || isChanging) {
      return;
    }

    const scrub = scrollTriggerInstance.getTween();
    const snap = scrollTriggerInstance.getTween(true);

    if (scrub) {
      scrub.kill();
    }
    if (snap) {
      snap.kill();
    }

    setIsChanging(true);

    const wrapper = wrapperRef.current;
    const blackScreen = blackScreenRef.current;

    gsap.to(blackScreen, {
      autoAlpha: 1,
      duration: 0.25,
      onComplete: () => {
        timeline.seek(getLabel(index));
        scrollTriggerInstance.scroll(index * wrapper.offsetWidth);
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
