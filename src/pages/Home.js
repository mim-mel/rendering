import { useEffect, useState } from 'react';

const Home = () => {
  const [localPosts, setLocalPosts] = useState([]);

  useEffect(() => {
    const prevPost = JSON.parse(localStorage.getItem('posts'));
    setLocalPosts(prevPost);
  }, []);

  console.log(localPosts);

  return (
    <div>
      {localPosts.map(post => (
        <div>{post.id}</div>
      ))}
    </div>
  );
};

export default Home;
