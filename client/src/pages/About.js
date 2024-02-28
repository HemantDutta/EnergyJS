import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";

export const About = () => {
    return (
        <>
            {/*  Navbar  */}
            <Navbar page={"about"}/>
            {/*  Navbar End  */}
            {/*  Body  */}
            <div className="about" id="about"></div>
            {/*  Body End  */}
            {/*  Footer  */}
            <Footer/>
            {/*  Footer End */}
        </>
    )
}