import React , {useState , useContext} from 'react'
import UserContext from '../context/UserContext'


function Login() {
    const [username , setusername] = useState('')
    const [password , setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const HandleSubmit = (e)=> {
        e.preventDefault()
        setUser({username , password})
    }
  return (
    <div>
        <h2>Login</h2>

        <input type="text" 
        value ={username}
        placeholder='username'
        onChange={(e) => setusername(e.target.value)}
         />

        <input type="text"
        value ={password}
        placeholder='password' 
        onChange={(e) => setPassword(e.target.value)}/>

        <button onClick={HandleSubmit}>Submit</button>
    </div>
  )
}

export default Login