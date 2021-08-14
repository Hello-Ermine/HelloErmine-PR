import gsap from 'gsap'; 
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let scenes = gsap.utils.toArray('.scene');

let master = gsap.timeline({
  scrollTrigger: {
    trigger: '.wrapper',
    scrub: 1,
    pin: true,
    snap: {
      snapTo: 1 / (scenes.length - 1),
      delay: 0.01
    },
    end: () => '+=' + document.querySelector('.wrapper').offsetWidth
  }
});

let main = gsap.timeline();
main
  .to('.main .content', {
    xPercent: -400
  })
  .to(
    '.main .cosm',
    {
      xPercent: 900
    },
    '<'
  );
  

master
  .to(scenes, {
    xPercent: -100 * (scenes.length - 1)
  })
  .add(main, "<")
  .to(
    '.tf',
    {
      xPercent: -50
    },
    '<'
  )
  .to(
    '.tf .n',
    {
      autoAlpha: 0,
      duration: 0.2
    },
    '<'
  )
  .to(
    '.tf .d',
    {
      autoAlpha: 1
    },
    '<40%'
  );
