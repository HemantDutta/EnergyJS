import {Navbar} from "../components/Navbar";

export const Home = () => {
    return (
        <>
            {/*  Navbar  */}
            <Navbar page={"home"}/>
            {/*  Navbar End  */}
            {/*  Home Body  */}
            <div className="home" id="home">
                {/*Hero*/}
                <section className="hero h-screen w-full relative py-20 px-10" id="hero">
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
                {/*Hero End*/}
                {/*  Features  */}
                <section className="features px-10 py-20" id="features">
                    <header>
                        <span className="head text-5xl sm:text-7xl text-white anta text-gradient">{"<Features/>"}</span>
                    </header>
                    <div className="feature-grid grid gap-x-10 gap-y-20 py-24 grid-cols-3 place-items-center items-start">
                        <div className="feature-card flex flex-col gap-5 col-span-1">
                            <img src="/assets/features/en_ft_1.png" alt="No Dependencies" className="w-max"/>
                            <span className="title text-white text-3xl kode chip">0 Dependencies</span>
                            <span className="des text-white">EnergyJS boasts independence, requiring no external dependencies for its functionality.</span>
                        </div>
                        <div className="feature-card flex flex-col gap-5 col-span-1">
                            <img src="/assets/features/en_ft_3.png" alt="Lightweight" className="w-max"/>
                            <span className="title text-white text-3xl kode chip">Lightweight</span>
                            <span className="des text-white">Experience unparalleled efficiency with our library's compact size—less than 4KB. Enjoy lightning-fast performance without sacrificing functionality or bloat.</span>
                        </div>
                        <div className="feature-card flex flex-col gap-5 col-span-1">
                            <img src="/assets/features/en_ft_2.png" alt="Low Syntax" className="w-max"/>
                            <span className="title text-white text-3xl kode chip">Low Syntax</span>
                            <span className="des text-white">With EnergyJS, animating an element is streamlined to just two lines of code, simplifying the implementation process.</span>
                        </div>
                        <div className="feature-card flex flex-col gap-5 col-span-1">
                            <img src="/assets/features/en_ft_2.png" alt="Low Syntax" className="w-max"/>
                            <span className="title text-white text-3xl kode chip">Low Syntax</span>
                            <span className="des text-white">With EnergyJS, animating an element is streamlined to just two lines of code, simplifying the implementation process.</span>
                        </div>
                        <div className="grid-image col-span-2 row-span-1 relative">
                            <div className="grid-image-overlay z-50"/>
                            <img src="assets/hero/ejs_hero_1.jpg" alt="Energy JS Artwork" className="object-cover w-full h-full relative z-10"/>
                        </div>
                    </div>
                </section>
                {/*  Features End  */}
            </div>
            {/*  Home Body End  */}
        </>
    )
}