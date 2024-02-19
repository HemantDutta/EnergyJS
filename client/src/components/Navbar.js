import {Link} from "react-router-dom";

export const Navbar = ({page}) => {
    return(
        <>
            <nav>
                <div className="nav-container flex justify-between">
                    <div className="left">
                        <ul>
                            <li>
                                <img src="/assets/navbar/en_ham.png" alt="Menu"/>
                            </li>
                            <li>
                                <Link to={"/"} className={`${page==="home"?"active":""}`}>Home</Link>
                            </li>
                            <li>
                                <Link to={"/"} className={`${page==="about"?"active":""}`}>About</Link>
                            </li>
                            <li>
                                <Link to={"/"} className={`${page==="docs"?"active":""}`}>Docs</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="right">
                        <Link to={"/contact"}>Contact Me</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}