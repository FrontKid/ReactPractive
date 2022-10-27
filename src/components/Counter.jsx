import React, { useState } from 'react'

const Counter = () => {
  const [likes, setLikes] = useState(0);
  const [value, setValue] = useState("Text into input");

  function increase() {
    setLikes(likes + 1)
  }
  function decrease() {
    if (likes === 0) {
      return
    } else {
      setLikes(likes - 1)
    }
  }
  return (

    <div>
      <h1>{likes}</h1>
      <h2>{value}</h2>
      <input type="text" value={value} onChange={event => setValue(event.target.value)} />
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}

export default Counter