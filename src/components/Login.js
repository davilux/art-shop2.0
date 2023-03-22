import React, {useState} from 'react'

//TODO: move request to redux
import axios from 'axios'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) =>  {
    e.preventDefault()

    console.log(username)
    console.log(password)

    const loginSuccess = await axios.post('/api/auth/login', {
      username,
      password
    })

    console.log('\n\n\nloginSuccess:',loginSuccess)
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
