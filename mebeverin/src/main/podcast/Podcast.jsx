import './Podcast.css';
import {podcasts} from "./PodcastData";
import arrowLeftSvg from "../../assets/svg/arrow-left.svg";
import arrowRightSvg from "../../assets/svg/arrow-right.svg";
import React, {useRef, useState} from "react";

export default function Podcast(){
    const [currentPodcastIndex, setCurrentPodcastIndex] = useState(0);
    const audioRef = useRef(null);

    const playNextPodcast = () => {
        setCurrentPodcastIndex((prevIndex) => (prevIndex + 1) % podcasts.length);
        restartAudio();
    };

    const playPreviousPodcast = () => {
        setCurrentPodcastIndex((prevIndex) =>
            prevIndex === 0 ? podcasts.length - 1 : prevIndex - 1
        );
        restartAudio();
    };

    const restartAudio = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.load();
            audioRef.current.play();
        }
    };

    const currentPodcast = podcasts[currentPodcastIndex];

    const handlePodcastClick = (index) => {
        setCurrentPodcastIndex(index);
    };

    return(
        <div className="podcast text-center align-items-center justify-content-center" id="podcast">
            <div className="podcast-container container">
                <div className="podcast-header">Podcasty</div>
                <div className="podcast-content">
                    <div className="podcast-list">
                        {podcasts.map((podcast, index) => (
                            <div
                                key={index}
                                className={`podcast-list-item ${index === currentPodcastIndex ? 'active' : ''}`}
                                onClick={() => handlePodcastClick(index)}
                            >
                                {podcast.name}
                            </div>
                        ))}
                    </div>
                    <div className="podcast-container">
                        <img className="podcast-image" src={currentPodcast.image} alt="Podcast image"></img>
                        <div className="podcast-arrows">
                            <a className="podcast-arrow-left" onClick={playPreviousPodcast}>
                                <img src={arrowLeftSvg} alt="Arrow Left"/>
                            </a>
                            <a className="podcast-arrow-right" onClick={playNextPodcast}>
                                <img src={arrowRightSvg} alt="Arrow Right"/>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="podcast-title">{currentPodcast.title}</div>
                        <div className="podcast-subtitle">{currentPodcast.subtitle}</div>
                        <audio ref={audioRef} className="podcast-audio" controls src={currentPodcast.audioUrl}/>
                    </div>
                </div>
            </div>
        </div>
    );
}