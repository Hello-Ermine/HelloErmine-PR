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

const data = {
  pageIndex: 0,
  isChanging: false,
  isChangingAnchor: false,
  isChangingResize: false,
  changingAnchorTween: null,
  st: null,
  tl: null,
  tween: null,
  isLoading: true,
  direction: 0,
};

const throttle = (fn, delay) => {
  let previous = 0;

  return (...args) => {
    const now = Date.now();
    if (previous + delay < now) {
      previous = now;
      fn(...args);
    }
  };
};

const debounce = (fn, delay) => {
  let timeout = null;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
  

const duration = .6;

const getLabel = (index) => {
  return `page-${index}`;
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

const debouncedChangingTimeout = debounce(() => {
  data.isChanging = false;
  console.log("DONE");
}, duration * 1000 - 1);

const debouncedChangingAnchorTimeout = debounce(() => {
  data.isChangingAnchor = false;
  console.log("ANCHOR DONE");
}, duration * 1000 - 1);

const debouncedChangingResizeTimeout = debounce(() => {
  data.isChangingResize = false;
  console.log("RESIZE DONE");
}, 100);

const App = () => {
  const wrapperRef = useRef(null);
  const blackScreenRef = useRef(null);
  const [pageIndex, _setPageIndex] = useState(0);

  const setPageIndex = (index) => {
    data.pageIndex = index;
    _setPageIndex(index);
  };

  const handleUpdateScrollTrigger = (st) => {
    const wrapper = wrapperRef.current;
    const targets = wrapper.childNodes;
    const currentDirection = st.direction;
    const nextIndex = Math.min(Math.max(0, data.pageIndex + currentDirection), targets.length - 1);
    
    console.log(data.direction, currentDirection);
    if (data.pageIndex === nextIndex || (currentDirection == data.direction && data.isChanging)) {
      console.log("SIKE");
      return;
    }

    console.log("UPDATE", data.pageIndex, nextIndex);

    // TODO: do the same thing as in handlePageAnchor, remove blackscreen from master timeline, etc.
    
    data.isChanging = true;
    data.st.scroll(nextIndex * wrapper.offsetWidth);
    setPageIndex(nextIndex);
    data.direction = currentDirection;
    
    debouncedChangingTimeout();

    data.tween = data.tl.tweenTo(getLabel(nextIndex), {
      duration,
    });
  };

  const throttledHandleUpdateScrollTrigger = throttle(handleUpdateScrollTrigger, duration * 1000);

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
        end: () => `+=${wrapper.offsetWidth * multiplier}`,
        pin: true,
        onUpdate: (self) => {
          if (
            !data.st ||
            data.isChangingAnchor ||
            data.isChangingResize ||
            data.isLoading
          ) {
            return;
          }
          // throttledHandleUpdateScrollTrigger(self);
          handleUpdateScrollTrigger(self);
        },
      },
    });

    const st = tl.scrollTrigger;

    targets.forEach((target, i, targets) => {
      ScrollTrigger.create({
        trigger: target,
        start: () => `top top-=${target.offsetWidth * i - 1}`,
        end: () => `top top-=${target.offsetWidth * (i + 1) - 1}`,
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

    data.tl = tl;
    data.st = st;
    st.disable();

    ScrollTrigger.addEventListener('refreshInit', () => {
      console.log('REFRESH INIT');
      data.isChangingResize = true;
    });

    ScrollTrigger.addEventListener('refresh', () => {
      console.log('REFRESHED');
      const oldProgress = data.tl.progress();
      data.tl.progress(1); // go all the way to the end to reset the timeline
      data.tl.progress(oldProgress); // go back to where we were
      debouncedChangingResizeTimeout();
    });

    // after 1s from window load event, scroll to first page
    window.addEventListener('load', () => {
      data.st.enable();
      data.tl.pause();
      data.isLoading = false;
    });
      
  }, []);

  const handlePageAnchor = (index) => {
    if (pageIndex === index) {
      return;
    }

    data.isChangingAnchor = true;

    console.log("UPDATE", data.pageIndex, index);
    const wrapper = wrapperRef.current;
    const blackScreen = blackScreenRef.current;
    
    data.tween?.kill(blackScreen);
    data.changingAnchorTween?.kill();
    
    data.st.scroll(index * wrapper.offsetWidth);
    debouncedChangingAnchorTimeout();
    
    data.changingAnchorTween = gsap.to(blackScreen, {
      autoAlpha: 1,
      duration: duration / 2,
      onComplete: () => {
        data.tl.seek(getLabel(index));
        gsap.fromTo(blackScreen, {
          autoAlpha: 1,
        }, {
          autoAlpha: 0,
          duration: duration / 2,
        });
      }
    });

    setPageIndex(index);
  };

  return (
    <>
      <Wrapper ref={wrapperRef}>
        <Home />
        <About />
        <Team />
        <FAQs />
        <Game />
      </Wrapper>
      <BlackScreen ref={blackScreenRef}/>
      <Navbar onClick={handlePageAnchor} pageIndex={pageIndex} />
      <AppSocial>
        <a href="https://www.facebook.com" target='_blank' rel='noreferrer'><i className='fab fa-facebook'/></a>
        <a href="https://www.instagram.com" target='_blank' rel='noreferrer'><i className='fab fa-instagram'/></a>
      </AppSocial>
    </>
  );
};

export default App;
