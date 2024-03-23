import './Contact.css';
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function Contact(){
    return(
        <div className="contact-container" id="contact">
            <div className="contact-header">
                <div className="contact-title">KONTAKT</div>
                <div className="contact-subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</div>
                <div className="contact-divider"></div>
            </div>
            <div className="contact-details">
                <ContactForm/>
                <ContactInfo/>
            </div>
        </div>
    );
}