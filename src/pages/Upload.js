import { useRef, useState } from 'react';
import styled from 'styled-components';

const Upload = () => {
  // post 객체  -> title, content, password,                                    createdAt, id

  // key(unique) value

  const [title, setTitle] = useState('');
  const [password, setPassword] = useState('');
  const [content, setContent] = useState('');

  const nextId = useRef(0);

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
      id: (nextId.current += 1),
    };

    if (localStorage.posts === undefined) {
      localStorage.setItem('posts', JSON.stringify([]));
    }

    let getPosts = JSON.parse(localStorage.getItem('posts'));
    console.log(getPosts);
    const addPost = getPosts.push(post);

    localStorage.setItem('posts', JSON.stringify(addPost));

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
