import React, { useState } from "react";
import PostList from "./components/PostList";
import "./styles/App.css"
import Button from "./components/UI/button/Button";
import Input from "./components/UI/input/Input";

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "Python", body: "Description" },
    { id: 3, title: "C++", body: "Description" },
  ])
  const [post, setPost] = useState({ title: '', body: '' })
  console.log(post);


  const addNewPost = (e) => {
    e.preventDefault()

    setPosts([...posts, { ...post, id: Date.now() }])
    setPost({ title: '', body: '' })
  }

  return (
    <div className="App">
      <form>
        {/* Control input */}
        <Input
          type="text"
          placeholder="title of post"
          value={post.title}
          onChange={e => setPost({ ...post, title: e.target.value })} />
        <Input
          value={post.body}
          onChange={e => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder="description of post"
        />
        <Button onClick={addNewPost}>Create post</Button>
      </form>
      <PostList posts={posts} title="About JavaScript" />
    </div>
  );
}




export default App;

