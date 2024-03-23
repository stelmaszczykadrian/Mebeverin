import React, { useState } from "react";
import { articles } from "./Data";
import './Articles.css';
import arrowRightSvg from "../../assets/svg/arrow-right.svg";

export default function Articles() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextArticle = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % articles.length);
    };

    return (
        <div className="articles-main-container" id="articles">
            <div className="articles-header">ARTYKUŁY</div>
            <div className="articles-container" id="slider">
                <div style={{display: 'flex'}}>
                    <div className="article-image">
                        <img src={articles[currentIndex].image} alt="Article Thumbnail"/>
                        <div className="dots-container">
                            {articles.map((article, index) => (
                                <div
                                    key={index}
                                    className={`dot ${currentIndex === index ? 'active' : ''}`}
                                    onClick={() => setCurrentIndex(index)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="article-content">
                        <div className="article-title">{articles[currentIndex].title}</div>
                        <div className="article-author">{articles[currentIndex].author}</div>
                        <div className="article-divider"></div>
                        <div className="article-description">{articles[currentIndex].description}</div>
                        <button className="article-button"
                                onClick={nextArticle}>{articles[currentIndex].button}</button>
                    </div>
                </div>
            </div>
            <div className="scroll-buttons">
                <a onClick={nextArticle}>
                    <img className="articles-arrow-right" src={arrowRightSvg} alt="Arrow Right"/>
                </a>
            </div>
        </div>
    );
}
