import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Helmet} from "react-helmet-async";

export const Error = () => {

    //Navigator
    const nav = useNavigate();

    //states
    const [count, setCount] = useState(5);

    //Interval for re-routing
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevState => prevState - 1);
        }, 1000)

        return () => clearInterval(interval);
    }, [])

    //Clear Interval
    useEffect(() => {
        if (count < 1) {
            nav("/");
        }
    }, [count])

    return (
        <>
            {/*Helmet*/}
            <Helmet>
                <title>404 | EnergyJS</title>
            </Helmet>
            {/*Helmet End*/}
            <div className="error h-screen w-screen flex items-center flex-col justify-center gap-5 relative" id="error">
                <div className="overlay absolute top-0 left-0 h-screen w-screen z-20 bg-black opacity-90"/>
                <img src="/assets/404/en_404_2.jpg" alt="404 Page" className="absolute top-0 left-0 object-center object-cover h-screen w-screen z-10"/>
                <span className="main text-gradient text-5xl sm:text-9xl z-50 kode">404</span>
                <span className="tag text-white text-2xl sm:text-4xl kode z-50">Page not found</span>
                <span className="reroute text-white z-50">Rerouting in {count} seconds...</span>
            </div>
        </>
    )
}