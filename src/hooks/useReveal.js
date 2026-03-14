import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useReveal = (options = {}) => {
  const {
    duration = 0.8,
    delay = 0,
    from = { opacity: 0, y: 50 },
    ease = 'power3.out',
  } = options;

  const elementRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current) return;

    gsap.fromTo(
      elementRef.current,
      from,
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease,
        scrollTrigger: {
          trigger: elementRef.current,
          start: 'top 80%',
          end: 'top 20%',
          markers: false,
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [duration, delay, from, ease]);

  return elementRef;
};
