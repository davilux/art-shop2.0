import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/reducers/usersSlice'
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (e) =>  {
    e.preventDefault()

    //TODO: Improve UI for front-end validation
    if(!username) return alert('Username required.')
    if(!password) return alert('Please enter a password.')


    //TODO: dispatch registerUser
    //dispatch(loginUser({username, password}))
  }

  return (
    <>
      <h1>
        Register
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
        <label>
          First name:
          <input type="text" name="first-name" onChange={(event)=> setFirstName(event.target.value)}/>
        </label>
        <label>
          Last name:
          <input type="text" name="last-name" onChange={(event)=> setLastName(event.target.value)}/>
        </label>
        <label>
          Email:
          <input type="text" name="email" onChange={(event)=> setEmail(event.target.value)}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    </>
  )
}

export default Register
