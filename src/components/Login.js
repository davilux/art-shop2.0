import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/reducers/usersSlice'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  //TODO: Check if user is already logged in as to conditionally render.
  // const loggedInUser = useSelector((state) => state.users.loggedInUser)

  const handleSubmit = async (e) =>  {
    e.preventDefault()

    //TODO: Improve UI for front-end validation
    if(!username) return alert('Username required.')
    if(!password) return alert('Please enter a password.')

    dispatch(loginUser({username, password}))

    //TODO: Navigate to different page once user logs in
    //navigate('/shop')
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
