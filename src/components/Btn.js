import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { darkState, lightState, modeState } from "../recoil/atom";

const Btn = () => { 

    const [btnName, setBtnName] = useState('LIGHT')

    const [theme, setTheme] = useRecoilState(modeState);

    const lightMode = useRecoilValue(lightState)
    const darkMode = useRecoilValue(darkState);

    const toggle = () => {
      if(theme === lightMode){
        setTheme(darkMode);
        setBtnName('DARK');
      }else{
        setTheme(lightMode);
        setBtnName('LIGHT');
      }
    }

    const current = useRecoilValue(modeState);
    const bgColor = current.bgColor;
    const textColor = current.textColor;


    return(
     <Button onClick={toggle} bgColor={bgColor} textColor={textColor}>
        {btnName}
     </Button>
    )
}

const Button = styled.button`
  width: 70px;
  height: 30px;
  font-size: 15px;
  border-radius: 20px;
  border-style: none;
  border: 1.5px solid #282828;

  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};

  top: 30px;
  right: 30px;
`

export default Btn;