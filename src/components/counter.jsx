import React, { useState } from "react";
import MyButton from '../UI/MyButton'

const Counter = () => {
  const [likesCount, setLikesCount] = useState(0);

  return (
    <div style={{ paddingTop: 20 }}>
      <h2>Likes count: {likesCount}</h2>
      <MyButton onClick={() => setLikesCount(likesCount + 1)}>Increment</MyButton>
      <MyButton onClick={() => setLikesCount(likesCount - 1)}>Decrement</MyButton>
    </div>
  )
};

export default Counter;
