import { useNavigate } from 'react-router-dom';
import s from '../app.module.css';
import MyButton from '../UI/MyButton';

const PostItem = ({ post, removePost }) => {
  const navigate = useNavigate();

  return (
    <div className={s.post}>
      <div className={s.postContent}>
        <h2>{post.id}. {post.title}</h2>
        <p>{post.body}</p>
      </div>
      <div className={s.postBtns}>
        <MyButton onClick={() => navigate(`/posts/${post.id}`)}>Открыть</MyButton>
        <MyButton onClick={() => removePost(post)}>Удалить</MyButton>
      </div>
    </div>
  )
}

export default PostItem;
