import { Navigate, Route, Routes } from "react-router-dom";
import Error from "../pages/error";
import Posts from "../pages/posts";
import About from '../pages/about';
import Counter from '../components/counter';
import PostId from "../pages/postId";
import Login from "../pages/login";
import { useContext } from "react";
import { AuthContext } from "../context";

const AppRouter = () => {
  const { isAuth } = useContext(AuthContext)

  const privatePage = (Component) => {
    if (!isAuth) {
      return <Navigate to="/login" replace />
    }
    return <Component />
  };

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/posts" replace />} />
      <Route path="/about" element={privatePage(About)} />
      <Route path="/posts">
        <Route index element={privatePage(Posts)} />
        <Route path=":postId" element={privatePage(PostId)} />
      </Route>
      <Route path="/counter" element={privatePage(Counter)} />
      <Route path="/login" element={<Login />} />
      <Route path="/error" element={<Error />} />
      <Route path="*" element={<Navigate to="/error" replace />} />
    </Routes>
  )
}

export default AppRouter;
