import {Link} from "react-router-dom";

export const Footer = () => {
    return (
        <footer>
            <div className="footer-container grid grid-cols-6 gap-x-10 sm:px-20 py-10 gap-y-10">
                <div className="links sitemap col-span-1">
                    <span className="head text-2xl text-gray-500">Sitemap</span>
                    <ul>
                        <li className="text-lg text-gray-400 transition hover:text-white w-max"><Link to={"/"}>Home</Link></li>
                        <li className="text-lg text-gray-400 transition hover:text-white w-max"><Link to={"/about"}>About</Link></li>
                        <li className="text-lg text-gray-400 transition hover:text-white w-max"><Link to={"/docs"}>Docs</Link></li>
                        <li className="text-lg text-gray-400 transition hover:text-white w-max"><Link to={"/terms"}>Terms</Link></li>
                    </ul>
                </div>
                <div className="links docs col-span-1">
                    <span className="head text-2xl text-gray-500">Docs</span>
                    <ul>
                        <li className="text-lg text-gray-400 transition hover:text-white w-max"><Link to={"/docs"} state="getStarted">Get Started</Link></li>
                        <li className="text-lg text-gray-400 transition hover:text-white w-max"><Link to={"/docs"} state="installation">Installation</Link></li>
                        <li className="text-lg text-gray-400 transition hover:text-white w-max"><Link to={"/docs"} state="examples">Examples</Link></li>
                    </ul>
                </div>
                <div className="brand col-span-4 text-right">
                    <span className="lg:text-9xl text-5xl text-gradient">EnergyJS</span>
                </div>
                <div className="bottom flex gap-5 flex-row flex-wrap justify-between items-center col-span-6 pt-5">
                    <div className="left copyright text-gray-500">&copy; <a href="https://github.com/HemantDutta/EnergyJS" rel="noreferrer" target="_blank" className="transition hover:text-white">EnergyJS</a> by <a href="https://www.linkedin.com/in/hemantduttahd/" rel="noreferrer" target="_blank" className="transition hover:text-white">Hemant Dutta</a></div>
                    <div className="social flex flex-row items-center gap-x-5 text-gray-500">
                        <a href="https://github.com/HemantDutta"  rel="noreferrer" target="_blank" className="transition hover:text-white"><i className="fa-brands fa-github"/></a>
                        <a href="https://www.linkedin.com/in/hemantduttahd/"  rel="noreferrer" target="_blank" className="transition hover:text-white"><i className="fa-brands fa-linkedin"/></a>
                        <a href="https://twitter.com/hemantduttahd"  rel="noreferrer" target="_blank" className="transition hover:text-white"><i className="fa-brands fa-x-twitter"/></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}