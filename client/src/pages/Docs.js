import {ScrollTop} from "../components/ScrollTop";
import {Navbar} from "../components/Navbar";
import {DocTab} from "../components/DocTab";
import {useEffect, useRef, useState} from "react";
import {SubDocTab} from "../components/SubDocTab";
import SyntaxHighlighter from 'react-syntax-highlighter';
import {atomOneDarkReasonable} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {useLocation} from "react-router-dom";
import {blurMethods, chainMethods, jsxReactClick, jsxReactLoad, opacityMethods, jsxReactString, scaleMethods, rotateMethods, translateMethods, selectorGuideline, vanillaHTMLClick, vanillaHTMLLoad, vanillaHTMLString, brightnessMethods} from "../static/static";
import supabase from "../config/supabaseClient";
import {Helmet} from "react-helmet-async";

export const Docs = () => {

    //Get State Location
    const location = useLocation().state || "getStarted";

    //States
    const [activeComp, setActiveComp] = useState("getStarted");

    //Set Location State if any
    useEffect(() => {
        if (first.current) {
            first.current = false;
            setActiveComp(location);
        }
    }, [])

    //Refs
    const first = useRef(true);
    const sidebar = useRef(null);
    const sideOverlay = useRef(null);

    //Sidebar Toggle
    function sidebarToggle() {
        if (window.innerWidth < 1025) {
            if (sidebar.current.classList.contains("active")) {
                sidebar.current.classList.remove("active");
                sideOverlay.current.classList.remove("active");
                setTimeout(() => {
                    sideOverlay.current.style.display = "none";
                }, 400)
            } else {
                sidebar.current.classList.add("active");
                sideOverlay.current.style.display = "initial";
                setTimeout(() => {
                    sideOverlay.current.classList.add("active");
                }, 0)
            }
        }
    }

    //Update Download Count
    async function updateDownloadCount(name) {
        const {error} = await supabase
            .from('en_downloads')
            .insert({name: name});
    }

    //Remove active class from sidebar
    useEffect(() => {
        const closeSidebar = () => {
            if (window.innerWidth > 1025) {
                sidebar.current.classList.remove("active");
                sideOverlay.current.classList.remove("active");
            }
        }

        window.addEventListener("resize", closeSidebar);

        return window.removeEventListener("resize", closeSidebar);
    }, [])

    return (
        <>
            {/*Helmet*/}
            <Helmet>
                <title>Docs | EnergyJS</title>
                <link rel="canonical" href="/docs"/>
            </Helmet>
            {/*Helmet End*/}
            <ScrollTop/>
            <div className="outer-container h-screen overflow-y-hidden">
                {/*  Navbar  */}
                <Navbar page={"docs"}/>
                {/*  Navbar End  */}
                {/*Body*/}
                <div className="docs flex relative overflow-y-hidden h-full" id="docs">
                    {/*Sidebar Overlay*/}
                    <div ref={sideOverlay} onClick={sidebarToggle} className="side-overlay z-40 absolute h-full w-full bg-black opacity-70"/>
                    {/*Sidebar Overlay End*/}
                    {/*  sidebar  */}
                    <aside className="h-full overflow-y-scroll px-5 sm:px-10 border-r-2 border-slate-800 z-50" ref={sidebar}>
                        <div className="aside-container mb-96 sticky h-full flex flex-col gap-5 py-10">
                            <span className="head text-gradient text-5xl anta mb-5">EnergyJS</span>
                            <i className="side-close fa-solid fa-x text-xl text-white absolute top-12 right-0 cursor-pointer" tabIndex={0} onClick={sidebarToggle}/>
                            <div className="panel flex flex-col gap-3">
                                <span className="head text-2xl text-cyan-300">Documentation</span>
                                <ul className="panel-list">
                                    <li onClick={() => {
                                        setActiveComp("getStarted");
                                        sidebarToggle()
                                    }} tabIndex={0} className={`text-white text-lg cursor-pointer transition hover:text-cyan-100 hover:border-slate-400 w-max py-1 pl-2 border-l-2 border-slate-800 ${activeComp === "getStarted" ? "active" : ""}`}>Get Started
                                    </li>
                                    <li onClick={() => {
                                        setActiveComp("installation");
                                        sidebarToggle()
                                    }} tabIndex={0} className={`text-white text-lg cursor-pointer transition hover:text-cyan-100 hover:border-slate-400 w-max py-1 pl-2 border-l-2 border-slate-800 ${activeComp === "installation" ? "active" : ""}`}>Installation
                                    </li>
                                    <li onClick={() => {
                                        setActiveComp("examples");
                                        sidebarToggle()
                                    }} tabIndex={0} className={`text-white text-lg cursor-pointer transition hover:text-cyan-100 hover:border-slate-400 w-max py-1 pl-2 border-l-2 border-slate-800 ${activeComp === "examples" ? "active" : ""}`}>Examples
                                    </li>
                                    <li onClick={() => {
                                        setActiveComp("guidelines");
                                        sidebarToggle()
                                    }} tabIndex={0} className={`text-white text-lg cursor-pointer transition hover:text-cyan-100 hover:border-slate-400 w-max py-1 pl-2 border-l-2 border-slate-800 ${activeComp === "guidelines" ? "active" : ""}`}>Guidelines
                                    </li>
                                </ul>
                            </div>
                            <div className="panel flex flex-col gap-3">
                                <span className="head text-2xl text-cyan-300">Methods</span>
                                <ul className="panel-list">
                                    <li onClick={() => {
                                        setActiveComp("translate");
                                        sidebarToggle()
                                    }} tabIndex={0} className={`text-white text-lg cursor-pointer transition hover:text-cyan-100 hover:border-slate-400 w-max py-1 pl-2 border-l-2 border-slate-800 ${activeComp === "translate" ? "active" : ""}`}>Translate
                                    </li>
                                    <li onClick={() => {
                                        setActiveComp("scale");
                                        sidebarToggle()
                                    }} tabIndex={0} className={`text-white text-lg cursor-pointer transition hover:text-cyan-100 hover:border-slate-400 w-max py-1 pl-2 border-l-2 border-slate-800 ${activeComp === "scale" ? "active" : ""}`}>Scale
                                    </li>
                                    <li onClick={() => {
                                        setActiveComp("rotate");
                                        sidebarToggle()
                                    }} tabIndex={0} className={`text-white text-lg cursor-pointer transition hover:text-cyan-100 hover:border-slate-400 w-max py-1 pl-2 border-l-2 border-slate-800 ${activeComp === "rotate" ? "active" : ""}`}>Rotate
                                    </li>
                                    <li onClick={() => {
                                        setActiveComp("opacity");
                                        sidebarToggle()
                                    }} tabIndex={0} className={`text-white text-lg cursor-pointer transition hover:text-cyan-100 hover:border-slate-400 w-max py-1 pl-2 border-l-2 border-slate-800 ${activeComp === "opacity" ? "active" : ""}`}>Opacity
                                    </li>
                                    <li onClick={() => {
                                        setActiveComp("blur");
                                        sidebarToggle()
                                    }} tabIndex={0} className={`text-white text-lg cursor-pointer transition hover:text-cyan-100 hover:border-slate-400 w-max py-1 pl-2 border-l-2 border-slate-800 ${activeComp === "blur" ? "active" : ""}`}>Blur
                                    </li>
                                    <li onClick={() => {
                                        setActiveComp("brightness");
                                        sidebarToggle()
                                    }} tabIndex={0} className={`text-white text-lg cursor-pointer transition hover:text-cyan-100 hover:border-slate-400 w-max py-1 pl-2 border-l-2 border-slate-800 ${activeComp === "brightness" ? "active" : ""}`}>Brightness
                                    </li>
                                    <li className={`text-white text-lg cursor-pointer transition hover:text-cyan-100 hover:border-slate-400 w-max py-1 pl-2 border-l-2 border-slate-800`}>More Coming Soon...</li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                    {/*  sidebar end  */}
                    {/*  Main  */}
                    <main className={`h-full w-full overflow-y-auto z-10 relative`}>
                        <div className="main-container w-full">
                            <div className={`title-bar sticky top-0 left-0 border-b-2 border-slate-800 flex flex-row items-center px-5 py-5 gap-5`}>
                                <i tabIndex={0} onClick={sidebarToggle} className="text-white fa-solid fa-bars cursor-pointer p-2 aspect-square transition hover:bg-white hover:text-black"/>
                                <span className="title text-xl blue-2 kode">{activeComp.slice(0, 1).toUpperCase() + activeComp.slice(1,).toLowerCase()}</span>
                            </div>
                            <div className="component-area p-5 mb-24">
                                {
                                    activeComp === "getStarted" &&
                                    <>
                                        {/*Get Started*/}
                                        <DocTab head={"Get Started"} tag={"Get Started with EnergyJS by downloading the appropriate file"}>
                                            <div className="description text-white flex flex-col gap-3">
                                                <span>Download EnergyJS from our official website based on your project's needs: "<a href="#" className="underline blue-2">energy.min.js</a>" for plain JavaScript projects and "<a href="#" className="underline blue-2">energy.js</a>" for framework-based environments. Start animating your web elements with ease and efficiency.</span>
                                                <span>Plain JavaScript implies that you are not using any framework such as React, Angular, Vue, Next, Svelte, etc. </span>
                                            </div>
                                            <div className="cta flex flex-row gap-5 items-center flex-wrap">
                                                <span className="energy-button-1 click cursor-pointer" onClick={()=>{document.getElementById("downEnMin").click()}}>Download energy.min.js</span>
                                                <span className="energy-button-2 click cursor-pointer" onClick={()=>{document.getElementById("downEn").click()}}>Download energy.js</span>
                                            </div>
                                        </DocTab>
                                        {/*Get Started End*/}
                                    </>
                                }
                                {
                                    activeComp === "installation" &&
                                    <>
                                        {/*Installation*/}
                                        <DocTab head={"Installation"} tag={"Installation process for both vanilla javascript and framework-based environments"}>
                                            <div className="description text-white flex flex-col gap-3">
                                                <span>After you have downloaded the correct file according to your project, it is now time to install it in your environment so that you can animate with ease.</span>
                                                <span>The installation Process is different for vanilla javascript and framework-based environments.</span>
                                            </div>
                                            <SubDocTab head="Vanilla JavaScript" tag="To integrate EnergyJS into your vanilla JavaScript project, follow these simple steps:">
                                                <ul className="step-list list-disc pl-10">
                                                    <li className="text-white">Download the energy.min.js file from our official website.</li>
                                                    <li className="text-white">Link the energy.min.js file to your HTML page using the {"<script>"} tag. Ensure it appears above the {"<script>"} tag of your main JavaScript file to access the Energy class within your application.</li>
                                                </ul>
                                                <SyntaxHighlighter language="html" style={atomOneDarkReasonable}>
                                                    {vanillaHTMLString}
                                                </SyntaxHighlighter>
                                            </SubDocTab>
                                            <SubDocTab head="React JS" tag="Integrating EnergyJS into your React project is straightforward:">
                                                <ul className="step-list list-disc pl-10">
                                                    <li className="text-white">Place the energy.js file in your React project's src folder.</li>
                                                    <li className="text-white">Import the Energy class from the energy.js file into any React component where you intend to utilize its functionality.</li>
                                                </ul>
                                                <SyntaxHighlighter language="jsx" style={atomOneDarkReasonable}>
                                                    {jsxReactString}
                                                </SyntaxHighlighter>
                                            </SubDocTab>
                                        </DocTab>
                                        {/*Installation End*/}
                                    </>
                                }
                                {
                                    activeComp === "examples" &&
                                    <>
                                        {/*Installation*/}
                                        <DocTab head={"Examples"} tag={"Here are some of the ways you can use EnergyJS in your projects"}>
                                            <div className="description text-white flex flex-col gap-3">
                                                <SubDocTab head={"Animate on event"} tag={"Here I will demonstrate how to trigger animations using the 'click' event, however you can get creative and try to implement other events as" +
                                                    "well."}>
                                                    <SubDocTab head="Vanilla JavaScript" tag="Here's how to do it in vanilla javascript and html:">
                                                        <SyntaxHighlighter language="html" style={atomOneDarkReasonable}>
                                                            {vanillaHTMLClick}
                                                        </SyntaxHighlighter>
                                                    </SubDocTab>
                                                    <SubDocTab head="React JS" tag="Here's how to do it react:">
                                                        <SyntaxHighlighter language="html" style={atomOneDarkReasonable}>
                                                            {jsxReactClick}
                                                        </SyntaxHighlighter>
                                                    </SubDocTab>
                                                </SubDocTab>
                                                <SubDocTab head={"Animate on Load"} tag={"Here I will demonstrate how to trigger animations on load"}>
                                                    <SubDocTab head="Vanilla JavaScript" tag="There are two ways to do it with Vanilla JS:">
                                                        <SyntaxHighlighter language="html" style={atomOneDarkReasonable}>
                                                            {vanillaHTMLLoad}
                                                        </SyntaxHighlighter>
                                                    </SubDocTab>
                                                    <SubDocTab head="React JS" tag="Here's how to do it react:">
                                                        <SyntaxHighlighter language="html" style={atomOneDarkReasonable}>
                                                            {jsxReactLoad}
                                                        </SyntaxHighlighter>
                                                    </SubDocTab>
                                                </SubDocTab>
                                                <SubDocTab head={"Chain Animation Methods"} tag={"Yes, you can apply multiple animation methods on a single element."}>
                                                    <SubDocTab head="Vanilla JS / React JS" tag="Here's how:">
                                                        <SyntaxHighlighter language="html" style={atomOneDarkReasonable}>
                                                            {chainMethods}
                                                        </SyntaxHighlighter>
                                                    </SubDocTab>
                                                </SubDocTab>
                                            </div>
                                        </DocTab>
                                        {/*Installation End*/}
                                    </>
                                }
                                {
                                    activeComp === "guidelines" &&
                                    <>
                                        <DocTab head="Guidelines" tag="Here are somethings you should keep in mind while using EnergyJS">
                                            <ul className="guideline-list list-disc flex flex-col gap-5 pl-10">
                                                <li className="text-white">Don't chain two or more transform based methods together, such as <span className="kode blue-2">translate2D</span>, <span className="kode blue-2">translateX</span>, etc. To know more about transform based methods, <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform" rel="noreferrer" target="_blank" className="underline">visit here.</a></li>
                                                <li className="text-white">If you chain two methods and give different two different duration values, the value passed later will be applied to both the effects.</li>
                                                <li className="text-white">Read the documentation for each method carefully. Especially understand how to call the methods and pass arguments to them.</li>
                                                <li className="text-white">When passing the selector to the <span className="kode blue-2">Energy</span> class constructor, make sure you pass the CSS selector value of the element you want to animate. Example:</li>
                                                <SyntaxHighlighter language="js" style={atomOneDarkReasonable}>
                                                    {selectorGuideline}
                                                </SyntaxHighlighter>
                                                <li className="text-white">We are currently in beta version, so if you find any issues in the library, please reach out to me <a href="https://www.linkedin.com/in/hemantduttahd/" rel="noreferrer" target="_blank" className="underline">here</a>.</li>
                                            </ul>
                                        </DocTab>
                                    </>
                                }
                                {
                                    activeComp === "translate" &&
                                    <>
                                        <DocTab head="Translate" tag="Here's how to use all the translate animation methods">
                                            <ul className="trans-list list-disc pl-10">
                                                <li className="text-white">All the "X" and "Y" arguments expect percentage values. e.g. <span className="blue-2 kode">box.translate2D(x:100,y:100,dur:800)</span></li>
                                                <li className="text-white">"dur" argument expects duration in milliseconds.</li>
                                            </ul>
                                            <SubDocTab head="Available Methods" tag="Here are all the translate based methods and their implementation: ">
                                                <SyntaxHighlighter language="html" style={atomOneDarkReasonable}>
                                                    {translateMethods}
                                                </SyntaxHighlighter>
                                            </SubDocTab>
                                        </DocTab>
                                    </>
                                }
                                {
                                    activeComp === "scale" &&
                                    <>
                                        <DocTab head="Scale" tag="Here's how to use all the Scale animation methods">
                                            <ul className="trans-list list-disc pl-10">
                                                <li className="text-white">All the "X" and "Y" arguments expect percentage values. e.g. <span className="blue-2 kode">box.scale2D(x:100,y:100,dur:800)</span></li>
                                                <li className="text-white">"dur" argument expects duration in milliseconds.</li>
                                            </ul>
                                            <SubDocTab head="Available Methods" tag="Here are all the Scale based methods and their implementation: ">
                                                <SyntaxHighlighter language="html" style={atomOneDarkReasonable}>
                                                    {scaleMethods}
                                                </SyntaxHighlighter>
                                            </SubDocTab>
                                        </DocTab>
                                    </>
                                }
                                {
                                    activeComp === "rotate" &&
                                    <>
                                        <DocTab head="Rotate" tag="Here's how to use all the rotate animation methods">
                                            <ul className="trans-list list-disc pl-10">
                                                <li className="text-white">"angle" argument expects a degree value. e.g. <span className="blue-2 kode">box.rotate(angle:360,dur:800)</span></li>
                                                <li className="text-white">"axis" argument expects an axis value such a "x", "y" or "z".</li>
                                                <li className="text-white">"dur" argument expects duration in milliseconds.</li>
                                            </ul>
                                            <SubDocTab head="Available Methods" tag="Here are all the rotate based methods and their implementation: ">
                                                <SyntaxHighlighter language="html" style={atomOneDarkReasonable}>
                                                    {rotateMethods}
                                                </SyntaxHighlighter>
                                            </SubDocTab>
                                        </DocTab>
                                    </>
                                }
                                {
                                    activeComp === "opacity" &&
                                    <>
                                        <DocTab head="Opacity" tag="Here's how to use all the Opacity animation methods">
                                            <ul className="trans-list list-disc pl-10">
                                                <li className="text-white">"amt" argument expects a value between 0 and 1. e.g. <span className="blue-2 kode">box.opacity(amt:0.5,dur:800)</span></li>
                                                <li className="text-white">"dur" argument expects duration in milliseconds.</li>
                                            </ul>
                                            <SubDocTab head="Available Methods" tag="Here are all the Opacity based methods and their implementation: ">
                                                <SyntaxHighlighter language="html" style={atomOneDarkReasonable}>
                                                    {opacityMethods}
                                                </SyntaxHighlighter>
                                            </SubDocTab>
                                        </DocTab>
                                    </>
                                }
                                {
                                    activeComp === "blur" &&
                                    <>
                                        <DocTab head="Blur" tag="Here's how to use all the Blur animation methods">
                                            <ul className="trans-list list-disc pl-10">
                                                <li className="text-white">"amt" argument expects a pixel value. e.g. <span className="blue-2 kode">box.blur(amt:100,dur:800)</span></li>
                                                <li className="text-white">"dur" argument expects duration in milliseconds.</li>
                                            </ul>
                                            <SubDocTab head="Available Methods" tag="Here are all the Blur based methods and their implementation: ">
                                                <SyntaxHighlighter language="html" style={atomOneDarkReasonable}>
                                                    {blurMethods}
                                                </SyntaxHighlighter>
                                            </SubDocTab>
                                        </DocTab>
                                    </>
                                }
                                {
                                    activeComp === "brightness" &&
                                    <>
                                        <DocTab head="Brightness" tag="Here's how to use all the Brightness animation methods">
                                            <ul className="trans-list list-disc pl-10">
                                                <li className="text-white">"amt" argument expects a pixel value. e.g. <span className="blue-2 kode">box.blur(amt:100,dur:800)</span></li>
                                                <li className="text-white">"dur" argument expects duration in milliseconds.</li>
                                            </ul>
                                            <SubDocTab head="Available Methods" tag="Here are all the Brightness based methods and their implementation: ">
                                                <SyntaxHighlighter language="html" style={atomOneDarkReasonable}>
                                                    {brightnessMethods}
                                                </SyntaxHighlighter>
                                            </SubDocTab>
                                        </DocTab>
                                    </>
                                }
                            </div>
                        </div>
                    </main>
                    {/*  Main End  */}
                    {/*  hidden content  */}
                    <a href="/data/energy.js" download className="hidden" onClick={() => {
                        updateDownloadCount("energy.js")
                    }} id="downEn"/>
                    <a href="/data/energy.min.js" className="hidden" onClick={() => {
                        updateDownloadCount("energy.min.js")
                    }} download id="downEnMin"/>
                    {/*  hidden content end  */}
                </div>
                {/*Body End*/}
            </div>
        </>
    )
}