import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";

export const About = () => {
    return (
        <>
            {/*  Navbar  */}
            <Navbar page={"about"}/>
            {/*  Navbar End  */}
            {/*  Body  */}
            <div className="about" id="about">
                <section className="about-hero h-screen relative flex items-end" id="hero">
                    <img src="/assets/hero/ejs_hero_2.jpg" alt="About EnergyJS" className="bg-img absolute z-10 h-full w-full"/>
                    <div className="overlay absolute top-0 left-0 h-full w-full object-cover z-40"/>
                    <div className="about-hero-content relative z-50 py-20 grid grid-cols-4 items-end gap-20 sm:px-10 px-5">
                        <div className="about-main flex flex-col gap-2">
                            <span className="head text-3xl anta text-white">About</span>
                            <span className="brand text-7xl text-gradient anta pb-2">EnergyJS</span>
                            <span className="des text-white">is a free lightweight JavaScript animation Library. It boasts independence from dependencies, minimal syntax, tiny file size and framework independence.</span>
                        </div>
                        <div className="about-created flex flex-col gap-2">
                            <span className="head anta text-white text-3xl">Created By</span>
                            <span className="name anta text-4xl text-gradient">Hemant Dutta</span>
                            <span className="des text-white">He is a wannabe fullstack developer from the small town of Amritsar, Punjab. Currently working as a corporate slave in Bengaluru, Karnataka.</span>
                        </div>
                        <div className="about-created flex flex-col gap-2">
                            <span className="head anta text-white text-3xl">Technologies</span>
                            <span className="name anta text-4xl text-gradient">JavaScript</span>
                            <span className="des text-white">Yup! That's it </span>
                        </div>
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