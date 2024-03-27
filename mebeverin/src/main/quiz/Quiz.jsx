import './Quiz.css';
import {quizData} from "./QuizData";

const QuizIcon = ({color, number}) => (
    <div className="quiz-icon" style={{backgroundColor: color}}>
        <div className="quiz-number">{number}</div>
    </div>
);

const QuizItem = ({color, number, description}) => (
    <div className="quiz-rule">
        <QuizIcon color={color} number={number}/>
        <div className="quiz-rule-description">{description}</div>
    </div>
);

export default function Quiz() {
    return (
        <div className="quiz-container" id="quiz">
            <div className="quiz-info">
                <div className="quiz-content">
                    <div className="prize-container">
                        <div className="quiz-title">QUIZ</div>
                        <div className="quiz-subtitle">Odpowiedz na 3 pytania na temat meweberyny.</div>
                        <div className="quiz-divider"></div>
                        <div className="quiz-second-subtitle">Sprawdź swoją wiedzę i zawalcz o nagrodę w quizie!
                        </div>
                    </div>
                    <div className="quiz-reward">
                        <div className="reward-label">Do wygrania:</div>
                        <div className="reward-icon">
                            <div className="reward-circle">
                                <span className="reward-amount">50x</span>
                            </div>
                        </div>
                        <div className="reward-details">Opis nagrody</div>
                    </div>
                </div>
            </div>
            <div className="quiz-rules">
                <div className="quiz-rules-title">Zasady quizu:</div>
                <div className="quiz-rules-container">
                    {quizData.map((quiz, index) => (
                        <QuizItem
                            key={index}
                            color={quiz.color}
                            number={quiz.number}
                            description={quiz.description}
                        />
                    ))}
                </div>
            </div>
            <button className="quiz-button">ROZPOCZNIJ QUIZ</button>
        </div>
    );
}