import Home from './containers/Home';
import About from './containers/About';
import Team from './containers/Team';
import FAQs from './containers/FAQs';
import Game from './containers/Game';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import { AppSocial } from './App.style';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const wrapperRef = useRef(null);
  const [pageIndex, setPageIndex] = useState(0);
  const [scrollTriggerInstance, setScrollTriggerInstance] = useState(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const targets = wrapper.childNodes;
    const multiplier = targets.length - 1;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        scrub: 1,
        end: () => `+=${wrapper.offsetWidth * multiplier}`,
        pin: true,
        snap: {
          snapTo: "labelsDirectional",
          duration: 0.5,
          delay: 0.1,
          inertia: false,
        },
      },
    });
    const st = tl.scrollTrigger;

    targets.forEach((target, i, targets) => {
      if (i === 0) {
        tl.addLabel(`page-${i}`);
        tl.to(target, {
          xPercent: `-100`,
          ease: 'none',
        });
        return;
      }

      if (i === 1) {
        tl.to(target,{
          xPercent: `-100`,
          ease: 'none',
        }, "<");
      } else {
        tl.fromTo(target, {
          xPercent: `-${100 * (i - 1)}`,
          ease: 'none',
        }, {
          xPercent: `-${100 * i}`,
          ease: 'none',
        }, "<");
      }

      tl.addLabel(`page-${i}`);

      if (i === targets.length - 1) {
        return;
      }

      tl.to(target, {
        xPercent: `-${100 * (i + 1)}`,
        ease: 'none',
      });

      ScrollTrigger.create({
        trigger: target,
        start: () => `top top-=${target.offsetWidth * i - 1}`,
        end: () => `top top-=${target.offsetWidth * (i + 1) - 1}`,
        onEnter: () => setPageIndex(i),
        onEnterBack: () => setPageIndex(i),
      });
    });

    setScrollTriggerInstance(st);
  }, []);

  const handlePageAnchor = (index) => {
    if (pageIndex === index) {
      return;
    }
    const wrapper = wrapperRef.current;
    scrollTriggerInstance.scroll(index * wrapper.offsetWidth);
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
      <Navbar onClick={handlePageAnchor} pageIndex={pageIndex} />
      <AppSocial>
        <a href="https://www.facebook.com" target='_blank' rel='noreferrer'><i className='fab fa-facebook'/></a>
        <a href="https://www.instagram.com" target='_blank' rel='noreferrer'><i className='fab fa-instagram'/></a>
      </AppSocial>
    </>
  );
};

export default App;
