import './Video.css';
import React, {useState} from "react";
import arrowRightSvg from "../../../assets/svg/arrow-right.svg";
import polygonRight from '../../../assets/svg/polygon-right.svg';
import {videos} from "./VideoData";

export default function Video() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handleVideoClick = (index) => {
        setCurrentVideoIndex(index);
    };

    const handleNextVideo = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    const currentVideo = videos[currentVideoIndex];

    return (
        <div id="video">
            <div className="video-wrapper text-center align-items-center justify-content-center container">
                <div className="video-header">VIDEO</div>
                <div className="video-list-item-container">
                    <div className="video-list">
                        {videos.map((podcast, index) => (
                            <div
                                key={index}
                                className={`video-list-item ${index === currentVideoIndex ? 'active' : ''}`}
                                onClick={() => handleVideoClick(index)}
                            >
                                {podcast.name}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="video-container">
                    <div className="video-image-container">
                        <div className="video-circle">
                            <img src={polygonRight} alt="Polygon right"></img>
                        </div>
                        <img className="video-image" src={currentVideo.image} alt="Video Thumbnail"/>
                    </div>
                    <div className="video-content">
                        <div className="video-title">{currentVideo.title}</div>
                        <div className="video-subtitle">{currentVideo.subtitle}</div>
                        <div className="video-divider"></div>
                        <div style={{display: 'flex'}}>
                            <div className="video-description">{currentVideo.description}</div>
                            <div style={{marginLeft: '1rem'}}>
                                <a className="video-arrow-right" onClick={handleNextVideo}>
                                    <img className="video-arrow-right-img" src={arrowRightSvg} alt="Arrow Right"/>
                                </a>
                            </div>
                        </div>
                        <button className="video-button"
                                onClick={() => window.location.href = currentVideo.youtubeLink}>OGLĄDAM
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}