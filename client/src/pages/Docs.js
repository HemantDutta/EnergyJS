import {ScrollTop} from "../components/ScrollTop";
import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";

export const Docs = () => {
    return (
        <>
            <ScrollTop/>
            {/*  Navbar  */}
            <Navbar page={"docs"}/>
            {/*  Navbar End  */}
            {/*Body*/}
            <div className="docs flex" id="docs">
                {/*  sidebar  */}
                <aside className="h-screen overflow-y-scroll px-5 sm:px-10 border-r-2">
                    <div className="aside-container sticky h-full flex flex-col gap-5 py-10 mt-32">
                        <span className="head text-gradient text-5xl anta mb-5">EnergyJS</span>
                        <div className="panel flex flex-col gap-3">
                            <span className="head text-2xl text-cyan-300">Documentation</span>
                            <ul className="panel-list">
                                <li tabIndex={0} className="text-white text-lg cursor-pointer transition hover:text-cyan-100 hover:border-slate-400 w-max py-1 pl-2 border-l-2 border-slate-800 active">Get Started</li>
                                <li tabIndex={0} className="text-white text-lg cursor-pointer transition hover:text-cyan-100 hover:border-slate-400 w-max py-1 pl-2 border-l-2 border-slate-800">Installation</li>
                                <li tabIndex={0} className="text-white text-lg cursor-pointer transition hover:text-cyan-100 hover:border-slate-400 w-max py-1 pl-2 border-l-2 border-slate-800">Examples</li>
                                <li tabIndex={0} className="text-white text-lg cursor-pointer transition hover:text-cyan-100 hover:border-slate-400 w-max py-1 pl-2 border-l-2 border-slate-800">Guidelines</li>
                            </ul>
                        </div>
                        <div className="panel flex flex-col gap-3">
                            <span className="head text-2xl text-cyan-300">Methods</span>
                            <ul className="panel-list">
                                <li tabIndex={0} className="text-white text-lg cursor-pointer transition hover:text-cyan-100 hover:border-slate-400 w-max py-1 pl-2 border-l-2 border-slate-800">Translate</li>
                                <li tabIndex={0} className="text-white text-lg cursor-pointer transition hover:text-cyan-100 hover:border-slate-400 w-max py-1 pl-2 border-l-2 border-slate-800">Scale</li>
                                <li tabIndex={0} className="text-white text-lg cursor-pointer transition hover:text-cyan-100 hover:border-slate-400 w-max py-1 pl-2 border-l-2 border-slate-800">Rotate</li>
                                <li tabIndex={0} className="text-white text-lg cursor-pointer transition hover:text-cyan-100 hover:border-slate-400 w-max py-1 pl-2 border-l-2 border-slate-800">Opacity</li>
                                <li tabIndex={0} className="text-white text-lg cursor-pointer transition hover:text-cyan-100 hover:border-slate-400 w-max py-1 pl-2 border-l-2 border-slate-800">Blur</li>
                                <li tabIndex={0} className="text-white text-lg cursor-pointer transition hover:text-cyan-100 hover:border-slate-400 w-max py-1 pl-2 border-l-2 border-slate-800">Brightness</li>
                            </ul>
                        </div>
                    </div>
                </aside>
                {/*  sidebar end  */}
                {/*  Main  */}
                <main className="h-screen w-full">
                    <div className="main-container w-full h-full mt-32">
                        <div className="title-bar border-b-2 flex flex-row gap-5">
                            <i className="text-white fa-solid fa-bars"/>
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