import {Navbar} from "../components/Navbar";
import {FeatureCard} from "../components/FeatureCard";
import {Footer} from "../components/Footer";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {Energy} from "../energy";

export const Home = () => {

    //States
    const [activeEffect, setActiveEffect] = useState("trans2d");

    //Features
    const features = [
        {
            icon: "/assets/features/en_ft_1.png",
            title: "0 Dependencies",
            des: "EnergyJS boasts independence, requiring no external dependencies for its functionality.",
        },
        {
            icon: "/assets/features/en_ft_3.png",
            title: "Lightweight",
            des: "Experience unparalleled efficiency with our library's compact size—less than 4KB. Enjoy lightning-fast performance without sacrificing functionality or bloat.",
        },
        {
            icon: "/assets/features/en_ft_2.png",
            title: "Low Syntax",
            des: "With EnergyJS, animating an element is streamlined to just two lines of code, simplifying the implementation process.",
        },
        {
            icon: "/assets/features/en_ft_4.png",
            title: "Use Anywhere",
            des: "Use it with React, Vue, Svelte, Angular, Next or just plain JavaScript. EnergyJs is framework independent.",
        },
    ];

    //Playground EnergyJS Function
    function playgroundEnergy() {
        const elem = new Energy("#elem");

        if(activeEffect === "trans2d") {
            elem.translate2D(Math.floor((Math.random()*100)+1), Math.floor((Math.random()*100)+1), 800);
        }
        else if(activeEffect === "opacity") {
            elem.opacity(0, 800);
        }
        else if(activeEffect === "scale2d") {
            elem.scale2D(0,0, 800);
        }
        else if(activeEffect === "rotate") {
            elem.rotate(Math.floor((Math.random()*360) + 1), 800);
        }
        else if(activeEffect === "blur") {
            elem.blur(Math.floor((Math.random()*100)+1), 800);
        }
    }

    //Call PlaygroundEnergy on State Change
    useEffect(()=>{
        playgroundEnergy();
    },[activeEffect])

    return (
        <>
            {/*  Navbar  */}
            <Navbar page={"home"}/>
            {/*  Navbar End  */}
            {/*  Home Body  */}
            <div className="home" id="home">
                {/*Hero*/}
                <section className="hero h-screen w-full relative py-20 px-5 sm:px-10" id="hero">
                    <div className="hero-overlay absolute h-screen w-screen top-0 left-0 z-10"/>
                    <div className="hero-content relative z-50 h-full flex flex-col gap-10 items-center justify-end">
                        <a href="https://github.com/HemantDutta/EnergyJS" className="high-tag chip sm:text-xl text-sm kode" rel="noreferrer" target="_blank">Github <i className="fa-brands fa-github"/></a>
                        <span className="head sm:text-9xl text-7xl text-white anta text-gradient">EnergyJS</span>
                        <span className="low-tag text-center text-gray-500 sm:w-1/2 w-full">Free lightweight JavaScript animation library created by <a href="https://www.linkedin.com/in/hemantduttahd/" rel="noreferrer" target="_blank" className="transition hover:text-white">Hemant Dutta</a></span>
                        <div className="cta flex flex-row gap-5 items-center flex-wrap justify-center">
                            <span className="kode energy-button-1 click">Get energy.min.js</span>
                            <span className="kode energy-button-2 click">Get Started</span>
                        </div>
                    </div>
                </section>
                {/*Hero End*/}
                {/*  Features  */}
                <section className="features sm:px-10 px-5 py-20" id="features">
                    <header>
                        <span className="head text-5xl sm:text-7xl text-white anta text-gradient">{"<Features/>"}</span>
                    </header>
                    <div className="feature-grid grid gap-x-10 gap-y-20 py-24 grid-cols-3 place-items-center items-start">
                        {
                            features.map((value, index) => {
                                return (
                                    <FeatureCard value={value} key={index}/>
                                )
                            })
                        }
                        <div className="grid-image col-span-2 row-span-4 relative w-full h-full">
                            <div className="grid-image-overlay z-50"/>
                            <img src="assets/hero/ejs_hero_1.jpg" alt="Energy JS Artwork" className="object-cover w-full h-full relative z-10"/>
                        </div>
                    </div>
                </section>
                {/*  Features End  */}
                {/*  Playground  */}
                <section className="playground sm:px-10 px-5 py-20" id="playground">
                    <header>
                        <span className="head text-5xl sm:text-7xl text-white anta text-gradient">{"<Playground/>"}</span>
                    </header>
                    <div className="content flex lg:flex-row flex-col items-center lg:gap-10 gap-20 py-20">
                        <div className="left intro flex flex-col gap-5 basis-1/2">
                            <span className="head text-5xl text-white anta">Want a test drive?</span>
                            <span className="des text-gray-500">Give EnergyJS a shot, right here in our playground! Try out a few of our many animations methods. For complete details, visit our <Link to={"/docs"} className="underline transition hover:text-white kode">docs</Link></span>
                        </div>
                        <div className="right flex flex-col basis-1/2 lg:w-max w-full">
                            <div className="effect-container flex flex-col">
                                <span className="head chip text-3xl">Choose an effect</span>
                                <div className="effect-bar flex flex-row flex-wrap gap-2 py-5">
                                    <span className={`text-white effect text-lg px-10 py-5 cursor-pointer ${activeEffect === "trans2d" ? "active" : ""}`} onClick={() => {
                                        setActiveEffect("trans2d")
                                    }} tabIndex={0}>Translate2D</span>
                                    <span className={`text-white effect text-lg px-10 py-5 cursor-pointer ${activeEffect === "opacity" ? "active" : ""}`} onClick={() => {
                                        setActiveEffect("opacity")
                                    }} tabIndex={0}>Opacity</span>
                                    <span className={`text-white effect text-lg px-10 py-5 cursor-pointer ${activeEffect === "scale2d" ? "active" : ""}`} onClick={() => {
                                        setActiveEffect("scale2d")
                                    }} tabIndex={0}>Scale2D</span>
                                    <span className={`text-white effect text-lg px-10 py-5 cursor-pointer ${activeEffect === "rotate" ? "active" : ""}`} onClick={() => {
                                        setActiveEffect("rotate")
                                    }} tabIndex={0}>Rotate</span>
                                    <span className={`text-white effect text-lg px-10 py-5 cursor-pointer ${activeEffect === "blur" ? "active" : ""}`} onClick={() => {
                                        setActiveEffect("blur")
                                    }} tabIndex={0}>Blur</span>
                                </div>
                            </div>
                            <div className="effect-sandbox overflow-hidden grid place-items-center">
                                <div className="sandbox-elem bg-white aspect-square" id="elem"/>
                            </div>
                        </div>
                    </div>
                </section>
                {/*  Playground End  */}
            </div>
            {/*  Home Body End  */}
            {/*  Footer  */}
            <Footer/>
            {/*  Footer End  */}
        </>
    )
}