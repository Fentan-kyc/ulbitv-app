import React from 'react'
import MyButton from '../Components/UI/button/MyButton'

const Login = () => {
  return (
    <div>
        <h1>Страница логина</h1>

        <form>
            <input type="text" placeholder='Логин' />
            <input type="text" placeholder='Пароль' />
            <MyButton>Войти</MyButton>
        </form>
    </div>
  )
}

export default Login