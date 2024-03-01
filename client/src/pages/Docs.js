import {ScrollTop} from "../components/ScrollTop";
import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";
import {DocTab} from "../components/DocTab";
import {useState} from "react";

export const Docs = () => {

    //States
    const [activeComp, setActiveComp] = useState("getStarted");

    //Sidebar Toggle
    function sidebarToggle() {

    }

    return (
        <>
            <ScrollTop/>
            {/*  Navbar  */}
            <Navbar page={"docs"}/>
            {/*  Navbar End  */}
            {/*Body*/}
            <div className="docs flex" id="docs">
                {/*  sidebar  */}
                <aside className="h-screen overflow-y-scroll px-5 sm:px-10 border-r-2 border-slate-800">
                    <div className="aside-container sticky h-full flex flex-col gap-5 py-10">
                        <span className="head text-gradient text-5xl anta mb-5">EnergyJS</span>
                        <div className="panel flex flex-col gap-3">
                            <span className="head text-2xl text-cyan-300">Documentation</span>
                            <ul className="panel-list">
                                <li onClick={() => {
                                    setActiveComp("getStarted")
                                }} tabIndex={0} className={`text-white text-lg cursor-pointer transition hover:text-cyan-100 hover:border-slate-400 w-max py-1 pl-2 border-l-2 border-slate-800 ${activeComp==="getStarted"?"active":""}`}>Get Started
                                </li>
                                <li onClick={() => {
                                    setActiveComp("installation")
                                }} tabIndex={0} className={`text-white text-lg cursor-pointer transition hover:text-cyan-100 hover:border-slate-400 w-max py-1 pl-2 border-l-2 border-slate-800 ${activeComp==="installation"?"active":""}`}>Installation
                                </li>
                                <li onClick={() => {
                                    setActiveComp("examples")
                                }} tabIndex={0} className={`text-white text-lg cursor-pointer transition hover:text-cyan-100 hover:border-slate-400 w-max py-1 pl-2 border-l-2 border-slate-800 ${activeComp==="examples"?"active":""}`}>Examples
                                </li>
                                <li onClick={() => {
                                    setActiveComp("guidelines")
                                }} tabIndex={0} className={`text-white text-lg cursor-pointer transition hover:text-cyan-100 hover:border-slate-400 w-max py-1 pl-2 border-l-2 border-slate-800 ${activeComp==="guidelines"?"active":""}`}>Guidelines
                                </li>
                            </ul>
                        </div>
                        <div className="panel flex flex-col gap-3">
                            <span className="head text-2xl text-cyan-300">Methods</span>
                            <ul className="panel-list">
                                <li onClick={() => {
                                    setActiveComp("translate")
                                }} tabIndex={0} className={`text-white text-lg cursor-pointer transition hover:text-cyan-100 hover:border-slate-400 w-max py-1 pl-2 border-l-2 border-slate-800 ${activeComp==="translate"?"active":""}`}>Translate
                                </li>
                                <li onClick={() => {
                                    setActiveComp("scale")
                                }} tabIndex={0} className={`text-white text-lg cursor-pointer transition hover:text-cyan-100 hover:border-slate-400 w-max py-1 pl-2 border-l-2 border-slate-800 ${activeComp==="scale"?"active":""}`}>Scale
                                </li>
                                <li onClick={() => {
                                    setActiveComp("rotate")
                                }} tabIndex={0} className={`text-white text-lg cursor-pointer transition hover:text-cyan-100 hover:border-slate-400 w-max py-1 pl-2 border-l-2 border-slate-800 ${activeComp==="rotate"?"active":""}`}>Rotate
                                </li>
                                <li onClick={() => {
                                    setActiveComp("opacity")
                                }} tabIndex={0} className={`text-white text-lg cursor-pointer transition hover:text-cyan-100 hover:border-slate-400 w-max py-1 pl-2 border-l-2 border-slate-800 ${activeComp==="opacity"?"active":""}`}>Opacity
                                </li>
                                <li onClick={() => {
                                    setActiveComp("blur")
                                }} tabIndex={0} className={`text-white text-lg cursor-pointer transition hover:text-cyan-100 hover:border-slate-400 w-max py-1 pl-2 border-l-2 border-slate-800 ${activeComp==="blur"?"active":""}`}>Blur
                                </li>
                                <li onClick={() => {
                                    setActiveComp("brightness")
                                }} tabIndex={0} className={`text-white text-lg cursor-pointer transition hover:text-cyan-100 hover:border-slate-400 w-max py-1 pl-2 border-l-2 border-slate-800 ${activeComp==="brightness"?"active":""}`}>Brightness
                                </li>
                            </ul>
                        </div>
                    </div>
                </aside>
                {/*  sidebar end  */}
                {/*  Main  */}
                <main className="h-full w-full">
                    <div className="main-container w-full min-h-screen overflow-y-scroll">
                        <div className="title-bar border-b-2 border-slate-800 flex flex-row items-center px-5 py-5 gap-5">
                            <i className="text-white fa-solid fa-bars cursor-pointer p-2 aspect-square transition hover:bg-white hover:text-black"/>
                            <span className="title text-xl blue-2 kode">{activeComp.slice(0,1).toUpperCase() + activeComp.slice(1,).toLowerCase()}</span>
                        </div>
                        <div className="component-area p-5 overflow-y-scroll">
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
                                    {/*Get Started*/}
                                    <DocTab head={"Installation"} tag={"Installation process for both vanilla javascript and framework-based environments"}>
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
                        </div>
                    </div>
                </main>
                {/*  Main End  */}
            </div>
            {/*Body End*/}
            {/*  Footer  */}
            <Footer/>
            {/*  Footer End  */}
        </>
    )
}