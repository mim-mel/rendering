import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [localPosts, setLocalPosts] = useState([]);

  useEffect(() => {
    const prevPost = JSON.parse(localStorage.getItem('posts'));
    setLocalPosts(prevPost);
  }, []);

  return (
    <>
      {localPosts.map(post => (
        <div key={post.id}>
          <Link style={{ display: 'block' }} to={`/post/${post.id}`}>
            {post.title}
          </Link>
        </div>
      ))}
    </>
  );
};

export default Home;
