import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PostItem from './postItem';

const PostList = ({ posts, title, removePost }) => {

  if (!posts.length) {
    return <h2 style={{ textAlign: 'center' }}>Посты не найдены!</h2>
  }

  return <>
    <h1 style={{ textAlign: 'center' }}>{title}</h1>
    <TransitionGroup>
      {posts.map((post, index) =>
        <CSSTransition key={post.id} timeout={500} classNames="post">
          <PostItem post={post} removePost={removePost} />
        </CSSTransition>
      )}
    </TransitionGroup>
  </>
}

export default PostList;