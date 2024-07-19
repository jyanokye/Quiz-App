import styled from 'styled-components';

export const ScoreSection = styled.div`
  display: flex;
  height: auto;
  min-height: 512px;
  color: ${(props) => props.theme.color};

  min-width: 1157px;
  justify-content: space-between;
  overflow: hidden;
`;

export const Score = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 1157px;
  justify-content: space-between;

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    align-items: center;
    gap: 64px;
    flex-direction: column;
    max-width: 640px;
  }

  @media only screen and (max-width: 767px) {
    align-items: center;
    gap: 40px;
    flex-direction: column;
    width: 375px;
  }
`;

export const ScoreWrapper = styled.div`
  height: 136px;

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
    font-weight: 500;
  }

  @media only screen and (max-width: 767px) {
    h1 {
      font-size: 40px;
    }

    h3 {
      font-size: 40px;
    }
  }
`;

export const YourScore = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.optionBackgroundColor};
    height: 388px;
    width: 564px;
    border-radius: 24px;

    div:first-child {
      display: flex;
      width: 253px;
      height: 56px;
      font-size: 24px;
      flex-direction: row;
      gap: 24px;
      font-weight: 500;
    }

    div:last-child {
      span {
        font-size: 24px;
        color: ${(props) => props.theme.TextColor};
        font-weight: normal;
      }

      p {
        font-family: 'Rubik';
        font-size: 144px;
        margin: 0px;
        font-weight: 500;
      }
    }
  }

  div:last-child button {
    font-family: 'Rubik';
    color: white;
    font-size: 28px;
    width: 564px;
    height: 92px;
    cursor: pointer;
    background-color: #a729f5;
    border-radius: 24px;
    border: none;
    padding: 32px 179.5px;
    
  }

  @media only screen and (max-width: 767px) {
    div:first-child {
      padding: 0 24px;
      height: 242px;
      width: 325px;
    }

    div:first-child div:last-child span {
      font-size: 18px;
    }

    div:first-child div:last-child p {
      font-size: 88px;
    }

    div:last-child button {
      padding: 19px 112px;
      max-width: 325px;
      height: 56px;
      font-size: 18px;
      border-radius: 12px;
    }
  }
`;
