import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Rubik';
    src: url('./assets/fonts/Rubik-VariableFont_wght.ttf') format('truetype');
    font-weight: 100 900; 
    font-style: normal;
  }

  @font-face {
    font-family: 'Rubik';
    src: url('./assets/fonts/Rubik-Italic-VariableFont_wght.ttf') format('truetype');
    font-weight: 100 900; 
    font-style: italic;
  }

  body {
    font-family: 'Rubik', sans-serif;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;

export const MyToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 97px;
  justify-content: space-between;
  margin-bottom: 55px;
  height: 56px;
  width: 1157px;

  &:focus {
    outline: 2px solid #A729F5;
  }

  div:first-child {
    display: flex;
    align-items: center;
    height: 56px;
    max-width: 252px;
    gap: 34px;
    justify-content: space-between;
  }

  div:first-child div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
    width: 56px;
    height: 56px;

    &.HTML-Icon {
      background-color: #FFF1E9;
    }
    &.CSS-Icon {
      background-color: #E0FDEF;
    }
    &.JavaScript-Icon {
      background-color: #EBF0FF;
    }
    &.Accessibility-Icon {
      background-color: #F6E7FF;
    }
  }

  div:first-child div:last-child {
    max-width: 173px;
    font-weight: 500;
    color: ${(props) => props.theme.color};
    font-size: 20px;
  }

  @media (max-width: 1024px) {
    width: 640px;
  }

  @media (max-width: 767px) {
    margin-top: 20px;
    margin-bottom: 0px;
    width: 375px;
    padding: 26px;
  }
`;

export const MyApp = styled.div`
  display: flex;
  padding-bottom: 83px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.backgroundColor};
  background-image: url(${(props) => props.theme.backgroundImageDesktop});
  background-size: cover;
  background-repeat: no-repeat;
  overflow-x: hidden;

  @media (max-width: 1024px) {
    background-image: url(${(props) => props.theme.backgroundImageTablet});
  }

  @media (max-width: 767px) {
    padding-bottom: 0px;
    background-image: url(${(props) => props.theme.backgroundImageMobile});
  }
`;

export const Welcome = styled.div`
  width: 465px;
  height: 214px;

  h1 {
    color: ${(props) => props.theme.color};
    font-size: 64px;
    font-weight: lighter;
    margin: 0px;
  }

  h3 {
    color: ${(props) => props.theme.color};
    font-size: 64px;
    margin: 0px;
    padding-bottom: 48px;
    font-weight: 500;
  }

  p {
    color: ${(props) => props.theme.TextColor};
    font-size: 20px;
    font-style: italic;
    margin: 0px;
  }

  &.dark {
    h1,
    h3 {
      color: #fff;
    }
    p {
      color: #abc1e1;
    }
  }

  @media only screen and (max-width: 767px) {
    width: 327px;
    height: 125px;

    h1,
    h3 {
      font-size: 40px;
    }

    h3 {
      padding-bottom: 16px;
    }

    p {
      font-size: 14px;
    }
  }
`;

export const Options = styled.div`
  display: flex;
  width: 564px;
  height: 456px;
  flex-direction: column;
  gap: 24px;

  @media only screen and (max-width: 767px) {
    width: 327px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  margin: 20px;
  width: 56px;
  height: 56px;

  &.HTML-Icon {
    background-color: #fff1e9;
  }
  &.CSS-Icon {
    background-color: #e0fdef;
  }
  &.JavaScript-Icon {
    background-color: #ebf0ff;
  }
  &.Accessibility-Icon {
    background-color: #f6e7ff;
  }

  .icon {
    width: 40px;
    height: 40px;
  }

  @media only screen and (max-width: 767px) {
    width: 40px;
    height: 40px;
    margin: 12px;

    .icon {
      width: 28.57px;
      height: 28.57px;
    }
  }
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 564px;
  height: 96px;
  cursor: pointer;
  border-radius: 24px;
  background-color: ${(props) => props.theme.optionBackgroundColor};
  color: ${(props) => props.theme.color};

  &:focus {
    outline: 2px solid #a729f5;
  }

  transition: background-color 0.3s, color 0.3s;

  &.dark {
    background-color: #3b4d66;
    color: #fff;
  }

  &:hover .OptionLetter {
    background-color: #f6e7ff;
    color: #a729f5;
  }

  p {
    font-size: 23px;
    font-weight: 500;
  }

  @media only screen and (max-width: 767px) {
    width: 327px;
    height: 64px;
    border-radius: 12px;

    p {
      font-size: 18px;
    }
  }
`;

export const Apps = styled.div`
  display: flex;
  padding: 0 120px 224px 140px;
  gap: 110px;
  flex-direction: row;
  width: 100%;

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 767px) {
    padding: 32px 24px;
    height: 100vh;
    gap: 40px;
    flex-direction: column;
  }
`;

export const Know = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;


