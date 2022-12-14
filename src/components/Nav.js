import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Btn from './Btn';
import { modeState } from '../recoil/atom';
import { useRecoilValue } from 'recoil';

const Nav = () => {

  const current = useRecoilValue(modeState);
  const navColor = current.navColor;
  const textColor = current.textColor;

  return (
    <NavWrap navColor={navColor}>
      <StyledLink to='/'>
        <NavTitle textColor={textColor}>홈</NavTitle>
      </StyledLink>
      <StyledLink to='/upload'>
        <NavTitle textColor={textColor}>글작성</NavTitle>
      </StyledLink>
      <StyledLink to='/'>
        <NavTitle textColor={textColor}>로그인</NavTitle>
      </StyledLink>
      <Btn />
    </NavWrap>
  );
};

const NavWrap = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.navColor};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`

const NavTitle = styled.div`
  color: ${(props) => props.textColor};
  margin: 0 20px;
`;

export default Nav;
