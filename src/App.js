import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/posts")
      .then((res) => setPosts(res.data));
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <h2 key={post._id}>{post.title}</h2>
      ))}
    </div>
  );
}

export default App;
