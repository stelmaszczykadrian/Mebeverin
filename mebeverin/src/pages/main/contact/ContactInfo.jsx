import {contactData} from "./ContactData";

export default function ContactInfo() {
    return (
        <div className="contact-info-main-container">
            <div className="contact-logo">
                <span className="contact-primary">MEB</span>
                <span className="contact-secondary">EVERIN</span>
            </div>
            <div className="contact-info-container">
                <div className="contact-flex">
                    {contactData.map(product => (
                        <ContactItem
                            key={product.title}
                            color={product.color}
                            icon={product.icon}
                            title={product.title}

                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

const ContactItemIcon = ({color, icon}) => (
    <div className="contact-item-icon" style={{backgroundColor: color}}>
        <img src={icon} alt="shield"></img>
    </div>
);

const ContactItem = ({color, icon, title}) => (
    <div className="contact-item">
        <ContactItemIcon color={color} icon={icon}/>
        <div className="contact-item-title">{title}</div>
    </div>
);