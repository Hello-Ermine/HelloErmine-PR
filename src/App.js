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

const scrollCompleteCallback = (() => {
  let interval = null;

  return (func, overwrite = true) => {
    let previousY = window.scrollY;

    if (overwrite) {
      clearInterval(interval);
    }
    
    interval = setInterval(() => {
      if (previousY === window.scrollY) {
        clearInterval(interval);
        func();
      }
      previousY = window.scrollY;
    }, 100);
  }; 
})();

const debounce = (func, delay) => {
  let timeout = null;

  return (...args) => {
    clearTimeout(timeout);
    setTimeout(() => func(...args), delay);
  };
};

const App = () => {
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
    snapInterval: null,
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

    const handleAfterProgressing = () => {
      clearInterval(dataRef.current.snapInterval);
      dataRef.current.isProgressing = false;
    };

    const debouncedHandleAfterProgressing = debounce(handleAfterProgressing, 500);

    const supportsTouch = 'ontouchstart' in window || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);

    const st = ScrollTrigger.create({
      trigger: wrapper,
      end: () => `+=${window.innerWidth * scrollHeightMultiplier * multiplier}`,
      pin: true,
      onUpdate: (st) => {
        if (dataRef.current.isProgressing || dataRef.current.isLoading) {
          return;
        }

        const direction = st.direction;
        const currentIndex = dataRef.current.pageIndex;
        const nextIndex = currentIndex + direction;
        
        if (nextIndex < 0 || nextIndex > targets.length - 1) {
          return;
        }

        dataRef.current.isProgressing = true;

        // if supports touch, scroll to the extreme end of the direction
        if (supportsTouch) {
          if (direction === 1) {
            st.scroll(window.innerWidth * scrollHeightMultiplier * multiplier);
          } else {
            st.scroll(0);
          }
        }
        
        setTimeout(() => {
          dataRef.current.snapInterval = setInterval(() => {
            st.scroll(nextIndex * window.innerWidth * scrollHeightMultiplier);
          }, 50);
        }, 50);

        fadeBlack(() => {
          tl.seek(getLabel(nextIndex));
          st.scroll(nextIndex * window.innerWidth * scrollHeightMultiplier);
          setPageIndex(nextIndex);
        },
        () => {
          if (supportsTouch) {
            scrollCompleteCallback(() => {
              setTimeout(() => {
                handleAfterProgressing();
              }, 100);
            });
          } else {
            debouncedHandleAfterProgressing();
          }
        }, 1000);
      },
    });

    st.disable();

    targets.forEach((target, i, targets) => {
      const startEnd = window.innerWidth * scrollHeightMultiplier * i - 1; // using wrapper.offsetWidth includes the scrollbar width only for the first page
      const endEnd = window.innerWidth * scrollHeightMultiplier * (i + 1) - 1;
      
      ScrollTrigger.create({
        trigger: target,
        start: () => `top top-=${startEnd}`,
        end: () => `top top-=${endEnd}`,
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
    }, 1500);

    ScrollTrigger.addEventListener('refreshInit', () => {
      dataRef.current.isResizing = true;
      debouncedHandleRefresh();
    });
    
    const debouncedDisableIsLoading = debounce(() => {
      dataRef.current.isLoading = false;
    }, 1500);

    ScrollTrigger.addEventListener('refresh', () => {
      killScrollTriggerTweens(st);
      st.scroll(dataRef.current.pageIndex * window.innerWidth * scrollHeightMultiplier);
      st.enable();
      debouncedDisableIsLoading();
    });

    // reset scroll position to 0 after a refresh
    window.addEventListener('beforeunload', () => {
      st.disable();
    });   

    // prevent scroll trigger from going brrr on touchscreen devices
    window.addEventListener('touchmove', (e) => {
      if (e.cancelable && dataRef.current.isProgressing) {
        e.preventDefault();
      }
    }, { passive: false });

    window.addEventListener('wheel', (e) => {
      if (dataRef.current.isProgressing) {
        e.preventDefault();
      }
    }, { passive: false });

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
        <Home pageIndex={pageIndex} />
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
