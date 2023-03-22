import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/reducers/authSlice'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = async (e) =>  {
    e.preventDefault()

    //TODO: Improve UI for front-end validation
    if(!username) return alert('Username required.')
    if(!password) return alert('Please enter a password.')

    dispatch(loginUser({username, password}))

    //TODO: Navigate to different page once user logs in
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
          <input type="text" password="password" onChange={(event)=> setPassword(event.target.value)}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    </>
  )
}

export default Login
