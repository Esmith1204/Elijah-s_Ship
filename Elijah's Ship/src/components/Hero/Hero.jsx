import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import image from '../../assets/my_face_asset.png';
import car from '../../assets/Car.jpg';
import pfp from '../../assets/Professional Pic.jpg';


gsap.registerPlugin(SplitText);

export default function Hero() {
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const btnRef = useRef(null);

    useLayoutEffect(() => {
        const split = SplitText.create(titleRef.current, {
            type: 'chars,words,lines'
        });

        const tl = gsap.timeline();

        tl.from(split.chars, {
            x: 150,
            opacity: 0,
            duration: 0.7,
            ease: 'power4.out',
            stagger: 0.04
        });

        return () => {
            split.revert();
            tl.kill();
        };
    }, []);

    return (
        <div
            className="hero min-h-screen bg-cover bg-center"
            style={{
                backgroundImage: `url(${car})`,
                position: 'relative'
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    zIndex: 1
                }}
            />
            <div
                className="flex flex-row items-center justify-center w-full max-w-4xl relative z-2"
                style={{ position: 'relative', zIndex: 2 }}
            >
                <div className="hero-content flex flex-col items-start text-left max-w-md w-full pl-20">
                    <h1 ref={titleRef} className="text-5xl font-bold w-full">
                        Elijah's Ship
                    </h1>
                    <p ref={descRef} className="py-6 w-full">
                        AKA: My website portfolio :]<br />
                    </p>
                    <button ref={btnRef} className="btn btn-primary">About Me</button>
                </div>
                <div className="ring-primary ring-offset-base-100 w-[200px] h-[200px] rounded-full ring-2 ring-offset-2 overflow-hidden flex items-center justify-center ml-1">
                    <img
                        src={pfp}
                        className="w-full h-full object-cover rounded-full"
                        alt="Profile"
                    />
                </div>
            </div>
        </div>
    );
}