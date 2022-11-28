import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <NavWrap>
      <NavTitle to='/'>홈</NavTitle>
      <NavTitle to='/upload'>글 작성</NavTitle>
      <NavTitle to='/upload'>로그인</NavTitle>
    </NavWrap>
  );
};

const NavWrap = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavTitle = styled(Link)`
  text-decoration: none;
  color: black;
  margin: 0 20px;
`;

export default Nav;
