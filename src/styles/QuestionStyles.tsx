import styled from 'styled-components';

export const QuestionWrapper = styled.div`
  display: flex;
  width: 1160px;
  height: auto;
  min-height: 546px;
  color: ${(props) => props.theme.color};
  justify-content: space-between;
  flex-direction: row;

  @media only screen and (min-width: 768px) and (max-width: 1024px) { 
    flex-direction: column;
    width: 640px;
    gap: 60px;
  }

  @media (max-width: 767px) {
    align-items: center;
    flex-direction: column; 
    width: 375px;
    gap: 50px;
  }
`;

export const MyQuestion = styled.div`
  display: flex;
  flex-direction: column;
  height: 452px;
  width: 465px;
  justify-content: space-between;
  
  p {
    margin-bottom: 0;
    color: ${(props) => props.theme.TextColor};
  }

  h2 {
    font-size: 28px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 640px;
    height: 242px;
  }

  @media (max-width: 767px) {
    height: 129px;
    width: 327px;
    justify-content: space-between;

    h2 {
      font-size: 20px;
    }
  }
`;

export const ProgressBarContainer = styled.div`
  display: flex;
  width: 465px;
  height: 16px;
  background-color: ${(props) => props.theme.progressBarBackgroundColor};
  border-radius: 10px;

  .progress-bar {
    margin: 4px;
    height: 8px;
    background-color: #A729F5; 
    border-radius: 10px;
    transition: width 0.5s ease; 
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 640px;
  }

  @media (max-width: 767px) {
    width: 327px;
    margin-bottom: 20px;
  }
`;

export const MyOptions = styled.div`
  display: flex;
  flex-direction: column;
  height: 636px;
  width: 564px;
  margin-top: 3px;
  margin-right: 3px;
  gap: 32px;
  color: ${(props) => props.theme.color};
  transition: background-color 0.3s ease;

  .option {
    background-color: ${(props) => props.theme.optionBackgroundColor};
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 564px;
    height: 92px;
    cursor: pointer;
    border-radius: 24px;
    transition: background-color 0.3s, color 0.3s;
    font-weight:500;

    &:focus {
      outline: 2px solid #A729F5;
    }

    &:hover .OptionLetter {
      background-color: #F6E7FF;
      color: #A729F5;
    }
  }

  .selected.right.option {
    border: 2px solid #26D782;
  }

  .selected.right.option .OptionLetter {
    background-color: #26D782;
  }

  .selected.wrong.option {
    border: 2px solid #EE5454;
  }

  .selected.wrong.option .OptionLetter {
    background-color: #EE5454;
  }

  .Know {
    display: flex;
    flex-direction: column;
    height: 440px;
    justify-content: space-between;
  }

  .option.selected .OptionLetter {
    background-color: #a729f5;
  }

  .option.selected .OptionLetter p {
    color: white;
  }

  .OptionLetter {
    display: flex;
    color: #626C7F;
    justify-content: center;
    border-radius: 7px;
    flex-wrap: wrap;
    align-content: center;
    margin: 20px;
    width: 56px;
    height: 56px;
    background-color: #F4F6FA;
    transition: background-color 0.3s ease;

    p {
      color: #626C7F;
      font-weight: 500;
      font-size: 25px;
      transition: color 0.3s ease;
    }
  }

  .answer-feedback {
    margin-left: auto;
    margin-right: 3px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    .option {
      width: 640px;
    }
      .Know{
    width:640px;
    height:392px;
    gap:12px;
    }
  }

  @media (max-width: 767px) {
    height: 360px;
    width: 327px;

    .option {
      border-radius: 12px;
      height: 64px;
      width: 327px;
    }

    .OptionLetter {
      width: 40px;
      height: 40px;
      border-radius: 6px;
    }

    .option p {
      font-size: 15px;
    }

    .OptionLetter p {
      font-size: 18px;
    }
      .Know{
    width:327px;
    height:292px;
    gap:12px;
    }
     .answer-feedback {
   height:32px;
   width:32px;
    margin-left: auto;
    margin-right: 10px;
  }

    
  }
    
`;

export const SubmitButton = styled.button`
  font-family: 'Rubik';
  color: white;
  font-size: 28px;
  width: 564px;
  height: 92px;
  cursor: pointer;
  background-color: #A729F5;
  border-radius: 24px;
  border: none;
  padding: 32px 179.5px;
  &:focus {
      outline: 2px solid #A729F5;
    }
  transition: background-color 0.3s ease;

  &:disabled {
    background-color: #ccc;
  }

  &:hover {
    background-color: rgba(167, 41, 245, 0.5);
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 640px;
  }

  @media (max-width: 767px) {
    width: 327px;
    height: 56px;
    font-size: 18px;
    border-radius: 16px;
    padding: 19px 97.5px;
  }
`;

export const Error = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 2px 48px;

  p {
    font-size: 16px;
    color: #EE5454;
  }

  @media (max-width: 767px) {
    padding-top: 0px;
    padding-bottom: 12px;

    p {
      font-size: 15px;
    }
  }
`;
