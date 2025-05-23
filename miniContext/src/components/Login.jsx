import React from 'React'
import {useState,useContext} from "React"
import UserContext from './../Context/UserContext';

const Login = () => {
    const[username,setUsername] = useState('')
    const[password,setPassword]= useState('')

    const {setUser } = useContext(UserContext)

const handleSubmit = (e)=>{
    e.preventDefault()
    setUser({username,password})

}
  return (
    <div>
      <h2>Login</h2>
      <input type='Text'
      value={username}
      onChange={(e)=>{setUsername(e.target.value)}}
       placeholder='username'/>
      <input type='Text'
      value={password}
      onChange={(e)=>{setPassword(e.target.value)}}
      placeholder='password'/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
