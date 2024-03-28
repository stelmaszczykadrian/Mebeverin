import './Footer.css';
import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <div className="footer-main-container">
            <div className="footer-body text-center justify-content-center align-items-center">
                <div className="footer-logo">
                    <Link to="/home" className="footer-link">
                        <span className="footer-logo-primary">MEB</span>
                        <span className="footer-logo-secondary">EVERIN</span>
                    </Link>
                </div>
                <div className="container">
                    <div className="footer-nav d-flex f-direction align-items-center justify-content-center">
                        <div>
                            <Link to="#" className="footer-link">
                                <span className="footer-nav-item-active">SIL</span>
                            </Link>
                        </div>
                        <div className="line">
                        </div>
                        <div>
                            <Link to="#" className="footer-link">
                                <span className="footer-nav-item-active">Nota prawna</span>
                            </Link>
                        </div>
                        <div className="line"></div>
                        <div className="">
                            <Link to="#" className="footer-link">
                                <span className="footer-nav-item-active">Polityka cookies i prywatności</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}