import styled from 'styled-components';

export const QuestionWrapper = styled.div`
  display: flex;
    width:1053px;
  height:100%;
   
   
  color: ${(props) => props.theme.color};
  justify-content: center;
   
    flex-direction: row;
    gap:168px;
  @media only screen and (min-width: 768px) and (max-width: 1024px) { 
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
`;




export const MyOptions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    height:564px;
    width:564px;
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
    gap: 30px;
    }

    
 

  .selected.option  {
    border: 2px solid #A729F5 ;
  }
    
    .option.selected .OptionLetter {
  color: white;
  background-color: #a729f5;
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
    .OptionLetter {
  transition: color 0.3s ease; 
}
  .OptionLetter p{
    font-family: 'Rubik';
    font-weight: 500;
  font-size:28px;
  }

  .answer-feedback {
        margin-left: auto;
        margin-right:3px;
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
    padding:32px 179.5px 32px 179.5px;
    margin-top:32px;

  &:disabled {
    background-color: #ccc;
  }
`;
export const Error = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
margin: 2px 48px;

p{font-size:16px;
color: #EE5454;}`;
