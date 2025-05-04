import React, {useRef, useLayoutEffect} from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

export default function Hero() {

    const titleRef = useRef(null)
    const descRef = useRef(null)
    const btnRef = useRef(null)

    useLayoutEffect(() => {
        const split = SplitText.create(titleRef.current, {
            type: 'chars,words,lines'
          })

        const tl = gsap.timeline()

        tl.from(split.chars, {
            x: 150,
            opacity: 0,
            duration: 0.7,
            ease: 'power4.out',
            stagger: 0.04
          })

          return () => {
            split.revert()
            tl.kill()
          }
        }, [])
      
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                <h1 ref={titleRef} className="text-5xl font-bold">
                    Elijah's Ship
                </h1>
                <p className="py-6">
                    AKA: My website portfolio :]<br />
                </p>
                <button className="btn btn-primary">About Me</button>
                </div>
            </div>
        </div>
    );
}
