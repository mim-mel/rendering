import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

const Detail = () => {
  // url 에 지금 현재 들어있는 '게시물의 id 값'으로
  // localStorage 에 저장된 (데이터베이스) 에 값을 비교해서 '조회'하고,
  // 화면에 보여주려면 어떻게 해야할까요?
  // 객체구조분해할당을 사용해서 id 라는 변수를 만들고, 그 변수에 실제 id 값을 할당해주세요!

  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState([]);

  useEffect(() => {
    const getPost = JSON.parse(localStorage.getItem('posts'));
    const currentPost = getPost.find(
      post => parseInt(post.id) === parseInt(id)
    );
    setPost(currentPost);
  }, []);

  const onEdit = () => {
    const checkPW = prompt('비밀번호를 입력해주세요', '비밀번호');
    if (post.password === checkPW) {
      navigate(`/edit/${post.id}`);
    } else {
      alert('비빌번호가 일치하지 않습니다.');
    }
  };

  const onDelete = () => {
    const checkPW = prompt('비밀번호를 입력해주세요', '비밀번호');
    if (post.password === checkPW) {
      const getPost = JSON.parse(localStorage.getItem('posts'));
      const removedPost = getPost.filter(
        post => parseInt(post.id) !== parseInt(id)
      );
      localStorage.setItem('posts', JSON.stringify(removedPost));
      navigate('/');
    } else {
      alert('비빌번호가 일치하지 않습니다.');
    }
  };

  if (true) {
  }
  // const id = useParams().id;

  //   window.prompt('비밀번호:');
  //   window.confirm('정말로 삭제하시겠습니까');

  return (
    <div>
      <h1>제목: {post.title}</h1>
      <div>작성시간: {post.createAt}</div>
      <div>내용: {post.content}</div>
      <button onClick={onEdit}>수정하기</button>
      <button onClick={onDelete}>삭제하기</button>
    </div>
  );
};

export default Detail;
