import './Header.css';
import {navigationItems, servicesData} from "./HeaderData";
import CustomNavbar from "../components/navbar/Navbar";

export default function Header() {
    return (
        <div className="header">
            <div>
                <div className="header-container">
                    <div>
                        <CustomNavbar navigationItems={navigationItems}/>
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
            </div>
        </div>
    );
}

const ServiceIcon = ({color, icon}) => (
    <div className="service-icon" style={{backgroundColor: color}}>
        <img src={icon} alt="shield"></img>
    </div>
);

const TitleDivider = ({color}) => {
    return <div className="title-divider" style={{backgroundColor: color}}></div>;
};

const ServiceItem = ({color, icon, title, description}) => (
    <div className="service-item">
        <ServiceIcon color={color} icon={icon}/>
        <div className="services-title">{title}</div>
        <TitleDivider color={color}/>
        <div className="services-description">{description}</div>
    </div>
);