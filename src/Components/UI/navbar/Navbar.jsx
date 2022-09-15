import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { AuthContext } from '../../../context';
import MyButton from '../button/MyButton';

const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  return (
    <div className="navbar">
      <button onClick={() => setIsAuth(false)}>Выйти</button>
      <div className="navbar__links">
        <Link to="/posts">Посты</Link>
        <Link to="/about">О сайте</Link>
      </div>
    </div>
  )
}

export default Navbar