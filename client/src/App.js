import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Contact} from "./pages/Contact";
import {Docs} from "./pages/Docs";
import {Error} from "./pages/Error";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/about"} element={<About/>}/>
                    <Route path={"/contact"} element={<Contact/>}/>
                    <Route path={"/docs"} element={<Docs/>}/>
                    <Route path={"*"} element={<Error/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
