import {Link} from "react-router-dom";

export const Navbar = ({page}) => {
    return(
        <>
            <nav className="fixed w-full top-0 left-0">
                <div className="nav-container flex justify-between">
                    <div className="left">
                        <ul className="flex items-stretch">
                            <li className="group duration-500 py-8 sm:px-8 px-1 grid place-items-center cursor-pointer hover:bg-white hover:text-black">
                                <img src="/assets/navbar/en_ham.png" className="sm:w-1/2 w-1/4 group-hover:invert" alt="Menu"/>
                            </li>
                            <li className="lg:grid hidden place-items-center">
                                <Link className="duration-500 h-full grid place-items-center text-3xl font-bold text-white py-8 px-8 cursor-pointer hover:bg-white hover:text-black" to={"/"}>Home</Link>
                            </li>
                            <li className="lg:grid hidden place-items-center">
                                <Link className="duration-500 h-full grid place-items-center text-3xl font-bold text-white py-8 px-8 cursor-pointer hover:bg-white hover:text-black" to={"/"}>About</Link>
                            </li>
                            <li className="lg:grid hidden place-items-center">
                                <Link className="duration-500 h-full grid place-items-center text-3xl font-bold text-white py-8 px-8 cursor-pointer hover:bg-white hover:text-black" to={"/"}>Docs</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="right duration-500 text-3xl font-bold text-white py-8 sm:grid hidden px-4 cursor-pointer hover:bg-white hover:text-black place-items-center">
                        <Link to={"/contact"}>Contact Me</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}