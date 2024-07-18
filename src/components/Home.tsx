import React, { useRef } from 'react';
import { Apps, Welcome, Options, Option, IconWrapper, MyToggleWrapper } from '../styles/HomeStyle'; // Make sure to import MyToggleWrapper
import htmlIcon from '../assets/images/icon-html.svg';
import cssIcon from '../assets/images/icon-css.svg';
import jsIcon from '../assets/images/icon-js.svg';
import accessibilityIcon from '../assets/images/icon-accessibility.svg';
import { darkTheme, lightTheme } from '../styles/theme';
import { ThemeProvider } from 'styled-components';

type HomeProps = {
  startQuiz: (subject: string, icon: string) => void;
  isDark: boolean;
};

const Home: React.FC<HomeProps> = ({ startQuiz, isDark }) => {
  const theme = isDark ? darkTheme : lightTheme;
  const optionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleOptionKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    index: number,
    totalOptions: number
  ) => {
    const options = optionRefs.current;
  
    if (event.key === 'Enter' || event.key === ' ') {
      const target = options[index] as HTMLDivElement;
      target.click(); // Simulate click on Enter or Space
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      const nextIndex = index + 1;
      if (nextIndex < totalOptions) {
        options[nextIndex]?.focus();
      } else {
        // Move focus to the theme button
        const themeButton = document.querySelector('.theme-button') as HTMLElement;
        if (themeButton) {
          themeButton.focus();
        }
      }
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      const prevIndex = index - 1;
      if (prevIndex >= 0) {
        options[prevIndex]?.focus();
      } else {
        // Move focus to the last option
        options[totalOptions - 1]?.focus();
      }
    } else if (event.key === 'Tab' && index === totalOptions - 1) {
      // Prevent default tab behavior outside the app
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
          <Option
            className="option"
            onClick={() => startQuiz('HTML', htmlIcon)}
            tabIndex={0}
            onKeyDown={(event) => handleOptionKeyDown(event, 0, 4)} // Total options count is 4
            ref={(ref) => (optionRefs.current[0] = ref)}
          >
            <IconWrapper className="HTML-Icon">
              <img src={htmlIcon} alt="HTML icon" className="icon" />
            </IconWrapper>
            <p>HTML</p>
          </Option>
          <Option
            className="option"
            onClick={() => startQuiz('CSS', cssIcon)}
            tabIndex={0}
            onKeyDown={(event) => handleOptionKeyDown(event, 1, 4)}
            ref={(ref) => (optionRefs.current[1] = ref)}
          >
            <IconWrapper className="CSS-Icon">
              <img src={cssIcon} alt="CSS icon" className="icon" />
            </IconWrapper>
            <p>CSS</p>
          </Option>
          <Option
            className="option"
            onClick={() => startQuiz('JavaScript', jsIcon)}
            tabIndex={0}
            onKeyDown={(event) => handleOptionKeyDown(event, 2, 4)}
            ref={(ref) => (optionRefs.current[2] = ref)}
          >
            <IconWrapper className="JS-Icon">
              <img src={jsIcon} alt="JavaScript icon" className="icon" />
            </IconWrapper>
            <p>JavaScript</p>
          </Option>
          <Option
            className="option"
            onClick={() => startQuiz('Accessibility', accessibilityIcon)}
            tabIndex={0}
            onKeyDown={(event) => handleOptionKeyDown(event, 3, 4)}
            ref={(ref) => (optionRefs.current[3] = ref)}
          >
            <IconWrapper className="Access-Icon">
              <img src={accessibilityIcon} alt="Accessibility icon" className="icon" />
            </IconWrapper>
            <p>Accessibility</p>
          </Option>
        </Options>
      </Apps>
    </ThemeProvider>
  );
};

export default Home;
