import { ToggleWrapper,ThemeWrapper } from "../styles/ToggleStyle";
import { useTheme } from 'styled-components';




export const Toggle = ({handleChange, isChecked}) =>{
  const theme = useTheme();
    return(
      <ThemeWrapper>
      <div>
      <img src={theme.sunIcon} alt="Sun Icon"  />
      
          </div>
  
        <ToggleWrapper>
          
        <label className="switch" >
          <input type="checkbox" id="checkbox"  onChange={handleChange} checked={isChecked}/>
          <div className="slider round"></div>
        </label>

       
      </ToggleWrapper>
       <div>
       <img src={theme.moonIcon} alt="Moon Icon"/>
       
       </div>
       </ThemeWrapper>
      
    );
}; 