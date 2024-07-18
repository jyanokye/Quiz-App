import React, { useState } from 'react';
import Home from './components/Home';
import Quiz from './components/Quiz';
import { MyApp, MyToggleWrapper, GlobalStyle } from './styles/HomeStyle';
import Toggle from './components/Toggle';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import HTMLIcon from './assets/images/icon-html.svg';
import cssIcon from './assets/images/icon-css.svg';
import jsIcon from './assets/images/icon-js.svg';
import accessibilityIcon from './assets/images/icon-accessibility.svg';
import './App.css';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [subject, setSubject] = useState<string | null>(null);
  const [subjectIcon, setSubjectIcon] = useState<string | null>(null);

  const startQuiz = (selectedSubject: string, icon: string) => {
    setSubject(selectedSubject);
    setSubjectIcon(icon);
  };

  const goBack = () => {
    setSubject(null);
    setSubjectIcon(null);
  };

  const getIconForSubject = (subject: string | null): string | undefined => {
    switch (subject) {
      case 'HTML':
        return HTMLIcon;
      case 'CSS':
        return cssIcon;
      case 'JavaScript':
        return jsIcon;
      case 'Accessibility':
        return accessibilityIcon;
      default:
        return undefined;
    }
  };

  const icon = subject ? getIconForSubject(subject) : undefined;

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <MyApp>
        <MyToggleWrapper>
          <div>
            <div className={`${subject}-Icon`}>
              {icon && <img src={icon} alt={`${subject} icon`} />}
            </div>
            <div>
              <p>{subject}</p>
            </div>
          </div>
          <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
        </MyToggleWrapper>
        {subject ? (
          <Quiz subject={subject} goBack={goBack} isDark={isDark} />
        ) : (
          <Home startQuiz={startQuiz} isDark={isDark} />
        )}
      </MyApp>
    </ThemeProvider>
  );
};

export default App;
