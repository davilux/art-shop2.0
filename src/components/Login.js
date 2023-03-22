import React, {useState} from 'react'

//TODO: move request to redux
import axios from 'axios'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) =>  {
    e.preventDefault()

    //TODO: Improve UI for front-end validation
    if(!username) return alert('Username required.')
    if(!password) return alert('Please enter a password.')

        //TODO: Move this to a redux thunk
    const loginResponse = await axios.post('/api/auth/login', {
      username,
      password
    }).catch(error => {
      console.error(error);
    })

    if(loginResponse && loginResponse.status === 200) {
      window.localStorage.setItem('accessToken', loginResponse.data.accessToken)
      window.localStorage.setItem('refreshToken', loginResponse.data.refreshToken)
    }
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
