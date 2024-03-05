import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";
import {ScrollTop} from "../components/ScrollTop";
import {Helmet} from "react-helmet-async";

export const About = () => {
    return (
        <>
            {/*Helmet*/}
            <Helmet>
                <title>About | EnergyJS</title>
                <link rel="canonical" href="/about"/>
            </Helmet>
            {/*Helmet End*/}
            <ScrollTop/>
            {/*  Navbar  */}
            <Navbar page={"about"}/>
            {/*  Navbar End  */}
            {/*  Body  */}
            <div className="about" id="about">
                <section className="about-hero min-h-screen relative flex items-end" id="hero">
                    <img src="/assets/hero/ejs_hero_2.jpg" alt="About EnergyJS" className="bg-img absolute z-10 h-full w-full object-cover"/>
                    <div className="overlay absolute top-0 left-0 h-full w-full z-40"/>
                    <div className="about-hero-content relative z-50 py-20 grid grid-cols-4 items-end gap-10 sm:px-10 px-5">
                        <div className="about-main flex flex-col gap-2 col-span-4">
                            <span className="head text-xl sm:text-3xl anta text-white">About</span>
                            <span className="brand text-5xl sm:text-7xl text-gradient anta pb-2 w-max">EnergyJS</span>
                            <span className="des text-white">is a free lightweight JavaScript animation Library. It boasts independence from dependencies, minimal syntax, tiny file size and framework independence.</span>
                        </div>
                        <div className="about-created flex flex-col gap-2 col-span-4 lg:col-span-1">
                            <span className="head anta text-white text-xl sm:text-3xl">Created By</span>
                            <span className="name anta text-4xl text-gradient">Hemant Dutta</span>
                            <span className="des text-white">He is a wannabe fullstack developer from the small town of Amritsar, Punjab. Currently working as a corporate slave in Bengaluru, Karnataka.</span>
                        </div>
                        <div className="about-created flex flex-col gap-2 col-span-4 lg:col-span-1">
                            <span className="head anta text-white text-xl sm:text-3xl">Technologies</span>
                            <span className="name anta text-4xl text-gradient">JavaScript</span>
                            <span className="des text-white">Yup! That's it </span>
                        </div>
                        <span className="easter text-gray-800 col-span-4 lg:col-span-1">PS: There is an easter egg in this website! if you find it, <a href="https://www.linkedin.com/in/hemantduttahd/" className="transition hover:text-white underline" rel="noreferrer" target="_blank">hit me up</a></span>
                    </div>
                </section>
            </div>
            {/*  Body End  */}
            {/*  Footer  */}
            <Footer/>
            {/*  Footer End */}
        </>
    )
}