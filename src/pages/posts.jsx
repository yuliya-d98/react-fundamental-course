import React, { useEffect, useRef, useState } from "react";
import PostService from "../API/postService";
import PostFilter from "../components/postFilter";
import PostForm from '../components/postForm';
import PostList from '../components/postList';
import useFetching from "../hooks/useFetching";
import useObserver from "../hooks/useObserver";
import { usePosts } from "../hooks/usePosts";
import Loader from "../UI/Loader";
import MyButton from "../UI/MyButton";
import MyModal from "../UI/MyModal";
import MySelect from "../UI/MySelect";
import Pagination from "../UI/Pagination";
import { getPageCount } from "../utils/pages";
import s from './postId.module.css'

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({
    query: '',
    sort: ''
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const lastElement = useRef();

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const responce = await PostService.getAll(limit, page);
    setPosts([...posts, ...responce.data]);
    const totalCount = responce.headers['x-total-count'];
    const pagesCount = getPageCount(totalCount, limit);
    setTotalPages(pagesCount);
  })

  useObserver(lastElement, page < totalPages, isPostsLoading, () => setPage(page + 1))

  // useEffect(() => {
  //   if (isPostsLoading) return;
  //   if (observer.current) {
  //     observer.current.disconnect();
  //   }

  //   var callback = function (entries, observer) {
  //     if (entries[0].isIntersecting && page < totalPages) {
  //       setPage(page + 1)
  //     }
  //   };
  //   observer.current = new IntersectionObserver(callback);
  //   observer.current.observe(lastElement.current)
  // }, [isPostsLoading])

  useEffect(() => {
    fetchPosts()
  }, [page, limit]);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setIsModalVisible(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const options = [
    { value: 'title', name: 'по названию' },
    { value: 'body', name: 'по описанию' },
  ]

  const changePage = (p) => {
    setPage(p)
  }

  return (
    <>
      <MyButton onClick={() => setIsModalVisible(true)} style={{ margin: '20px auto', display: 'block', }}>
        Создать пост
      </MyButton>
      <MyModal visible={isModalVisible} setVisible={setIsModalVisible}>
        <PostForm createPost={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} className={s.line} />
      <PostFilter filter={filter} setFilter={setFilter} options={options} />
      <MySelect
        value={limit}
        onChange={value => setLimit(value)}
        defaultValue='Кол-во элементов на странице'
        options={[
          { value: 5, name: '5' },
          { value: 10, name: '10' },
          { value: 25, name: '25' },
          { value: -1, name: 'Показать все' },
        ]}
      />
      {postError && <h2>Произошла ошибка: {postError}</h2>}
      <PostList posts={sortedAndSearchedPosts} removePost={removePost} title='Список постов' />
      <div ref={lastElement} style={{ height: 20, background: 'yellow' }}></div>
      {isPostsLoading && <Loader />}
      <Pagination totalPages={totalPages} currentPage={page} changePage={changePage} />
    </>
  );
}

export default Posts;
