import './Header.css';
import {navigationItems, productsData, servicesData} from "./Data";
import boxes from '../assets/Boxes.png';
import ServiceItem from "./ServiceItem";
import ProductItem from "./ProductItem";
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <div className="header-container">
                <div className="nav-container">
                    <Link to="/home">
                        <div className="nav-logo">
                            <span className="logo-primary">MEB</span>
                            <span className="logo-secondary">EVERIN</span>
                        </div>
                    </Link>
                    <div className="nav-items">
                        <ul className="nav-list">
                            {navigationItems.map((item, index) => (
                                <li key={`NavigationItems_${index}`} className="nav-item">
                                    <a
                                        href={item.href}
                                        className="nav-link"
                                    >
                                        {item.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="description-container">
                    <div className="main-text">Siła spokoju
                        <div> dla pacjentów</div>
                        <div className="sub-text1">z Zespołem Jelita</div>
                        <div className="sub-text2">Wrażliwego</div>
                    </div>
                </div>
                <div className="services-container">
                    {servicesData.map(service => (
                        <ServiceItem
                            key={service.title}
                            color={service.color}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
            <div className="product-container" id="about-product">
                <div className="product-title">O PRODUKCIE</div>
                <div className="product-subtitle">Benefits and Advantages</div>
                <div className="product-info">
                    <div>
                        <img src={boxes}></img>
                    </div>
                    <div className="product-items">
                        {productsData.map(product => (
                            <ProductItem
                                key={product.title}
                                color={product.color}
                                icon={product.icon}
                                title={product.title}

                            />
                        ))}
                    </div>
                </div>
                <button className="product-button">DOWIEDZ SIĘ WIĘCEJ</button>
            </div>
        </div>
    );
}