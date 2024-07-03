import styled from 'styled-components';

 export const ThemeWrapper = styled.div`
 display:flex;
 flex-direction:row;
  justify-content: space-between;
 
 top:97px;
 right:140px;
 width:128px;
 height:28px;
 @media only screen and (max-width: 767px) {

  }
  `;

export const ToggleWrapper = styled.div`
  display: flex;
  flex-direction:row;
  

 .switch {
    display: inline-block;
    height: 34px;
    position: relative;
    width: 60px;
  }

   .switch input {
    display:none;
  }

   .slider {
    background-color: 
#A729F5;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: .4s;
  }

   .slider:before {
    background-color: 
#fff;
    bottom: 4px;
    content: "";
    height: 26px;
    left: 4px;
    position: absolute;
    transition: .4s;
    width: 26px;
  }

   input:checked + .slider {
    background-color: 
#A729F5;
  }

   input:checked + .slider:before {
    transform: translateX(26px);
  }

 .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
     .icon {
    display: none;
    position: absolute;
    width: 20px;
    height: 20px;
    top: 50%;
    transform: translateY(-50%);
  }

 
`;
