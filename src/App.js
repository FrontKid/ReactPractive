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
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')


  const addNewPost = (e) => {
    e.preventDefault()

    const newPost = {
      id: Date.now(),
      body,
      title
    }
    setPosts([...posts, newPost])
  }

  return (
    <div className="App">
      <form>
        {/* Control input */}
        <Input
          type="text"
          placeholder="title of post"
          value={title}
          onChange={e => setTitle(e.target.value)} />
        <Input
          value={body}
          onChange={e => setBody(e.target.value)}
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

