import React, { useState, useEffect } from 'react';

import CorrectIcon from '../assets/images/icon-correct.svg';
import WrongIcon from '../assets/images/icon-incorrect.svg';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../styles/theme';
import { SubmitButton, Error, MyOptions, ProgressBarContainer, QuestionWrapper, MyQuestion } from '../styles/QuestionStyles';

type QuestionProps = {
  isDark: boolean;
  question: string;
  options: string[];
  onSelect: (index: number) => void;
  completionPercentage: number;
  currentQuestionIndex: number;
  totalQuestions: number;
  answerSelected: boolean;
  handleSubmit: () => void;
  correctAnswer: number;
};

const Question: React.FC<QuestionProps> = ({
  question,
  options,
  onSelect,
  currentQuestionIndex,
  totalQuestions,
  answerSelected,
  completionPercentage,
  handleSubmit,
  isDark,
  correctAnswer
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [attemptedSubmit, setAttemptedSubmit] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  useEffect(() => {
    
    setSubmitted(false);
    setShowFeedback(false);
    setSelectedOption(null);
  }, [currentQuestionIndex]);

  const handleOptionClick = (index: number) => {
    if (!submitted) {
      onSelect(index);
      setSelectedOption(index);
    }
  };

  const handleButtonClick = () => {
    if (selectedOption === null) {
      setAttemptedSubmit(true);
      return;
    }
    if (!submitted) {
      setSubmitted(true);
      setShowFeedback(true);
      setAttemptedSubmit(false);
    } else {
      handleSubmit();
    }
  };

  const theme = isDark ? darkTheme: lightTheme ;

  return (
    <ThemeProvider theme={theme}>
      <QuestionWrapper>
        <MyQuestion>
          <div>
            <p>Question {currentQuestionIndex + 1} of {totalQuestions}</p>
            <h2>{question}</h2>
          </div>
          <ProgressBarContainer>
            <div className="progress-bar" style={{ width: `${completionPercentage}%` }}></div>
          </ProgressBarContainer>
        </MyQuestion>

        <MyOptions>
          <div className="Know">
            {options.map((option, index) => (
              <div
                className={`option ${selectedOption === index ? 'selected' : ''} ${isDark ? 'dark' : ''} ${(submitted)  ? (selectedOption === correctAnswer ? 'right':'wrong') : ''}`}
                key={index}
                onClick={() => handleOptionClick(index)}
              >
                <div className={`OptionLetter ${(submitted)  ? (selectedOption === correctAnswer ? 'right':'wrong') : ''}`}><p>{String.fromCharCode(65 + index)}</p></div>
                {option}
                {showFeedback && (
                  <div className="answer-feedback">
                    {selectedOption === index && selectedOption === correctAnswer && (
                      <img src={CorrectIcon} className='correct' alt='correct' />
                    )}
                    {selectedOption === index && selectedOption !== correctAnswer && (
                      <img src={WrongIcon} alt="Incorrect" className="incorrect" />
                    )}
                    {selectedOption !== index && index === correctAnswer && (
                      <img src={CorrectIcon} className='correct' alt='correct' />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {currentQuestionIndex !== -1 && (
            <SubmitButton onClick={handleButtonClick}>
              {submitted && showFeedback ? (currentQuestionIndex === totalQuestions - 1 ? 'Finish Quiz' : 'Next Question') : 'Submit Answer'}
            </SubmitButton>
          
          )}
          {attemptedSubmit && selectedOption === null && (
            <Error> <img src={WrongIcon} alt="Incorrect" className="incorrect" /><p>Please select an answer before submitting</p></Error>
          )}
        </MyOptions>
      </QuestionWrapper>
    </ThemeProvider>
  );
};

export default Question;
