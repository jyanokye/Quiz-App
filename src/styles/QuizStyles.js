import styled from 'styled-components';


export const ScoreSection = styled.div`
  display:flex;
  height: auto;
  min-height: 512px;
  color: ${(props) => props.theme.color};
  padding-top:20px;
  min-width:1157px;
  justify-content:space-between;
  
  overflow:hidden;
`;
export const Score = styled.div`
display:flex;
flex-direction: row;
 min-width:1157px;
justify-content:space-between;
`;

export const ScoreWrapper = styled.div`
  
  height:136px;
  h1 {
    color:  ${(props) => props.theme.color};
    font-size: 64px;
  
    font-weight: lighter;
    margin:0px;
  }
  h3 {
    color:  ${(props) => props.theme.color};
    font-size: 64px;
    margin:0px;
    
    font-weight: 500;
  }

 
`;
export const YourScore = styled.div`
display:flex;
flex-direction:column;
gap:32px;

div:first-child div:first-child{
display:flex;
width:253px;
height:56px;
font-size:24px;
flex-direction:row;
gap:24px;
font-weight: 500;
}


div:first-child{
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
background-color: ${(props) => props.theme.optionBackgroundColor};
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
    div:first-child div:last-child span{
   
    font-size: 24px;
    
    color:  ${(props) => props.theme.TextColor};
    font-weight:normal;
    }
div:first-child div:last-child p{
font-family: 'Rubik';
    font-size: 144px;
    margin:0px;
    font-weight: 500;
}
`;
