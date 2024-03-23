import './Gate.css'
import {gateData} from "./Data";
import {Link} from 'react-router-dom';
import Footer from "../footer/Footer";
import Checkbox from "../components/checkbox/Checkbox";

const GateIcon = ({color, icon}) => (
    <div className="gate-icon" style={{backgroundColor: color}}>
        <img src={icon} alt="shield"></img>
    </div>
);

const GateDivider = ({color}) => {
    return <div className="title-divider" style={{backgroundColor: color}}></div>;
};

const GateItem = ({color, icon, title, description}) => (
    <div className="gate-item">
        <GateIcon color={color} icon={icon}/>
        <div className="gate-item-title">{title}</div>
        <GateDivider color={color}/>
        <div className="gate-item-description">{description}</div>
    </div>
);

export default function Gate() {
    return (
        <div className="gate-container">
            <div className="gate-title">
                <span className="gate-logo-primary">MEB</span>
                <span className="gate-logo-secondary">EVERIN</span>
            </div>
            <div className="gate-logo-divider"></div>
            <div className="gate-subtitle">
                <div className="gate-subtitle-primary">Zapraszamy do serwisu</div>
                <span className="gate-subtitle-primary">edukacyjnego</span><span className="gate-subtitle-secondary"> dla lekarzy!</span>
            </div>
            <div className="gate-items-container">
                {gateData.map(service => (
                    <GateItem
                        key={service.title}
                        color={service.color}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>
            <input className="pwz-input" type="text" placeholder="PWZ:"/>
            <Link to="/home">
                <button className="gate-button">WCHODZĘ</button>
            </Link>

            <div className="gate-privacy-policy">
                <Checkbox/>
                <div className="gate-privacy-policy-container">
                    <div className="privacy-policy-description-primary">
                        Oświadczam, że posiadam prawo wykonywania zawodu lekarza i uzyskałem wpis do rejestru
                        prowadzonego
                        przez właściwą okręgową radę lekarską, oraz nie zostałem zawieszony w prawie wykonywania zawodu
                        lekarza ani ograniczony w wykonywaniu określonych czynności medycznych. Jestem osobą uprawnioną
                        do
                        otrzymywania specjalistycznych informacji medycznych zgodnie z ustawą Prawo farmaceutyczne. Chcę
                        zapoznać się z treścią serwisu.
                    </div>
                    <div className="privacy-policy-description-secondary">
                        Niniejszy serwis skierowany jest do lekarzy. Ze względu na wymogi ustawy z dnia 6 września 2001
                        r.
                        Prawo farmaceutyczne, dostęp do treści zawartych w serwisie, materiałów i informacji, możliwy
                        jest
                        wyłącznie dla osób uprawnionych do otrzymywania specjalistycznych informacji medycznych oraz
                        reklamy
                        produktów leczniczych. Jeśli nie jesteś osobą uprawnioną treści prezentowane w serwisie nie są
                        przeznaczone dla Ciebie.
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}