import Header from "../../components/header/Header";
import Video from "./video/Video";
import Podcast from "./podcast/Podcast";
import EDetailing from "./e-detailing/EDetailing";
import Quiz from "./quiz/Quiz";
import Contact from "./contact/Contact";
import Footer from "../../components/footer/Footer";
import Articles from "./articles/Articles";
import Product from "./product/Product";

export default function Home(){
    return(
        <>
            <Header/>
            <Product/>
            <Video/>
            <Podcast/>
            <Articles/>
            <EDetailing/>
            <Quiz/>
            <Contact/>
            <Footer/>
        </>
    );
}