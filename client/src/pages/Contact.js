import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";

export const Contact = () => {
    return (
        <>
            {/*  Navbar  */}
            <Navbar page={"contact"}/>
            {/*  Navbar End  */}
            {/*  Body  */}
            <div className="contact" id="contact">
                <section className="contact-hero h-screen flex items-end relative py-20">
                    <img src="/assets/hero/ejs_hero_2.jpg" alt="About EnergyJS" className="bg-img absolute z-10 h-full w-full object-cover"/>
                    <div className="overlay absolute top-0 left-0 h-full w-full z-40"/>
                    <div className="contact-content flex gap-10 flex-col relative z-50 sm:px-10 px-5">
                        <header className="flex flex-col">
                            <span className="head text-white text-5xl sm:text-7xl text-gradient anta">Contact Me</span>
                            <span className="des text-white text-xl sm:w-1/2">Do you need a website or a product? Or just want to talk about web development, programming and other stuff. Here are my active socials and github:</span>
                        </header>
                        <div className="socials flex flex-wrap gap-x-20 gap-y-10 items-center justify-start">
                            <div className="social-wrapper flex flex-col gap-2">
                                <i className="fa-brands fa-linkedin text-3xl sm:text-7xl text-white"/>
                                <a href="https://www.linkedin.com/in/hemantduttahd/" rel="noreferrer" target="_blank" className="title text-3xl text-white kode underline-offset-8 underline cursor-pointer hover:text-cyan-300">LinkedIn</a>
                            </div>
                            <div className="social-wrapper flex flex-col gap-2">
                                <i className="fa-brands fa-github text-3xl sm:text-7xl text-white"/>
                                <a href="https://github.com/HemantDutta" rel="noreferrer" target="_blank" className="title text-3xl text-white kode underline-offset-8 underline cursor-pointer hover:text-cyan-300">Github</a>
                            </div>
                            <div className="social-wrapper flex flex-col gap-2">
                                <i className="fa-brands fa-x-twitter text-3xl sm:text-7xl text-white"/>
                                <a href="https://twitter.com/hemantduttahd" rel="noreferrer" target="_blank" className="title text-3xl text-white kode underline-offset-8 underline cursor-pointer hover:text-cyan-300">Twitter (X)</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/*  Body End  */}
            {/*  Footer  */}
            <Footer/>
            {/*  Footer End  */}
        </>
    )
}