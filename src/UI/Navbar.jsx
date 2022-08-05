import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import s from '../app.module.css';
import { AuthContext } from "../context";
import MyButton from "./MyButton";

const links = [
  { title: 'О сайте', href: "/about" },
  { title: 'Посты', href: "/posts" },
  { title: 'Счетчик', href: "/counter" },
];

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault()
    setIsAuth(false)
    localStorage.removeItem('isAuth')
    navigate('/login')
  }

  return (
    <nav className={s.navbar}>
      {links.map(link =>
        <NavLink to={link.href} className={({ isActive }) => isActive ? [s.navbar__link, s.active].join(' ') : s.navbar__link} key={link.href}>
          {link.title}
        </NavLink>
      )}
      {isAuth && <MyButton onClick={logout}>Выйти</MyButton>}
    </nav>
  )
}

export default Navbar;