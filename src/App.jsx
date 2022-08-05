import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import s from './app.module.css';
import { AuthContext } from "./context";
import AppRouter from "./UI/AppRouter";
import Navbar from "./UI/Navbar";

function App() {
  const initialIsAuth = Boolean(localStorage.getItem('isAuth'));
  const [isAuth, setIsAuth] = useState(initialIsAuth);

  return (
    <div className={s.container}>
      <AuthContext.Provider value={{ isAuth, setIsAuth }}>
        <BrowserRouter>
          <Navbar />
          <AppRouter />
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  )
}

export default App;
