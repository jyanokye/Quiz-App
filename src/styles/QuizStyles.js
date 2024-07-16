import styled from 'styled-components';


export const ScoreSection = styled.div`
  display:flex;
  
  color: ${(props) => props.theme.color};
  padding-top:140px;
  width:1157px;
  height:512px;
`;
export const Score = styled.div`
display:flex;
flex-direction: row;
justify-items:space-between;
`;

export const ScoreWrapper = styled.div`
  width:450px;
  height:136px;
  h1 {
    color:  ${(props) => props.theme.color};
    font-size: 64px;
    font-family: 'Rubik';
    font-weight: lighter;
    margin:0px;
  }
  h3 {
    color:  ${(props) => props.theme.color};
    font-size: 64px;
    margin:0px;
    padding-bottom: 48px;
    font-weight: 500;

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
export const YourScore = styled.div`

div:first-child{
display:flex;
flex-direction:column;
justify-content: center;
    align-items: center;
background-color:  ${(props) => props.theme.optionBackgroundColor};
height:388px;
width:564px;
border-radius:24px;
}
div:last-child button{
   font-family: 'Rubik';
    color: white;
    font-size: 28px;
    width: 564px;
    height: 92px;
    cursor: pointer;
    background-color: #A729F5;
    border-radius: 24px;
    border: none;
    padding:32px 179.5px 32px 179.5px;
    margin-top:32px;
}
    div p span{
    font-family: 'Rubik';
    font-size: 24px;
    color:  ${(props) => props.theme.TextColor};
    font-weight:normal;
    }
div p{
font-family: 'Rubik';
    font-size: 144px;
    margin:0px;
    padding-bottom: 48px;
    font-weight: 500;
}
`;
