import {Navbar} from "../components/Navbar";
import {FeatureCard} from "../components/FeatureCard";
import {Footer} from "../components/Footer";
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {Energy} from "../energy";
import {ScrollTop} from "../components/ScrollTop";
import supabase from "../config/supabaseClient";

export const Home = () => {

    //Navigator
    const nav = useNavigate();

    //refs
    const err = useRef(null);
    const downWindow = useRef(null);

    //States
    const [activeEffect, setActiveEffect] = useState("trans2d");
    const [errCount, setErrCount] = useState(0);
    const [downWindowOpen, setDownWindowOpen] = useState(false);
    const [downloadCount, setDownloadCount] = useState("10");

    //XY States
    const [x, setX] = useState("");
    const [y, setY] = useState("");

    //Blur State
    const [blur, setBlur] = useState("");

    //Rotate State
    const [degree, setDegree] = useState("");

    //Opacity State
    const [opacity, setOpacity] = useState("");

    //Duration State
    const [dur, setDur] = useState("800");

    //Clear States
    function clearStates() {
        setX("");
        setBlur("100");
        setDegree("360");
        setOpacity("");
        setY("");
        setDur("800");
    }

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

        if (dur > 10000) {
            if (errCount === 0) {
                err.current.innerText = "Don't enter ridiculous durations 🙏";
            } else if (errCount === 1) {
                err.current.innerText = "I told you! Don't do it 🙂";
            } else if (errCount === 2) {
                err.current.innerText = "Dude! STOP 🤬";
            } else if (errCount === 3) {
                err.current.innerText = "I am warning you 😠";
            } else if (errCount === 4) {
                err.current.innerText = "You will regret this 😤";
            } else if (errCount === 5) {
                err.current.innerText = "Do you have any mercy? 😢";
            } else if (errCount === 6) {
                err.current.innerText = "Think of the poor little box 😭";
            } else if (errCount === 7) {
                err.current.innerText = "You have forsaken your humanity 😔";
            } else if (errCount === 8) {
                err.current.innerText = "Okay then...";
            } else if (errCount === 9) {
                err.current.innerText = "You brought this upon yourself 🤷‍";
            } else if (errCount === 10) {
                err.current.innerText = "Bye Bye 👋";
            }
            setErrCount(prevState => prevState + 1)
        } else {
            err.current.innerText = "";
            if (errCount <= 10) {
                if (activeEffect === "trans2d") {
                    if (x > 200 || x < -200 || y > 200 || y < -200) {
                        err.current.innerText = "Please enter valid values of X and Y";
                    } else {
                        err.current.innerText = "";
                        elem.translate2D(x || Math.floor((Math.random() * 100) + 1), y || Math.floor((Math.random() * 100) + 1), dur || 800);
                    }
                } else if (activeEffect === "opacity") {
                    if (opacity > 1 || opacity < 0) {
                        err.current.innerText = "Please enter opacity values between 0 and 1"
                    } else {
                        err.current.innerText = "";
                        elem.opacity(opacity || 0, 800);
                    }
                } else if (activeEffect === "scale2d") {
                    if (x > 200 || x < -200 || y > 200 || y < -200) {
                        err.current.innerText = "Please enter valid values of X and Y";
                    } else {
                        err.current.innerText = "";
                        elem.scale2D(x || 0, y || 0, dur || 800);
                    }
                } else if (activeEffect === "rotate") {
                    err.current.innerText = "";
                    elem.rotate(degree || 360, dur || 800);
                } else if (activeEffect === "blur") {
                    err.current.innerText = "";
                    elem.blur(blur || 100, dur || 800);
                }
            }
        }
    }

    //Download Window Toggle
    function downWindowToggle() {
        if (downWindow.current.classList.contains("active")) {
            setDownWindowOpen(false);
            downWindow.current.classList.remove("active");
        } else {
            setDownWindowOpen(true);
            downWindow.current.classList.add("active");
        }
    }

    //Get Downloads Count
    async function getDownloads() {
        const {count} = await supabase
            .from('en_downloads')
            .select('*', {count: 'exact', head: true});
        let temp = count > 10 ? count : "10";
        setDownloadCount(temp);
    }

    //Update Download Count
    async function updateDownloadCount(name) {
        const {error} = await supabase
            .from('en_downloads')
            .insert({name: name});
    }

    //Click Out downWindow Close
    useEffect(() => {
        const closeDownWindow = (e) => {
            if(downWindow.current && !downWindow.current.contains(e.target)) {
                setDownWindowOpen(false);
                downWindow.current.classList.remove("active");
            }
        }

        document.addEventListener("mousedown", closeDownWindow);

        return () => document.removeEventListener("mousedown", closeDownWindow);
    }, [])

    //Call Downloads Count Fetch
    useEffect(() => {
        getDownloads().then();
    }, [])

    //Call PlaygroundEnergy on State Change
    useEffect(() => {
        playgroundEnergy();
    }, [activeEffect])

    return (
        <>
            <ScrollTop/>
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
                        <header className="relative">
                            <span className="version blue-1 font-bold kode absolute -right-5 -top-5">v0.1(beta)</span>
                            <span className="head sm:text-9xl text-7xl text-white anta text-gradient">EnergyJS</span>
                        </header>
                        <span className="low-tag text-center text-gray-500 sm:w-1/2 w-full">Free lightweight JavaScript animation library created by <a href="https://www.linkedin.com/in/hemantduttahd/" rel="noreferrer" target="_blank" className="transition hover:text-white">Hemant Dutta</a></span>
                        <div className="cta flex flex-row gap-5 items-center flex-wrap justify-center">
                            <div className={`kode energy-button-1 ${downWindowOpen ? "" : "click"} relative`} onClick={downWindowToggle}>
                                <div ref={downWindow} className="download-window flex flex-col gap-5 absolute left-0 w-full bg-black p-5 border border-cyan-300">
                                    <div className="download-item w-full flex flex-col gap-2">
                                        <span className="title text-white">For Vanilla JS</span>
                                        <span className="chip cursor-pointer" onClick={() => {
                                            document.getElementById("downEnMin").click()
                                        }}>Download energy.min.js</span>
                                    </div>
                                    <div className="download-item w-full flex flex-col gap-2">
                                        <span className="title text-white">For Frameworks</span>
                                        <span className="chip cursor-pointer" onClick={() => {
                                            document.getElementById("downEn").click()
                                        }}>Download energy.js</span>
                                    </div>
                                </div>
                                <span>Get energy.min.js</span>
                            </div>
                            <span className="kode energy-button-2 click" onClick={() => {
                                nav("/docs")
                            }}>Get Started</span>
                        </div>
                        <div className="downloads">
                            <span className="kode text-gray-500">Total Downloads: {downloadCount}</span>
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
                <section className="playground sm:px-10 px-5 py-20 relative overflow-hidden" id="playground">
                    <div className="bg-blob absolute"/>
                    <div className="bg-blob absolute"/>
                    <header className="relative z-50">
                        <span className="head text-5xl sm:text-7xl text-white anta text-gradient">{"<Playground/>"}</span>
                    </header>
                    <div className="content flex lg:flex-row flex-col items-center lg:gap-10 gap-20 py-20 relative z-50">
                        <div className="left intro flex flex-col gap-5 basis-1/2">
                            <span className="head text-5xl text-white anta">Want a test drive?</span>
                            <span className="des text-gray-500">Give EnergyJS a shot, right here in our playground! Try out a few of our many animations methods. For complete details, visit our <Link to={"/docs"} className="underline transition hover:text-white kode">docs</Link></span>
                        </div>
                        <div className="right p-5 flex flex-col basis-1/2 lg:w-max w-full">
                            <div className="effect-container flex flex-col">
                                <span className="head text-white py-5 kode text-3xl">Choose an effect</span>
                                <div className="effect-bar flex flex-row flex-wrap">
                                    <span className={`text-white effect text-lg kode px-10 py-5 cursor-pointer ${activeEffect === "trans2d" ? "active" : ""}`} onClick={() => {
                                        setActiveEffect("trans2d");
                                        clearStates();
                                    }} tabIndex={0}>Translate2D</span>
                                    <span className={`text-white effect text-lg kode px-10 py-5 cursor-pointer ${activeEffect === "opacity" ? "active" : ""}`} onClick={() => {
                                        setActiveEffect("opacity");
                                        clearStates();
                                    }} tabIndex={0}>Opacity</span>
                                    <span className={`text-white effect text-lg kode px-10 py-5 cursor-pointer ${activeEffect === "scale2d" ? "active" : ""}`} onClick={() => {
                                        setActiveEffect("scale2d");
                                        clearStates();
                                    }} tabIndex={0}>Scale2D</span>
                                    <span className={`text-white effect text-lg kode px-10 py-5 cursor-pointer ${activeEffect === "rotate" ? "active" : ""}`} onClick={() => {
                                        setActiveEffect("rotate");
                                        clearStates();
                                    }} tabIndex={0}>Rotate</span>
                                    <span className={`text-white effect text-lg kode px-10 py-5 cursor-pointer ${activeEffect === "blur" ? "active" : ""}`} onClick={() => {
                                        setActiveEffect("blur");
                                        clearStates();
                                    }} tabIndex={0}>Blur</span>
                                </div>
                                <div className="parameter-bar flex items-center flex-wrap gap-5 py-10">
                                    {
                                        (activeEffect === "trans2d" || activeEffect === "scale2d") &&
                                        <>
                                            <div className="param-wrapper flex flex-col sm:w-1/4">
                                                <label htmlFor="x" className="text-white">X</label>
                                                <input type="number" name="x" id="x" className="bg-gray-900 text-white p-2 outline-0" placeholder="e.g 100 or -100" value={x} onChange={(e) => {
                                                    setX(e.target.value)
                                                }}/>
                                            </div>
                                            <div className="param-wrapper flex flex-col sm:w-1/4">
                                                <label htmlFor="y" className="text-white">Y</label>
                                                <input type="number" name="y" id="y" className="bg-gray-900 text-white p-2 outline-0" placeholder="e.g 100 or -100" value={y} onChange={(e) => {
                                                    setY(e.target.value)
                                                }}/>
                                            </div>
                                        </>
                                    }
                                    {
                                        activeEffect === "blur" &&
                                        <div className="param-wrapper flex flex-col sm:w-1/4">
                                            <label htmlFor="blur" className="text-white">Amount</label>
                                            <input type="number" name="blur" id="blur" className="bg-gray-900 text-white p-2 outline-0" placeholder="e.g 100" value={blur} onChange={(e) => {
                                                setBlur(e.target.value)
                                            }}/>
                                        </div>
                                    }
                                    {
                                        activeEffect === "opacity" &&
                                        <div className="param-wrapper flex flex-col sm:w-1/4">
                                            <label htmlFor="opacity" className="text-white">Opacity</label>
                                            <input type="number" name="opacity" id="opacity" className="bg-gray-900 text-white p-2 outline-0" placeholder="from 0 to 1" value={opacity} onChange={(e) => {
                                                setOpacity(e.target.value)
                                            }}/>
                                        </div>
                                    }
                                    {
                                        activeEffect === "rotate" &&
                                        <div className="param-wrapper flex flex-col sm:w-1/4">
                                            <label htmlFor="deg" className="text-white">Degrees</label>
                                            <input type="number" name="deg" id="deg" className="bg-gray-900 text-white p-2 outline-0" placeholder="e.g. 360" value={degree} onChange={(e) => {
                                                setDegree(e.target.value)
                                            }}/>
                                        </div>
                                    }
                                    <div className="param-wrapper flex flex-col sm:w-1/4">
                                        <label htmlFor="dur" className="text-white">Duration</label>
                                        <input type="number" name="dur" id="dur" className="bg-gray-900 text-white p-2 outline-0" placeholder="in ms" value={dur} onChange={(e) => {
                                            setDur(e.target.value)
                                        }}/>
                                    </div>
                                    <div className="button-wrapper">
                                        <span tabIndex={0} className="text-white chip cursor-pointer border-2 border-slate-800 click" onClick={playgroundEnergy}>Run</span>
                                    </div>
                                </div>
                            </div>
                            <div className="effect-sandbox relative overflow-hidden bg-gray-900 grid place-items-center">
                                <div className="err absolute top-4 left-5 kode text-red-300" ref={err}/>
                                {
                                    errCount <= 10 &&
                                    <div className="sandbox-elem bg-white aspect-square grid place-items-center" id="elem">
                                        {
                                            errCount === 7 &&
                                            <span className="text-3xl">😭</span>
                                        }
                                    </div>
                                }
                                {
                                    errCount > 10 &&
                                    <span className="text-red-600 text-lg">You have been banned from the playground</span>
                                }
                            </div>
                        </div>
                    </div>
                </section>
                {/*  Playground End  */}
                {/*  hidden content  */}
                <a href="/data/energy.js" download className="hidden" onClick={() => {
                    updateDownloadCount("energy.js")
                }} id="downEn"/>
                <a href="/data/energy.min.js" className="hidden" onClick={() => {
                    updateDownloadCount("energy.min.js")
                }} download id="downEnMin"/>
                {/*  hidden content end  */}
            </div>
            {/*  Home Body End  */}
            {/*  Footer  */}
            <Footer/>
            {/*  Footer End  */}
        </>
    )
}