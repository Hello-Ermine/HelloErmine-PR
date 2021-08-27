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
  st: null,
  tl: null,
  tween: null,
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

const duration = .6;

const getLabel = (index) => {
  return `page-${index}`;
};

const App = () => {
  const wrapperRef = useRef(null);
  const blackScreenRef = useRef(null);
  const [pageIndex, _setPageIndex] = useState(0);

  const setPageIndex = (index) => {
    data.pageIndex = index;
    _setPageIndex(index);
  };

  const handleUpdateIndex = (index) => {
    const wrapper = wrapperRef.current;

    data.st.scroll(index * wrapper.offsetWidth);
    data.tween = data.tl.tweenTo(Object.values(data.tl.labels)[index], {
      duration,
    });

    setPageIndex(index);
  };

  const handleUpdateScrollTrigger = (st) => {
    const wrapper = wrapperRef.current;
    const targets = wrapper.childNodes;
    const pageIndex = data.pageIndex;
    const nextIndex = Math.min(Math.max(0, pageIndex + st.direction), targets.length - 1);

    handleUpdateIndex(nextIndex);
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
          if (!data.st || data.isChanging) {
            return;
          }
          
          throttledHandleUpdateScrollTrigger(self);
        },
      },
    });

    tl.pause();
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
  }, []);

  const handlePageAnchor = (index) => {
    if (pageIndex === index || data.isChanging) {
      return;
    }

    data.isChanging = true;

    if (data.tween) {
      data.tween.kill();
    }

    const wrapper = wrapperRef.current;
    const blackScreen = blackScreenRef.current;

    data.st.scroll(index * wrapper.offsetWidth);
    // Set data.isChanging to false earlier and the whole thing collapses
    gsap.to(blackScreen, {
      autoAlpha: 1,
      duration: 0.25,
    }).then(() => {
      data.tl.seek(getLabel(index));
      gsap.fromTo(blackScreen, {
        autoAlpha: 1,
      }, {
        autoAlpha: 0,
        duration: duration,
        onComplete: () => {
          data.isChanging = false;
        },
      });
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
