import React, {useContext}from 'react'
import MyButton from '../Components/UI/button/MyButton'
import { AuthContext } from '../context';

const Login = () => {

  const {isAuth, setIsAuth} = useContext(AuthContext);

  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth',true)
  }

  return (
    <div>
        <h1>Страница логина</h1>

        <form onSubmit={login}>
            <input type="text" placeholder='Логин' />
            <input type="text" placeholder='Пароль' />
            <MyButton>Войти</MyButton>
        </form>
    </div>
  )
}

export default Login