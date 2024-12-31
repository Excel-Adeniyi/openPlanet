
import { useEffect, useRef, useState } from 'react'

export default function useInteractor() {
    const titleRef = useRef(null); // Reference to the element
const storyRef = useRef(null); // Reference to the element
const figureeRef = useRef(null); // Reference to the element
const moreRef = useRef(null); // Reference to the element
const [inView, setInView] = useState(false);
const serviceImageRef = useRef(null)
const bannerRef = useRef(null)
const coreTitleRef = useRef(null)
const coreHeadRef = useRef(null)
const coreDefRef1 = useRef(null)
const coreDefRef2 = useRef(null)
const coreDefRef3 = useRef(null)


useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setInView(true); // Trigger the animation when in view
      }
    },
    { threshold: 0.1 } // Adjust threshold as needed
  );

  if (titleRef.current) {
    observer.observe(titleRef.current);
  }
  if (storyRef.current) {
    observer.observe(storyRef.current);
  }
  if(figureeRef.current){
    observer.observe(figureeRef.current)
  }
  if(moreRef.current){
    observer.observe(moreRef.current)
  }
  if(serviceImageRef.current){
    observer.observe(serviceImageRef.current)
  }
  if(bannerRef.current){
    observer.observe(bannerRef.current)
  }
  if(coreTitleRef.current){
    observer.observe(coreTitleRef.current)
  }
  if(coreHeadRef.current){
    observer.observe(coreHeadRef.current)
  }
  if(coreDefRef1.current){
    observer.observe(coreDefRef1.current)
  }
  if(coreDefRef2.current){
    observer.observe(coreDefRef2.current)
  }
  if(coreDefRef3.current){
    observer.observe(coreDefRef3.current)
  }
  // Cleanup observer
  return () => {
    if (titleRef.current) {
      observer.unobserve(titleRef.current);
    }
    if (storyRef.current) {
      observer.unobserve(storyRef.current);
    }
    if(figureeRef.current){
      observer.unobserve(figureeRef.current)
    }
    if(moreRef.current){
      observer.unobserve(moreRef.current)
    }
    if(serviceImageRef.current){
      observer.unobserve(serviceImageRef.current)
    }
    if(bannerRef.current){
      observer.unobserve(bannerRef.current)
    }
    if(coreTitleRef.current){
      observer.unobserve(coreTitleRef.current)
    }
    if(coreHeadRef.current){
      observer.unobserve(coreHeadRef.current)
    }
    if(coreDefRef1.current){
      observer.unobserve(coreDefRef1.current)
    }
    if(coreDefRef2.current){
      observer.unobserve(coreDefRef2.current)
    }
    if(coreDefRef3.current){
      observer.unobserve(coreDefRef3.current)
    }
  };
}, []);
  return {titleRef, storyRef, figureeRef, moreRef, inView, serviceImageRef, bannerRef, coreTitleRef, coreHeadRef, coreDefRef1, coreDefRef2, coreDefRef3}
}

