import Router from "./Router";
import styled from "styled-components";
import { modeState } from "./recoil/atom";
import { useRecoilValue } from "recoil";


const App = () => {

  const current = useRecoilValue(modeState);
  const bgColor = current.bgColor;

  return(
    <Background bgColor={bgColor}>
      <Router />
    </Background>
  )
};

const Background = styled.div`
  background-color: ${(props) => props.bgColor};
  overflow: hidden;
  height: 100vh;
`

export default App;
