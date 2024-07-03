import React, { useState } from 'react';
import Home from './components/Home';
import Quiz from './components/Quiz';
import { MyApp, MyToggleWrapper } from './styles/HomeStyle';
import { Toggle } from './components/Toggle';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [subject, setSubject] = useState<string | null>(null);
  const [subjectIcon, setSubjectIcon] = useState<string | null>(null); // State to store subject icon

  const startQuiz = (subject: string, icon: string) => {
    setSubject(subject);
    setSubjectIcon(icon); // Set subject icon when starting quiz
  };

  const goBack = () => {
    setSubject(null);
    setSubjectIcon(null); // Clear subject icon when going back
  };

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <MyApp>
        <MyToggleWrapper>
          {subjectIcon && <img src={subjectIcon} alt={`${subject} icon`} />} {/* Display subject icon */}
          <div>{subject}</div> {/* Display subject name */}
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
