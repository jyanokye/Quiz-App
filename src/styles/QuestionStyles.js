import styled from 'styled-components';

export const QuestionWrapper = styled.div`
  display: flex;

  width: 1160px;
  height: auto;
  min-height: 546px;


  color: ${(props) => props.theme.color};
  justify-content: space-between;
  flex-direction: row;
  overflow:hidden;
  @media only screen and (min-width: 768px) and (max-width: 1024px) { 
  flex-direction:column;
  width:640px;
  }
  @media (max-width: 767px) {
  align-items:center;
 
   flex-direction:column; 
   width:375px;
   gap:40px;
    margin-bottom:80px;
  }
`;



export const MyQuestion = styled.div`
  display:flex;
  flex-direction:column;
   
  height:452px;
  width:465px;
  justify-content:space-between;
   

  
    p{
    margin-bottom:0;
    color: #626C7F;
    }
    h2{
    font-size:36px;
    }
     @media (max-width: 767px){
      height:129px;
  width:327px;
  gap:24px;
  justify-content:space-between;
     }
  h2{
        font-size:20px;
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
     @media (max-width: 767px) {
     position:relative;
     width:327px;
   
     }
`;




export const MyOptions = styled.div`
    display: flex;
    flex-direction: column;
    height:636px;
    width:564px;
    margin-top:3px;
    margin-right:3px;
    gap:32px;
    color: ${(props) => props.theme.color};
    .option{
      background-color: ${(props) => props.theme.optionBackgroundColor};
      display: flex;
      align-items: center;
      flex-direction: row;
      width: 564px;
      height: 92px;
      cursor: pointer;
      border-radius:24px;
      }
      .option:focus {
  outline: 2px solid #A729F5 ; 

}
     
    .option:hover .OptionLetter {
    background-color: #F6E7FF;
    color: #A729F5; 
  }
    .selected.right.option{
    border: 2px solid #26D782 ;
    }
    .selected.right.option .OptionLetter{
    background-color: #26D782 ;
    }
    .selected.wrong.option{
    border: 2px solid #EE5454 ;
    }
    .selected.wrong.option .OptionLetter{
    background-color:#EE5454 ;
    }
    
  
    .Know{
    display: flex;
    flex-direction: column;
    height:440px;
    justify-content:space-between;
    }

    .option.selected .OptionLetter {

  background-color: #a729f5;
}
      .option.selected .OptionLetter p{
        color: white;
      }

  .OptionLetter {
    display: flex;
    color: #626C7F;
    justify-content: center;
    border-radius: 7px;
    flex-wrap:wrap;
    align-content: center;
    margin: 20px;
    width: 56px;
    height: 56px;
    background-color: #F4F6FA;
  }

  .option {
  transition: background-color 0.3s, color 0.3s;
  }
  .option p{
   color: color: ${(props) => props.theme.color};;
      font-weight:500; 
  }
    .OptionLetter {
  transition: color 0.3s ease; 
}
  .OptionLetter p{
   color: #626C7F;
    font-weight: 500;
  font-size:28px;
  }

  .answer-feedback {
        margin-left: auto;
        margin-right:3px;
    }
        @media (max-width: 767px) {
      height: 360px;
    width: 327px;
   .option{
   border-radius:12px;
   height:64px;
   width:327px;
   }
   .OptionLetter{
   width:40px;
   height:40px;
   border-radius:6px;
   }
   .OptionLetter p{
   font-size:18px;}
  }
    .Know{
   
    gap:12px;}
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
    padding:32px 179.5px 32px 179.5px;
    margin-top:10px;

  &:disabled {
    background-color: #ccc;
  }
    @media (max-width: 767px){
    width: 327px;
    height: 56px;
    font-size: 18px;
    border-radius: 16px;
    padding:19px 97.5px 19px 97.5px;
    }
`;
export const Error = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
margin: 2px 48px;

p{font-size:16px;
color: #EE5454;}`;
