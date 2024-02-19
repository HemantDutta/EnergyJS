import {Navbar} from "../components/Navbar";

export const Home = () => {
    return (
        <>
            {/*  Navbar  */}
            <Navbar page={"home"}/>
            {/*  Navbar End  */}
            {/*  Home Body  */}
            <div className="home" id="home">
                <section className="hero" id="hero">

                </section>
            </div>
            {/*  Home Body End  */}
        </>
    )
}