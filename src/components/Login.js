import React, {useState} from 'react'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) =>  {
    e.preventDefault()

    console.log(username)
    console.log(password)
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
