import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';

const Edit = () => {
  const { id } = useParams();

  const [post, setPost] = useState([]);
  const [title, setTitle] = useState('');
  const [password, setPassword] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const getPost = JSON.parse(localStorage.getItem('posts'));
    const currentPost = getPost.find(
      post => parseInt(post.id) === parseInt(id)
    );
    setPost(currentPost);
    setTitle(post.title);
    setPassword(post.password);
    setContent(post.content);
  }, []);

  return (
    <div>
      <h1>Edit</h1>
      <Form>
        <input
          type='title'
          value={title}
          placeholder={post.title}
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
          placeholder={post.content}
          onChange={e => {
            setContent(e.target.value);
          }}
        />
        <button>제출</button>
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

export default Edit;
