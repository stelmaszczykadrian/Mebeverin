import './Footer.css';
import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-body">
                <div className="footer-logo">
                    <Link to="/home" style={{textDecoration: 'none'}}>
                        <span className="footer-logo-primary">MEB</span>
                        <span className="footer-logo-secondary">EVERIN</span>
                    </Link>
                </div>
                <div className="footer-nav">
                    <Link to="#" style={{textDecoration: 'none'}}>
                        <span className="footer-nav-item-active">SIL</span>
                    </Link>
                    <span className="footer-nav-item">|</span>
                    <Link to="#" style={{textDecoration: 'none'}}>
                        <span className="footer-nav-item-active">Nota prawna</span>
                    </Link>
                    <span className="footer-nav-item">|</span>
                    <Link to="#" style={{textDecoration: 'none'}}>
                        <span className="footer-nav-item-active">Polityka cookies i prywatności</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}