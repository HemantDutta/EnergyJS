import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

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
    if (count < 1) {
        nav("/");
    }

    return (
        <>
            <div className="error h-screen w-screen flex items-center flex-col justify-center gap-5 relative" id="error">
                <span className="main text-gradient text-9xl z-50 kode">404</span>
                <span className="tag text-white text-4xl kode">Page not found</span>
                <span className="reroute text-white">Rerouting in {count} seconds...</span>
            </div>
        </>
    )
}