import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { questions, Subject } from '../data/questions';
import Question from './Question';
import { darkTheme, lightTheme } from '../styles/theme'; 
import { ScoreWrapper,ScoreSection,YourScore,Score } from '../styles/QuizStyles';
import { subjectIconMapping } from './IconProvider';

type QuizProps = {
  subject: string;
  isDark: boolean;
  goBack: () => void;
};

const Quiz: React.FC<QuizProps> = ({ subject, goBack, isDark }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [answerSelected, setAnswerSelected] = useState(false);
  const questionData = questions[subject as Subject][currentQuestionIndex];
  const totalQuestions = questions[subject as Subject].length;

  const handleAnswerSelect = (index: number) => {
    setAnswers(prevAnswers => {
      const newAnswers = [...prevAnswers];
      newAnswers[currentQuestionIndex] = index;
      return newAnswers;
    });
    setAnswerSelected(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    setAnswerSelected(false);
    if (currentQuestionIndex === totalQuestions - 1) {
      setCurrentQuestionIndex(-1);
    }
  };

  const handleReset = () => {
    goBack();
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnswers([]);
    setAnswerSelected(false);
  };

  const handleSubmit = () => {
    const selectedAnswerIndex = answers[currentQuestionIndex];
    if (selectedAnswerIndex === questionData.answer) {
      setScore(prevScore => prevScore + 1);
    }
    handleNextQuestion();
  };

  const completionPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <div >
        {currentQuestionIndex !== -1 && (
          <Question
            question={questionData.question}
            options={questionData.options}
            onSelect={handleAnswerSelect}
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={totalQuestions}
            answerSelected={answerSelected}
            handleSubmit={handleSubmit}
            completionPercentage={completionPercentage}
            isDark={isDark}
            correctAnswer={questionData.answer}
          />
        )}

        {currentQuestionIndex === -1 && (
          <ScoreSection>
            <Score>
          <ScoreWrapper>
              <h1>Quiz Completed</h1>
              <h3>You Scored...</h3>
          </ScoreWrapper>
          <YourScore>
          <img src={subjectIconMapping[subject as Subject]} alt={`${subject} icon`} />
            <div>
              <p>{score} <br/><span>of {totalQuestions}</span></p>
              
            </div>
            <div>
              <button onClick={handleReset} className={`submit-button ${isDark ? 'dark' : 'light'}`}>
                Play Again
              </button>
            </div>
          </YourScore>
          </Score>
        </ScoreSection>

        
        )}
      </div>
    </ThemeProvider>
  );
};

export default Quiz;
