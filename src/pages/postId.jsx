import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import PostService from '../API/postService';
import useFetching from '../hooks/useFetching';
import Loader from '../UI/Loader';
import s from './postId.module.css'

const PostId = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getPostById(postId)
    setPost(response.data);
  });
  const [comments, setComments] = useState([]);
  const [fetchCommentsById, isCommentsLoading, commentsError] = useFetching(async () => {
    const response = await PostService.getCommentsById(postId)
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById()
    fetchCommentsById()
  }, []);

  return (
    <>
      <h2 className={s.header}>Post #{postId}</h2>
      {error && <p>Произошла ошибка: {error}</p>}
      {isLoading
        ? <Loader />
        : <h3>{post.id}: {post.title}</h3>
      }
      <hr className={s.line} />
      <h2 className={s.header}>Комментарии</h2>
      {commentsError && <p>Произошла ошибка: {commentsError}</p>}
      {isCommentsLoading
        ? <Loader />
        : comments.map(com => <Comment comment={com} key={com.id} />)
      }
    </>
  )
}

export default PostId;

const Comment = ({ comment }) => {
  return (
    <div className={s.commentContainer}>
      <h4>Name: {comment.name}</h4>
      <p>Email: {comment.email}</p>
      <p>{comment.body}</p>
    </div>
  )
}
