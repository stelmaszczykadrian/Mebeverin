import {Route, Routes} from "react-router-dom";
import Home from "../pages/main/Home";
import Gate from "../pages/gate/Gate";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Gate/>}/>
            <Route path="/home" element={<Home/>}/>
        </Routes>
    );
};