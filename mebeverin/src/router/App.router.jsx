import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Gate from "../gate/Gate";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Gate/>}/>
            <Route path="/home" element={<Home/>}/>
        </Routes>
    );
};