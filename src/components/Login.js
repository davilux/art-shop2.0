import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/reducers/usersSlice'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordHidden, setPasswordHidden] = useState(true)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (e) =>  {
    e.preventDefault()

    //TODO: Improve UI for front-end validation
    if(!username) return alert('Username required.')
    if(!password) return alert('Please enter a password.')
    if(password.length < 8) return alert('Password must be at least 8 characters.')

    dispatch(loginUser({
      username: username.toLowerCase(),
      password
    }))
    //TODO: Navigate to different page once user logs in
    //navigate('/shop')
  }

  const toggleHiddenPassword = (e) => {
    e.preventDefault()
    setPasswordHidden(!passwordHidden)
  }

  return (
    <>
      <h1>
        Login
      </h1>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <label>
          Username:
          <input type="text" name="username" onChange={(event)=> setUsername(event.target.value)}/>
        </label>
        <label>
          {/* TODO: implement hide/show password option */}
          Password:
          <input type={passwordHidden ? 'password' : 'text'} password="password" onChange={(event)=> setPassword(event.target.value)}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>


        {/* TODO: replace the following button with an icon */}
        <button onClick={toggleHiddenPassword}>show/hide password</button>
    </>
  )
}

export default Login
