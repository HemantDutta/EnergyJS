import {Link} from "react-router-dom";
import {useRef} from "react";

export const Navbar = ({page}) => {

    //Refs
    const bigMenu = useRef(null);

    //BigMenu Toggle
    function bigMenuToggle() {
        if(bigMenu.current.classList.contains("active")) {
            bigMenu.current.classList.remove("active")
        }
        else {
            bigMenu.current.classList.add("active")
        }
    }

    return (
        <>
            <nav className={`${page === "docs" ? "relative" : "fixed"} w-full top-0 left-0 ${page === "docs" ? "border-b-2 border-slate-800 docs" : ""}`}>
                <div className="nav-container flex justify-between">
                    <div className="left">
                        <ul className="flex items-stretch">
                            <li className="group duration-500 py-8 sm:px-8 px-1 grid place-items-center cursor-pointer hover:bg-white hover:text-black" onClick={bigMenuToggle}>
                                <img src="/assets/navbar/en_ham.png" className="sm:w-1/4 w-1/4 group-hover:invert" alt="Menu"/>
                            </li>
                            <li className="lg:grid hidden place-items-center">
                                <Link className={`${page === "home" ? "active" : ""} duration-500 h-full grid place-items-center text-2xl font-bold text-white py-8 px-8 cursor-pointer hover:bg-white hover:text-black`} to={"/"}>Home</Link>
                            </li>
                            <li className="lg:grid hidden place-items-center">
                                <Link className={`${page === "about" ? "active" : ""} duration-500 h-full grid place-items-center text-2xl font-bold text-white py-8 px-8 cursor-pointer hover:bg-white hover:text-black`} to={"/about"}>About</Link>
                            </li>
                            <li className="lg:grid hidden place-items-center">
                                <Link className={`${page === "docs" ? "active" : ""} duration-500 h-full grid place-items-center text-2xl font-bold text-white py-8 px-8 cursor-pointer hover:bg-white hover:text-black`} to={"/docs"}>Docs</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="right duration-500 text-2xl font-bold text-white py-8 sm:grid hidden px-10 cursor-pointer hover:bg-white hover:text-black place-items-center">
                        <Link className="h-full w-full grid place-items-center" to={"/contact"}>Contact Me</Link>
                    </div>
                </div>
            </nav>
            <div ref={bigMenu} className="big-menu fixed top-0 left-0 h-screen w-screen bg-black" id="bigMenu">
                <div className="big-menu-container h-full w-full relative grid place-items-center">
                    <span onClick={bigMenuToggle} className="close absolute right-10 top-10 text-white text-4xl cursor-pointer underline">Close</span>
                    <ul className="flex flex-col gap-5 items-center">
                        <li><Link onClick={bigMenuToggle} to={"/"} className="text-white text-3xl sm:text-6xl font-bold transition hover:text-cyan-300">Home</Link></li>
                        <li><Link onClick={bigMenuToggle} to={"/about"} className="text-white text-3xl sm:text-6xl font-bold transition hover:text-cyan-300">About</Link></li>
                        <li><Link onClick={bigMenuToggle} to={"/docs"} className="text-white text-3xl sm:text-6xl font-bold transition hover:text-cyan-300">Docs</Link></li>
                        <li><Link onClick={bigMenuToggle} to={"/contact"} className="text-white text-3xl sm:text-6xl font-bold transition hover:text-cyan-300">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}