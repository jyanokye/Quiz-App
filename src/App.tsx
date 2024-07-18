import React, { useState } from 'react';
import Home from './components/Home';
import Quiz from './components/Quiz';
import { MyApp, MyToggleWrapper,GlobalStyle } from './styles/HomeStyle';
import Toggle from './components/Toggle';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import "./App.css"

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [subject, setSubject] = useState<string | null>(null);
  const [subjectIcon, setSubjectIcon] = useState<string | null>(null); 

  const startQuiz = (subject: string, icon: string) => {
    setSubject(subject);
    setSubjectIcon(icon); 
  };

  const goBack = () => {
    setSubject(null);
    setSubjectIcon(null); 
  };

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle/>
      <MyApp>
        <MyToggleWrapper >
          <div>
            <div className={`${subject}-Icon`}>
          {subjectIcon && <img src={subjectIcon} alt={`${subject} icon`} />}</div> 
          <div><p>{subject}</p></div>
          </div>
          <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)}/>
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

