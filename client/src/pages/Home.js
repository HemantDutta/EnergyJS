import {Navbar} from "../components/Navbar";

export const Home = () => {
    return (
        <>
            {/*  Navbar  */}
            <Navbar page={"home"}/>
            {/*  Navbar End  */}
            {/*  Home Body  */}
            <div className="home" id="home">
                <section className="hero h-screen w-full relative py-20 px-5" id="hero">
                    <div className="hero-overlay absolute h-screen w-screen top-0 left-0 z-10"/>
                    <div className="hero-content relative z-50 h-full flex flex-col gap-10 items-center justify-end">
                        <a href="https://github.com/HemantDutta" className="high-tag chip sm:text-xl text-sm kode" rel="noreferrer" target="_blank">Github <i className="fa-brands fa-github"/></a>
                        <span className="head sm:text-9xl text-7xl text-white anta text-gradient">EnergyJS</span>
                        <span className="low-tag text-center text-gray-500 sm:w-1/2 w-full">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda delectus eum labore, necessitatibus, numquam odit omnis perspiciatis provident quam qui quisquam rerum, sapiente sed sit vero voluptate? Accusantium, autem.</span>
                        <div className="cta flex flex-row gap-5 items-center flex-wrap justify-center">
                            <span className="kode energy-button-1 click">Get energy.min.js</span>
                            <span className="kode energy-button-2 click">Get Started</span>
                        </div>
                    </div>
                </section>
            </div>
            {/*  Home Body End  */}
        </>
    )
}