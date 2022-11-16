import React from "react";
import { useEffect } from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  width: 100px;
  line-height: 100px;
  text-align: center;
  border: 3px solid whitesmoke;
`;

const Box = ({ num }) => {
  useEffect(() => {
    const timerId = setInterval(() => {
      console.log(`반복되는${num}`);
    }, [2000]);

    return () => {
      console.log("컴포넌트가 willUnmount가 될거빈다.");
      clearInterval(timerId); // setInterval 청소해주는 역할
      // componentWillUnmount 가 될때 컴포넌트가 DOM 에서 사라질때
    };
  }, [num]);

  return <StyledBox id={num}>{num}</StyledBox>;
};

export default React.memo(Box);
