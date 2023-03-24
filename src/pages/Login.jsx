import React, { useState } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'


const Login = () => {
  const[username, setUserName] = useState('')
  const[password, setPassword] = useState('')
  const[application, setApplication] = useState('')
  const[redirect, setRedirect] = useState(false)

  const handleSubmit =async (e) => {
    e.preventDefault()
    const response = await axios.post('https://phixotech.com/igoepp/public/api/igoeppauth/logincustomer',{
      method: 'POST',
      header:{
        'content-Type': 'application/json'
      },
          username,
          password,
          application
    
    })
      setRedirect(true)
      console.log(response)
      localStorage.setItem('token', response.data.access_token)
      
  }
  if(redirect){
  return <Navigate to={"/"}/>
}

  return (
    <div>
    
    <main className="form-signin w-100 m-auto">
      <form onSubmit={handleSubmit}>
        <img className="mb-4" src="" alt="" width="72" height="57"/>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
    
        <div className="form-floating">
          <input type="email" 
          value={username}
          onChange={e=>setUserName(e.target.value)}
          className="form-control" placeholder="UserName"/>
          <label>UserName </label>
        </div>
        <div className="form-floating">
          <input type="password" 
          value={password}
          onChange={e=>setPassword(e.target.value)}
          className="form-control"  placeholder="Password"/>
          <label>Password</label>
        </div>
        <div className="form-floating">
          <input type="text" 
          value={application}
          onChange={e=>setApplication(e.target.value)}
          className="form-control"  placeholder="Application"/>
          <label>Application</label>
        </div>
    
       {/* <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"/> Remember me
          </label>
  </div>*/}

        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
      </form>
    </main>
    
    
        
    </div>
  )
}

export default Login