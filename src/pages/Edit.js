import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router';

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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
    setTitle(currentPost.title);
    setPassword(currentPost.password);
    setContent(currentPost.content);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    const hour = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();

    let EditPost = {
      title: title,
      content: content,
      password: password,
      createAt:
        hour + '시' + ' ' + minutes + '분' + ' ' + seconds + '초 ' + '수정',
      id: id,
    };

    setTitle(e.target.value);

    const posts = JSON.parse(localStorage.getItem('posts'));

    const EditPosts = posts.map(it => {
      if (parseInt(it.id) === parseInt(id)) {
        return EditPost;
      }
      return it;
    });

    localStorage.setItem('posts', JSON.stringify(EditPosts));
    navigate('/');
  };

  return (
    <div>
      <h1>Edit</h1>
      <Form>
        <input
          type='title'
          value={title}
          onChange={e => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          type='content'
          value={content}
          placeholder={post.content}
          onChange={e => {
            setContent(e.target.value);
          }}
        />
        <button
          onClick={e => {
            handleSubmit(e);
          }}
        >
          제출
        </button>
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
