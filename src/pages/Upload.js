import { useRef, useState } from 'react';
import styled from 'styled-components';

const Upload = () => {
  // post 객체  -> title, content, password,                                    createdAt, id

  // key(unique) value

  const [title, setTitle] = useState('');
  const [password, setPassword] = useState('');
  const [content, setContent] = useState('');

  // const nextId = useRef(0);

  const onSubmit = e => {
    e.preventDefault();

    // es6 property shortcut 프로퍼티 축약표현!  -> 조건 : 프로퍼티의 이름과 변수의 이름이 같으면, 축약해서 표현이가능하다.

    const hour = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();

    const post = {
      title,
      content,
      password,
      createAt: hour + '시' + ' ' + minutes + '분' + ' ' + seconds + '초',
      // id: (nextId.current += 1),
      id: Date.now(),
      // 1970 영국을 기준으로 해서 현재까지 의 시간을 밀리초 단위로 반환해줘요!
      // 고유함을 보존할 수 있나요?
      // 기존의 데이터가 전혀없을때, 최초에 데이터를 추가할때 0 을 추가를하고,
      // 그 이후에 저장되는 데이터들은 0 + 1 = 1
      // 1 + 1 = 2

      // UUID
    };

    if (localStorage.posts === undefined) {
      console.log('작동이되나요?');
      // 최초에 저장할때!!!!
      // []
      localStorage.setItem('posts', JSON.stringify([post]));
    } else {
      // console.log(localStorage.getItem('posts')); // []
      let getPosts = JSON.parse(localStorage.getItem('posts'));
      console.log(getPosts);
      // console.log(getPosts.push(post)); // 1
      getPosts.push(post);
      // console.log(addPost);
      localStorage.setItem('posts', JSON.stringify(getPosts));
    }

    setTitle('');
    setPassword('');
    setContent('');
  };

  return (
    <div>
      <h1>Upload</h1>
      <Form>
        <input
          type='title'
          value={title}
          placeholder='title'
          onChange={e => {
            setTitle(e.target.value);
          }}
        />
        <input
          type='password'
          value={password}
          placeholder='password'
          onChange={e => {
            setPassword(e.target.value);
          }}
          autoComplete='off'
        />
        <textarea
          type='content'
          value={content}
          placeholder='내용을 입력하세요'
          onChange={e => {
            setContent(e.target.value);
          }}
        />
        <button onClick={onSubmit}>제출</button>
      </Form>
    </div>
  );
};

const Form = styled.form`
  display: block;
  width: 500px;
  justify-content: center;
  align-items: center;
  margin: 0;

  input {
    margin-bottom: 20px;
    margin-right: 20px;
  }

  textarea {
    margin-bottom: 20px;
    width: 100%;
    height: 200px;
  }

  button {
    width: 150px;
    margin: 0 auto;
  }
`;

export default Upload;
