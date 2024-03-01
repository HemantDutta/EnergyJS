import {ScrollTop} from "../components/ScrollTop";
import {Navbar} from "../components/Navbar";
import {DocTab} from "../components/DocTab";
import {useEffect, useRef, useState} from "react";
import {SubDocTab} from "../components/SubDocTab";
import SyntaxHighlighter from 'react-syntax-highlighter';
import {atomOneDarkReasonable} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {useLocation} from "react-router-dom";

export const Docs = () => {

    //Get State Location
    const location = useLocation().state;

    //Static Code String
    const vanillaHTMLString = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Web Page</title>
</head>
<body>
    <!-- Your HTML content -->
    
<!-- Link EnergyJS library -->
<script src="path/to/energy.min.js"></script>
<!-- Link your main JavaScript file -->
<script src="path/to/main.js"></script>
</body>
</html>
`;
    const jsxReactString = `// Inside your React component file
import React from 'react';
import {Energy} from './energy.js';

function YourComponent(){
    //You component logic here
}

export default YourComponent;
`;

    const jsxReactClick = `// Inside your React component file
import React from 'react';
import {Energy} from './energy.js';

function YourComponent(){

    function animateOnClick(){
        const box = new Energy("#box");
        box.translate2D(-100, 100, 800);
    }
    
    return(
        <>
            <div className="box" id="box"></div>
            <button type="button" onClick={animateOnClick}>Click me</button>  
        </>
    )
}

export default YourComponent;
`;

    const jsxReactLoad = `// Inside your React component file
import React from 'react';
import {Energy} from './energy.js';

function YourComponent(){

    useEffect(()=>{
        const box = new Energy("#box");
        box.translate2D(-100, 100, 800);
    },[])
    
    return(
        <>
            <div className="box" id="box"></div>
        </>
    )
}

export default YourComponent;
`;

    const vanillaHTMLClick = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Web Page</title>
</head>
<body>
    <div class="box" id="box"></div>
    <button type="button" onclick="animateBox()">Click Me</button>

<script src="path/to/energy.min.js"></script>
<script> 
function animateBox() {
    const box = new Energy("#box");
    box.translate2D(-100, 100, 800);
}
</script>
</body>
</html>
`;

    const vanillaHTMLLoad = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Web Page</title>
</head>
<body>
    <div class="box" id="box"></div>
    
<script src="path/to/energy.min.js"></script>
<script> 

// First way: Using Global Scope
const box = new Energy("#box");
box.translate2D(-100, 100, 800);

// Second way: Add an event listener on the html document
document.addEventListener("load", animateBox);

function animateBox() {
    const box = new Energy("#box");
    box.translate2D(-100, 100, 800);
}
</script>
</body>
</html>
`;

    //States
    const [activeComp, setActiveComp] = useState("getStarted");

    //Refs
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
                        <div className="aside-container sticky h-full flex flex-col gap-5 py-10">
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
                                                <span className="energy-button-1 click">Download energy.min.js</span>
                                                <span className="energy-button-2 click">Download energy.js</span>
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
                                            </div>
                                        </DocTab>
                                        {/*Installation End*/}
                                    </>
                                }
                            </div>
                        </div>
                    </main>
                    {/*  Main End  */}
                </div>
                {/*Body End*/}
            </div>
        </>
    )
}