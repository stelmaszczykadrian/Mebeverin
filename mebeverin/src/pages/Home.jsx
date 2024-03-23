import Header from "../header/Header";
import Video from "../main/video/Video";
import Podcast from "../main/podcast/Podcast";
import EDetailing from "../main/e-detailing/EDetailing";
import Quiz from "../main/quiz/Quiz";
import Contact from "../main/contact/Contact";
import Footer from "../footer/Footer";
import Articles from "../main/articles/Articles";

export default function Home(){
    return(
        <>
            <Header/>
            <Video/>
            <Podcast/>
            <Articles/>
            <EDetailing/>
            <Quiz/>
            <Contact/>
            <Footer/>
            <div className="white-content"></div>
        </>
    );
}