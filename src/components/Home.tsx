import React from 'react';
import { Apps, Welcome, Options, Option, IconWrapper} from '../styles/HomeStyle';
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

  return (
    <ThemeProvider theme={theme}>
      <Apps>
        <Welcome>
          <h1>Welcome to the</h1>
          <h3>Frontend Quiz!</h3>
          <p>Pick a subject to get started</p>
        </Welcome>
        <Options>
          <Option onClick={() => startQuiz('HTML', htmlIcon)}> 
            <IconWrapper className="HTML-Icon">
              <img src={htmlIcon} alt="HTML icon" className="icon" />
            </IconWrapper>
            <p>HTML</p>
          </Option>
          <Option onClick={() => startQuiz('CSS', cssIcon)}> 
            <IconWrapper className="CSS-Icon">
              <img src={cssIcon} alt="CSS icon" className="icon" />
            </IconWrapper>
            <p>CSS</p>
          </Option>
          <Option onClick={() => startQuiz('Javascript', jsIcon)}> 
            <IconWrapper className="JS-Icon">
              <img src={jsIcon} alt="JavaScript icon" className="icon" />
            </IconWrapper>
            <p>JavaScript</p>
          </Option>
          <Option onClick={() => startQuiz('Accessibility', accessibilityIcon)}> 
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
