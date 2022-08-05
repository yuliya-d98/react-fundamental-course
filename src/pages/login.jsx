import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";
import MyButton from "../UI/MyButton";
import MyInput from "../UI/MyInput";

const Login = () => {
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem('isAuth', true);
    navigate("/posts");
  }

  return (
    <>
      <h2>Войти в аккаунт</h2>
      <form onSubmit={login}>
        <MyInput type='text' placeholder="Введите логин" />
        <MyInput type='password' placeholder="Введите пароль" />
        <MyButton>Войти</MyButton>
      </form>
    </>
  )
}

export default Login;