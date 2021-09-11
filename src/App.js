/* eslint-disable no-unused-vars */
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

const debounce = (func, delay) => {
  let timeout = null;

  return (...args) => {
    clearTimeout(timeout);
    setTimeout(() => func(...args), delay);
  };
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
  const dataRef = useRef({
    isResizing: false,
    isProgressing: false,
    isLoading: true,
    pageIndex
  });

  const setPageIndex = (index) => {
    dataRef.current.pageIndex = index;
    _setPageIndex(index);
  };

  const fadeBlack = (onFadeIn, onFadeOut, durationMs = 500) => {
    const blackScreen = blackScreenRef.current;
    const duration = (durationMs / 2) / 1000;
    gsap.to(blackScreen, {
      autoAlpha: 1,
      duration,
      onComplete: () => {
        onFadeIn();
        gsap.fromTo(blackScreen, {
          autoAlpha: 1,
        }, {
          autoAlpha: 0,
          duration,
          onComplete: () => {
            onFadeOut();
          },
        });
      }
    });
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
    });

    tl.pause();

    const turnOfIsProgressing = () => {
      dataRef.current.isProgressing = false;
      console.log('isProgressing turned off');
    };

    const debouncedTurnOfIsProgressing = debounce(turnOfIsProgressing, 500);

    const st = ScrollTrigger.create({
      trigger: wrapper,
      end: () => `+=${window.innerWidth * scrollHeightMultiplier * multiplier}`,
      pin: true,
      onUpdate: (st) => {
        if (dataRef.current.isProgressing || dataRef.current.isLoading) {
          console.log("SIKE");
          return;
        }

        const direction = st.direction;
        const currentIndex = dataRef.current.pageIndex;
        const nextIndex = currentIndex + direction;
        
        console.log(currentIndex, nextIndex);
        if (nextIndex < 0 || nextIndex > targets.length - 1) {
          console.log('nextIndex out of bounds');
          return;
        }

        dataRef.current.isProgressing = true;

        console.log(
          `current index: ${dataRef.current.pageIndex}\nnext index: ${nextIndex}`);

        fadeBlack(() => {
          tl.seek(getLabel(nextIndex));
          st.scroll(nextIndex * window.innerWidth * scrollHeightMultiplier);
          setPageIndex(nextIndex);
        },
        () => {
          debouncedTurnOfIsProgressing();
          console.log('isProgressing turned off', currentIndex, nextIndex);
        }, 1000);

        console.log(st.progress);
      },
    });

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
        // onEnter: handleScrollTriggerCallbacks(i),
        // onEnterBack: handleScrollTriggerCallbacks(i),
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

    const debouncedHandleRefresh = debounce(() => {
      dataRef.current.isResizing = false;
      console.log("REFRESHED");
    }, 1500);

    ScrollTrigger.addEventListener('refreshInit', () => {
      dataRef.current.isResizing = true;
      debouncedHandleRefresh();
    });
    
    ScrollTrigger.addEventListener('refresh', () => {
      killScrollTriggerTweens(st);
      st.scroll(dataRef.current.pageIndex * window.innerWidth * scrollHeightMultiplier);
    });

    window.addEventListener('load', () => {
      dataRef.current.isLoading = false;
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
    if (pageIndex === index || dataRef.current.isProgressing) {
      return;
    }
    dataRef.current.isProgressing = true;

    fadeBlack(() => {
      scrollTriggerInstance.scroll(index * window.innerWidth * scrollHeightMultiplier);
      timeline.seek(getLabel(index));
    },
    () => {
      dataRef.current.isProgressing = false;
      setPageIndex(index);
    }, 500);
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
        <a href="https://www.facebook.com/SITHelloWorld" target='_blank' rel='noreferrer'><i className='fab fa-facebook'/></a>
        <a href="https://www.instagram.com/sithelloworld/" target='_blank' rel='noreferrer'><i className='fab fa-instagram'/></a>
      </AppSocial>
    </>
  );
};

export default App;
