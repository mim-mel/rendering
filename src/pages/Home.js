import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { modeState } from '../recoil/atom';
import { useRecoilValue } from 'recoil';

const Home = () => {
  const [localPosts, setLocalPosts] = useState([]);

  useEffect(() => {
    const prevPost = JSON.parse(localStorage.getItem('posts'));
    setLocalPosts(prevPost);
  }, []);

  const current = useRecoilValue(modeState);
  const elementColor = current.elementColor;
  const textColor = current.textColor;

  return (
    <HomeWrap>
      <PostWrap>
        {localPosts
        ?
        <div>
          {localPosts.map(post => (
            <PostBlock key={post.id} elementColor={elementColor}>
              <PostLink style={{ display: 'block' }} to={`/detail/${post.id}`}>
                <PostTitie textColor={textColor}>{post.title}</PostTitie>
                <PostContent>{post.content}</PostContent>
              </PostLink>
            </PostBlock>
          ))}
        </div>
        :
        <div>Home</div>
        }
      </PostWrap>
    </HomeWrap>
  );
};

const HomeWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 70px;
`;

const PostWrap = styled.div`
  display: grid;
  grid-template-columns: 32% 32% 32%;
`;

const PostBlock = styled.div`
  width: 500px;
  height: 150px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 20px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding-left: 40px;
  background-color: ${props=>props.elementColor};
`;

const PostLink = styled(Link)`
  text-decoration: none;
`;

const PostTitie = styled.div`
  color: ${(props)=>props.textColor};
  font-size: 17px;
  font-weight: 500;
`;

const PostContent = styled.div`
  color: #828282;
  font-size: 15px;
  font-weight: 400;
  margin-top: 20px;
`;

export default Home;
