import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function fadeIn() {
  const items = gsap.utils.toArray(".js-fadein");
  
  items.forEach((item) => {
    gsap.fromTo(
      item,
      {
        y: 5,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        delay: 0.4,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
        },
      }
    );
  });

  const lines = gsap.utils.toArray(".js-line");
  
  lines.forEach((line) => {
    gsap.fromTo(
      line,
      {
        width: 0,
        y: -5,
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        y: 0,
        width: "160%",
        delay: 1.2,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: line,
          start: "top 85%",
        },
      }
    );
  });

  const mvLines = gsap.utils.toArray(".js-mv-line");
  
  mvLines.forEach((mvLine) => {
    gsap.fromTo(
      mvLine,
      {
        width: 0,
        y: -5,
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        y: 0,
        width: "160%",
        delay: 3,
        duration: 1.5,
        ease: "power2.out",
      }
    );
  });

  const wrapper = gsap.utils.toArray(".js-fadein-list");

  wrapper.forEach(wrap => {
  const items = wrap.querySelectorAll('li')
    gsap.fromTo(items, 
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        delay: 0.4,
        duration: 1.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: wrap,
          start: "top 90%",
        },
      }
    );
  });

  const mvItems = gsap.utils.toArray(".js-load");
  
  mvItems.forEach((mvItem) => {
    gsap.fromTo(
      mvItem,
      {
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        delay: 0.8,
        duration: 2,
        ease: "power2.out",
      }
    );
  });


  const mvWrapper = gsap.utils.toArray(".js-mv-text");

  mvWrapper.forEach(wrap => {
  const items = wrap.querySelectorAll('p')
    gsap.fromTo(items, 
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        delay: 1.6,
        duration: 1.5,
        stagger: 0.2,
      }
    );
  });


  const mvImages = gsap.utils.toArray(".js-mv-image");
  
  mvImages.forEach((mvImage) => {
    gsap.fromTo(
      mvImage,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        delay: 2,
        duration: 2,
        ease: "power2.out",
      }
    );
  });

  const mvPersons = gsap.utils.toArray(".js-mv-person");
  
  mvPersons.forEach((mvPerson) => {
    gsap.fromTo(
      mvPerson,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        delay: 2.4,
        duration: 2,
        ease: "power2.out",
      }
    );
  });
}
