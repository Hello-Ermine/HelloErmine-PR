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
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

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
  const [isMobile, setIsMobile] = useState(false);
  const wrapperRef = useRef(null);
  const blackScreenRef = useRef(null);
  const dataRef = useRef({
    isResizing: false,
    isProgressing: false,
    isLoading: true,
    snapInterval: null,
    pageIndex,
    lastScrollY: null,
    touchStartY: null,
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

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      setIsMobile(true);
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
        // if (dataRef.current.isProgressing || dataRef.current.isLoading) {
        //   return;
        // }

        // const direction = st.direction;
        // const currentIndex = dataRef.current.pageIndex;
        // const nextIndex = currentIndex + direction;
        
        // if (nextIndex < 0 || nextIndex > targets.length - 1) {
        //   return;
        // }

        // dataRef.current.isProgressing = true;

        // // if supports touch, scroll to the extreme end of the direction
        // if (supportsTouch) {
        //   if (direction === 1) {
        //     st.scroll(window.innerWidth * scrollHeightMultiplier * multiplier);
        //   } else {
        //     st.scroll(0);
        //   }
        // }
        
        // setTimeout(() => {
        //   dataRef.current.snapInterval = setInterval(() => {
        //     st.scroll(nextIndex * window.innerWidth * scrollHeightMultiplier);
        //   }, 50);
        // }, 50);

        // fadeBlack(() => {
        //   tl.seek(getLabel(nextIndex));
        //   st.scroll(nextIndex * window.innerWidth * scrollHeightMultiplier);
        //   setPageIndex(nextIndex);
        // },
        // () => {
        //   if (supportsTouch) {
        //     scrollCompleteCallback(() => {
        //       setTimeout(() => {
        //         handleAfterProgressing();
        //       }, 100);
        //     });
        //   } else {
        //     debouncedHandleAfterProgressing();
        //   }
        // }, 1000);
      },
    });

    // st.disable();

    targets.forEach((target, i, targets) => {
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

    // const debouncedHandleRefresh = debounce(() => {
    //   dataRef.current.isResizing = false;
    // }, 1500);

    // ScrollTrigger.addEventListener('refreshInit', () => {
    //   dataRef.current.isResizing = true;
    //   debouncedHandleRefresh();
    // });
    
    // const debouncedDisableIsLoading = debounce(() => {
    //   dataRef.current.isLoading = false;
    // }, 1500);

    // ScrollTrigger.addEventListener('refresh', () => {
    //   killScrollTriggerTweens(st);
    //   st.scroll(dataRef.current.pageIndex * window.innerWidth * scrollHeightMultiplier);
    //   st.enable();
    //   debouncedDisableIsLoading();
    // });

    // reset scroll position to 0 after a refresh
    // window.addEventListener('beforeunload', () => {
    //   st.disable();
    // });   

    // prevent scroll trigger from going brrr on touchscreen devices
    // window.addEventListener('touchmove', (e) => {
    //   if (e.cancelable && dataRef.current.isProgressing) {
    //     e.preventDefault();
    //   }
    // }, { passive: false });

    // window.addEventListener('wheel', (e) => {
    //   if (dataRef.current.isProgressing) {
    //     e.preventDefault();
    //   }
    // }, { passive: false });
    
    window.addEventListener('scroll', (_) => {
      // if (!dataRef.current.lastScrollY) {
      //   dataRef.current.lastScrollY = scrollY;
      //   return;
      // }
      // const scrollY = window.scrollY;
      // const scrollDeltaY = scrollY - dataRef.current.lastScrollY;
      // dataRef.current.lastScrollY = scrollY;

      // if (scrollDeltaY > 0) {
      //   handleSceneChanging(1);
      // } else {
      //   handleSceneChanging(-1);
      // }

      // return;
    });

    const changeScene = (index) => {
      dataRef.current.isProgressing = true;
      const duration = 1;

      gsap.to(window, {
        scrollTo: {
          y: index * window.innerWidth * scrollHeightMultiplier,
          autoKill: false
        },
        duration,
        ease: "power4.inOut",
        onComplete: () => {
          setTimeout(() => {
            console.log('complete');
            dataRef.current.isProgressing = false;
            setPageIndex(index);
          }, 20);
        },
        onStart: () => {
          fadeBlack(() => {
            tl.seek(getLabel(index));
          }, () => {}, duration * 1000);
        }
      });
    };

    const handleScrollDirection = (direction) => {
      const currentIndex = dataRef.current.pageIndex;
      const nextIndex = currentIndex + direction;
      
      if (nextIndex < 0 || nextIndex > targets.length - 1) {
        return;
      }

      changeScene(nextIndex);
    };

    const handleTouchStart = (e) => {
      dataRef.current.touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (!dataRef.current.touchStartY || dataRef.current.isProgressing) {
        return;
      }

      if (e.touches[0].clientY - dataRef.current.touchStartY > 0) { // touch delta y
        handleScrollDirection(-1);
      } else {
        handleScrollDirection(1);
      }
    };

    const handleWheel = (e) => {
      if (dataRef.current.isProgressing || dataRef.current.isProgressing) {
        return;
      }

      handleScrollDirection(e.deltaY > 0 ? 1 : -1);
    };

    const handleKeys = (e) => {
      if (dataRef.current.isProgressing) {
        return;
      }
      if (['ArrowUp', 'PageUp', 'w', 'i'].includes(e.key)) {
        handleScrollDirection(-1);
      }
      if (['ArrowDown', 'PageDown', 's', 'k'].includes(e.key)) {
        handleScrollDirection(1);
      }
      if (['Home'].includes(e.key)) {
        changeScene(0);
      }
      if (['End'].includes(e.key)) {
        changeScene(targets.length - 1);
      }
    };
    
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('wheel', handleWheel);
    window.addEventListener('keydown', handleKeys);

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
        <Home isMobile={isMobile} pageIndex={pageIndex} />
        <About in={isAboutEntered} />
        <Team />
        <FAQs />
        <Game isMobile={isMobile} />
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
