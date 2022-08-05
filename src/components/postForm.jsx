import React, { useState } from "react";
import MyInput from '../UI/MyInput';
import MyButton from '../UI/MyButton';

const PostForm = ({ createPost }) => {
  // Управляемый инпут
  const [post, setPost] = useState({
    title: '',
    body: '',
  });
  // Неуправляемый/неконтролируемый инпут
  // const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault();
    // const bodyInputValue = bodyInputRef.current.value;
    const newPost = { ...post, id: Date.now() }
    createPost(newPost);
    setPost({
      title: '',
      body: '',
    })
  }

  return (
    <form>
      <MyInput
        placeholder="Название поста"
        value={post.title}
        onChange={e => setPost({ ...post, title: e.target.value })}
      />
      <MyInput
        placeholder="Описание поста"
        value={post.body}
        onChange={e => setPost({ ...post, body: e.target.value })}
      />
      {/* <MyInput placeholder="Описание поста" ref={bodyInputRef} /> */}
      <MyButton type="button" onClick={addNewPost}>Создать пост</MyButton>
    </form>
  )
}

export default PostForm;
