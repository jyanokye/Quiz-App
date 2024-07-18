import React, { useRef, useEffect, useState } from 'react';
import { Apps, Welcome, Options, Option, IconWrapper } from '../styles/HomeStyle';
import { darkTheme, lightTheme } from '../styles/theme';
import { ThemeProvider } from 'styled-components';
import quizzesData from '../data/data.json'; 
import { QuizData } from '../data/types';
import htmlIcon from '../assets/images/icon-html.svg';
import cssIcon from '../assets/images/icon-css.svg';
import jsIcon from '../assets/images/icon-js.svg';
import accessibilityIcon from '../assets/images/icon-accessibility.svg';

type HomeProps = {
  startQuiz: (subject: string, icon: string) => void;
  isDark: boolean;
};

const Home: React.FC<HomeProps> = ({ startQuiz, isDark }) => {
  const theme = isDark ? darkTheme : lightTheme;
  const optionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [quizzes, setQuizzes] = useState<QuizData[]>([]);

  useEffect(() => {
    setQuizzes(quizzesData.quizzes); // Assuming quizzesData is correctly imported and structured
  }, []);

  const handleOptionKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    index: number,
    totalOptions: number
  ) => {
    const options = optionRefs.current;

    if (event.key === 'Enter' || event.key === ' ') {
      const target = options[index];
      if (target) {
        target.click();
      }
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      const nextIndex = index + 1;
      if (nextIndex < totalOptions && options[nextIndex]) {
        options[nextIndex]!.focus();
      } else {
        const themeButton = document.querySelector('.theme-button') as HTMLElement;
        if (themeButton) {
          themeButton.focus();
        }
      }
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      const prevIndex = index - 1;
      if (prevIndex >= 0 && options[prevIndex]) {
        options[prevIndex]!.focus();
      } else {
        options[totalOptions - 1]!.focus();
      }
    } else if (event.key === 'Tab' && index === totalOptions - 1) {
      event.preventDefault();
      const themeButton = document.querySelector('.theme-button') as HTMLElement;
      if (themeButton) {
        themeButton.focus();
      }
    }
  };

 

  return (
    <ThemeProvider theme={theme}>
      <Apps>
        <Welcome>
          <h1>Welcome to the</h1>
          <h3>Frontend Quiz!</h3>
          <p>Pick a subject to get started</p>
        </Welcome>
        <Options>
          {quizzes.map((quiz, quizIndex) => (
            <Option
              key={quizIndex}
              className="option"
              onClick={() => startQuiz(quiz.title, quiz.icon)}
              tabIndex={0}
              onKeyDown={(event) => handleOptionKeyDown(event, quizIndex, quizzes.length)}
              ref={(ref) => (optionRefs.current[quizIndex] = ref)}
            >
              <IconWrapper className={`${quiz.title}-Icon`}>
                {quiz.title === 'HTML' && <img src={htmlIcon} alt="HTML icon" className="icon" />}
                {quiz.title === 'CSS' && <img src={cssIcon} alt="CSS icon" className="icon" />}
                {quiz.title === 'JavaScript' && <img src={jsIcon} alt="JavaScript icon" className="icon" />}
                {quiz.title === 'Accessibility' && <img src={accessibilityIcon} alt="Accessibility icon" className="icon" />}
              </IconWrapper>
              <p>{quiz.title}</p>
            </Option>
          ))}
        </Options>
      </Apps>
    </ThemeProvider>
  );
};

export default Home;
