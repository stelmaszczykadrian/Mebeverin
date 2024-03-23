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

export default ServiceItem;