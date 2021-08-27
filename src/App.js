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

const duration = .5;

const App = () => {
  const wrapperRef = useRef(null);
  const blackScreenRef = useRef(null);
  const [isChanging, setIsChanging] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const [scrollTriggerInstance, setScrollTriggerInstance] = useState(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const blackScreen = blackScreenRef.current;
    const targets = wrapper.childNodes;
    const multiplier = targets.length - 1;

    const handleUpdate = (st) => {
      // console.log(data.tween?.progress());
      console.log("TRIGGERED");
      // console.log(st.enabled);
      if (!data.st) {
        return;
      }

      const pageIndex = data.pageIndex + (st.direction === 1 ? 1 : 0); // EnterBack (equals to direction = -1) had already been triggered by the time this is called
      const nextIndex = Math.min(Math.max(0, pageIndex), targets.length - 1);

      console.log("Update", nextIndex);
      // data.isChanging = true;
      // if (data.tween) {
      //   return;
      // }
      // data.tween = gsap.to(window, {
      //   scrollTo: nextIndex * wrapper.offsetWidth,
      //   duration,
      //   onComplete: () => {
      //     console.log("DONE");
      //     data.tween = null;
      //   },
      // });

      data.st.scroll(nextIndex * wrapper.offsetWidth);
      if (data.tween) {
        data.tween.kill();
      }
      data.tween = data.tl.tweenTo(Object.values(data.tl.labels)[nextIndex], {
        duration, 
      });
      // data.st.tweenTo(nextIndex * wrapper.offsetWidth);

      // data.pageIndex = nextIndex;
      // setPageIndex(nextIndex);
    };

    const throttledHandleUpdate = throttle(handleUpdate, duration * 1000);

    const tl = gsap.timeline({
      defaults: {
        ease: 'none',
      },
      scrollTrigger: {
        trigger: wrapper,
        // scrub: true,
        end: () => `+=${wrapper.offsetWidth * multiplier}`,
        pin: true,
        // snap: {
        //   snapTo: "labels",
        //   duration,
        //   delay: 0.1,
        //   inertia: false,
        //   ease: 'none',
        //   onComplete: () => {
        //     console.log("Snapped");
        //   }
        // },
        onUpdate: (self) => {
          // if (data.tween) {
          //   return;
          // }

          throttledHandleUpdate(self);
          // handleUpdate(self);
        },
      },
    }).pause();

    const st = tl.scrollTrigger;

    targets.forEach((target, i, targets) => {
      ScrollTrigger.create({
        trigger: target,
        start: () => `top top-=${target.offsetWidth * i - 1}`,
        end: () => `top top-=${target.offsetWidth * (i + 1) - 1}`,
        onEnter: () => {
          // if (data.isChanging) {
          //   return;
          // }
          data.pageIndex = i;
          // console.log(data.pageIndex);
          setPageIndex(i);
          // console.log("Enter", i);
        },
        onEnterBack: () => { 
          // if (data.isChanging) {
          //   return;
          // }
          data.pageIndex = i;
          // console.log(data.pageIndex);
          setPageIndex(i);
          // console.log("EnterBack", i);
        },
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

      tl.addLabel(`page-${i}`);

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
    setScrollTriggerInstance(st);
  }, []);

  const handlePageAnchor = (index) => {
    if (pageIndex === index || isChanging) {
      return;
    }

    // const scrub = scrollTriggerInstance.getTween();
    // const snap = scrollTriggerInstance.getTween(true);

    // if (scrub) {
    //   scrub.kill();
    // }
    // if (snap) {
    //   snap.kill();
    // }

    // setIsChanging(true);

    // const wrapper = wrapperRef.current;
    // const blackScreen = blackScreenRef.current;

    // gsap.to(blackScreen, {
    //   autoAlpha: 1,
    //   duration: 0.25,
    //   onComplete: () => {
    //     timeline.seek(`page-${index}`);
    //     scrollTriggerInstance.scroll(index * wrapper.offsetWidth);
    //     gsap.fromTo(blackScreen, {
    //       autoAlpha: 1,
    //     }, {
    //       autoAlpha: 0,
    //       duration: 0.25,
    //       onComplete: () => {
    //         setPageIndex(index);
    //         setIsChanging(false);
    //       },
    //     });
    //   }
    // });
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
