import {gsap} from "gsap";
import {useEffect, useRef, useState} from "react";

export const PreLoader = () => {

    //Refs
    const preLoader = useRef(null);

    //State
    const [load, setLoad] = useState(0);

    //Load Interval
    useEffect(() => {
        const interval = setInterval(() => {
            setLoad(prev => prev + 1);
        }, 30)

        if (load > 99) {
            clearInterval(interval);
            closePreLoader();
        }

        return () => clearInterval(interval);
    }, [load])

    //Animation
    useEffect(() => {
        gsap.from(".logo-text span", {
            stagger: 0.05,
            yPercent: 100,
            duration: 0.2,
        })
    }, [])

    //After Load animation
    function closePreLoader() {
        const tl = gsap.timeline();

        tl
            .to(".loader", {
                yPercent: 100,
                opacity: 0
            })
            .to(".pre-loader", {
                opacity: 0,
                onComplete: () => {
                    preLoader.current.style.display = "none"
                },
            })
    }

    return (
        <>
            <div ref={preLoader} className="pre-loader fixed top-0 left-0 flex flex-col gap-10 items-center pb-52 justify-end h-screen w-screen bg-black">
                <div className="logo-text py-2 text-white text-7xl sm:text-9xl anta overflow-hidden">
                    <span>E</span>
                    <span>n</span>
                    <span>e</span>
                    <span>r</span>
                    <span>g</span>
                    <span>y</span>
                    <span>J</span>
                    <span>S</span>
                </div>
                <div className="loader">
                    <span className="blue-1 kode text-3xl">{load}%</span>
                </div>
            </div>
        </>
    )
}