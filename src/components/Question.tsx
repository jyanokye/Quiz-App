import React, { useState, useEffect, useRef } from 'react';
import CorrectIcon from '../assets/images/icon-correct.svg';
import WrongIcon from '../assets/images/icon-incorrect.svg';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../styles/theme';

import {
  SubmitButton,
  Error,
  MyOptions,
  ProgressBarContainer,
  QuestionWrapper,
  MyQuestion,
} from '../styles/QuestionStyles';

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
  correctAnswer,
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [attemptedSubmit, setAttemptedSubmit] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  const errorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSubmitted(false);
    setShowFeedback(false);
    setSelectedOption(null);
  }, [currentQuestionIndex]);

 
  useEffect(() => {
    if (attemptedSubmit && selectedOption === null && errorRef.current) {
      errorRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [attemptedSubmit, selectedOption]);

  const handleOptionClick = (index: number) => {
    if (!submitted) {
      onSelect(index);
      setSelectedOption(index);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleOptionClick(index);
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      const nextOption = document.querySelectorAll('.option')[index + 1] as HTMLElement;
      if (nextOption) {
        nextOption.focus();
      } else {
        const submitButton = document.querySelector('.submit-button') as HTMLElement;
        if (submitButton) {
          submitButton.focus();
        }
      }
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      const prevOption = document.querySelectorAll('.option')[index - 1] as HTMLElement;
      if (prevOption) {
        prevOption.focus();
      } else {
        const lastOption = document.querySelectorAll('.option')[options.length - 1] as HTMLElement;
        if (lastOption) {
          lastOption.focus();
        }
      }
    } else if (event.key === 'Tab') {
      if (index === options.length - 1) {
        event.preventDefault();
        const submitButton = document.querySelector('.submit-button') as HTMLElement;
        if (submitButton) {
          submitButton.focus();
        }
      } else if (index === options.length) {
        event.preventDefault();
        const themeButton = document.querySelector('.theme-button') as HTMLElement;
        if (themeButton) {
          themeButton.focus();
        }
      }
    }
  };

  const handleButtonKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowDown' || event.key === 'Tab') {
      event.preventDefault();
      const themeButton = document.querySelector('.theme-button') as HTMLElement;
      if (themeButton) {
        themeButton.focus();
      }
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

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <QuestionWrapper>
        <MyQuestion>
          <div>
            <p>
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </p>
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
                className={`option ${selectedOption === index ? 'selected' : ''} ${
                  isDark ? 'dark' : ''
                } ${submitted ? (selectedOption === correctAnswer ? 'right' : 'wrong') : ''}`}
                key={index}
                onClick={() => handleOptionClick(index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                tabIndex={0}
              >
                <div
                  className={`OptionLetter ${
                    submitted ? (selectedOption === correctAnswer ? 'right' : 'wrong') : ''
                  }`}
                >
                  <p>{String.fromCharCode(65 + index)}</p>
                </div>
                <p>{option}</p>
                {showFeedback && (
                  <div className="answer-feedback">
                    {selectedOption === index && selectedOption === correctAnswer && (
                      <img src={CorrectIcon} className="correct" alt="correct" />
                    )}
                    {selectedOption === index && selectedOption !== correctAnswer && (
                      <img src={WrongIcon} alt="Incorrect" className="incorrect" />
                    )}
                    {selectedOption !== index && index === correctAnswer && (
                      <img src={CorrectIcon} className="correct" alt="correct" />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {currentQuestionIndex !== -1 && (
            <SubmitButton
              className="submit-button"
              onClick={handleButtonClick}
              onKeyDown={handleButtonKeyDown}
              tabIndex={0}
            >
              {submitted && showFeedback
                ? currentQuestionIndex === totalQuestions - 1
                  ? 'Finish Quiz'
                  : 'Next Question'
                : 'Submit Answer'}
            </SubmitButton>
          )}
          {attemptedSubmit && selectedOption === null && (
            <Error ref={errorRef}>
              <img src={WrongIcon} alt="Incorrect" className="incorrect" />
              <p>Please select an answer</p>
            </Error>
          )}
        </MyOptions>
      </QuestionWrapper>
    </ThemeProvider>
  );
};

export default Question;
