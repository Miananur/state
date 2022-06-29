import React from 'react';
import {useState} from 'react'

const Login = () => {
    // HANYA PAKAI 1 USESTATE
    const [inputLogin, setInputLogin] = useState({
        username:"",
        email:'',
        password:""
    })

    const handleChanngeUsername =(e) => {
        setInputLogin({
            ...inputLogin,
            [e.target.name] :e.target.value
        })
    }

    const handleChanngePassword =(e) => {
        setInputLogin({
            ...inputLogin,
            [e.target.name] :e.target.value
        })
    }
    const handleLogin =(e) => {
        //preventDefault gunanya buat mematikan fungsi default yang ada pada html, secara default <form> itu akan merefresh halaman ketika di klik button
        e.preventDefault()
        console.log(inputLogin)
    }

  return (
    <div><form>

    {/* onChange buat nyimpen data inputan berbeda beda  */}

    <input 
    type="email"
    name="email"
    placeholder="masukan email"
    value={inputLogin.email} 
    onChange={handleChanngeUsername}/>

    <input 
    type="password" 
    name="password"
    placeholder="masukan password" 
    value={inputLogin.password} 
    onChange={handleChanngePassword}/>

    <button onClick={handleLogin}>Log in</button>
</form></div>
  )
}

export default Login;