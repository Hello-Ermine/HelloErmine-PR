/* eslint-disable no-unused-vars */
import Home from './containers/Home';
import About from './containers/About';
import Team from './containers/Team';
import FAQs from './containers/FAQs';
import Game from './containers/Game';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import { AppSocial, BlackScreen } from './App.style';
import { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const scrollHeightMultiplier = 6;
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
    (/Macintosh/i.test(navigator.userAgent) && navigator.maxTouchPoints > 0); // iPadOS (the only official Mac with touchscreen)

const App = () => {
  const [timeline, setTimeline] = useState(null);
  const [pageIndex, _setPageIndex] = useState(0);
  const [isAboutEntered, setIsAboutEntered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollTriggerInstance, setScrollTriggerInstance] = useState(null);
  const wrapperRef = useRef(null);
  const blackScreenRef = useRef(null);
  const dataRef = useRef({
    isProgressing: false,
    pageIndex,
    lastScrollY: null,
    touchStartY: null,
    changeSceneTween: null,
    pagesScrollTop: [],
  });

  const setPageIndex = (index) => {
    dataRef.current.pageIndex = index;
    _setPageIndex(index);
  };

  const getLabel = useCallback((index) => {
    return `page-${index}`;
  }, []);

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

    const closestPage = () => {
      return Math.round(window.scrollY / (window.innerWidth * scrollHeightMultiplier));
    };

    const tl = gsap.timeline({
      defaults: {
        ease: 'none',
      },
    });
    tl.pause();

    const st = ScrollTrigger.create({
      trigger: wrapper,
      end: () => `+=${window.innerWidth * scrollHeightMultiplier * multiplier}`,
      pin: true,
    });

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

    const changeScene = (index, autoKill = false) => {
      dataRef.current.isProgressing = true;
      const baseDuration = 1;
      const avaiableFactor = .7;
      const scrollDuration = baseDuration * avaiableFactor;
      
      setTimeout(() => {
        setPageIndex(index);
        dataRef.current.isProgressing = false;
      }, scrollDuration * 1000 + 100); // allow next scrolling atleast 100ms after scrollbar animation finished

      dataRef.current.changeSceneTween?.kill();
      dataRef.current.changeSceneTween = gsap.to(window, {
        scrollTo: {
          y: index * window.innerWidth * scrollHeightMultiplier,
          autoKill,
        },
        duration: scrollDuration,
        ease: "power4.inOut",
        onStart: () => {
          fadeBlack(() => {
            tl.seek(getLabel(index));
          }, () => {}, scrollDuration * 1000);
        }
      });
    };

    const handleScrollDirection = (direction, onChange) => {
      const currentIndex = dataRef.current.pageIndex;
      const nextIndex = currentIndex + direction;
      
      if (nextIndex < 0 || nextIndex > targets.length - 1) {
        return;
      }

      if (typeof onChange === "function") {
        onChange();
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

      const deltaY = e.touches[0].clientY - dataRef.current.touchStartY;
      const threshold = 20;
      console.log(e);
      const onChange = () => {
        dataRef.current.touchStartY = e.touches[0].clientY;
      };
      if (deltaY > threshold) {
        handleScrollDirection(-1, onChange);
      }
      if (deltaY < -threshold) {
        handleScrollDirection(1, onChange);
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

    const handleScroll = (_) => {
      if (dataRef.current.isProgressing) {
        return;
      }
      
      const nextIndex = closestPage();
      if (dataRef.current.pageIndex === nextIndex) {
        return;
      }
      changeScene(nextIndex, true);
    };

    const handleBeforeUnload = () => {
      st.disable();
    };
    
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('wheel', handleWheel);
    window.addEventListener('keydown', handleKeys);
    !isMobile && window.addEventListener('scroll', handleScroll);
    window.addEventListener('beforeunload', handleBeforeUnload);

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
