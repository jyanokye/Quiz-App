import styled from 'styled-components';

export const QuizWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 40px;
  }
`;

export const ScoreWrapper = styled.div`
  text-align: center;
  margin-top: 50px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};

  h3 {
    margin-bottom: 20px;
  }

  button {
    display: block;
    margin: 0 auto;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;
