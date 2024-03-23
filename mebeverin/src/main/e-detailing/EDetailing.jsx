import './EDetailing.css';

export default function EDetailing(){
    return(
        <div className="detailing-container" id="detailing">
            <div className="detailing-content">
                <div className="detailing-item">
                    <div className="detailing-title">E-DETAILING</div>
                    <div className="detailing-first-subtitle">Benefits</div>
                    <div className="detailing-second-subtitle">and Advantages</div>
                    <div className="detailing-divider"></div>
                    <div className="detailing-description">
                        Czynnościowe choroby jelit to przewlekłe zaburzenia przewodu pokarmowego, które w znaczny sposób
                        mogą wpływać na jakość życia chorego. Ze względu na mnogość potencjalnych przyczyn, zaburzenia
                        nastręczają lekarzom trudności diagnostycznych, a właściwe rozpoznanie bywa prawie niemożliwe.
                    </div>
                    <button className="detailing-button">Zobacz</button>
                </div>
            </div>
        </div>

    );
}