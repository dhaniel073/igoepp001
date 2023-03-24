import axios from 'axios'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Register = () => {
  const[first_name, setFirstName] = useState('')
  const[last_name, setLastName] = useState('')
  const[other_name, setOtherName] = useState('')
  const[email, setEmail] = useState('')
  const[phone, setPhone] = useState('')
  const[sex, setSex] = useState('')
  const[password, setPassword] = useState('')
  const[redirect, setRedirect] = useState(false)

  const navigate = useNavigate()

  const handleSubmit =async (e) => {
    e.preventDefault()
    const response = await axios.post('https://phixotech.com/igoepp/public/api/customer/store',{
      method: 'POST',
      header:{
        'content-Type': 'application/json'
      },
          first_name,
          last_name,
          other_name,
          email,
          sex,
          phone,
          password
    
    })
      setRedirect(true)
      console.log(response)
  }
  if(redirect){
  return <Navigate to={"/login"}/>
}

  return (
    <div>
    <main className="form-signin w-100 m-auto">
    <form onSubmit={handleSubmit}>
      <img className="mb-4" src="" alt="" width="72" height="57"/>
      <h1 className="h3 mb-3 fw-normal">Register</h1>
  
      <div className="form-floating">
        <input type="text" 
        onChange={e=>setFirstName(e.target.value)}
        required className="form-control" value={first_name} placeholder="First Name"/>
        <label>First Name</label>
      </div>
      <div className="form-floating">
        <input type="text" required 
        onChange={e=>setLastName(e.target.value)}
        className="form-control" value={last_name} placeholder="Last Name"/>
        <label>Last Name</label>
      </div>
      <div className="form-floating">
        <input type="text" required 
        onChange={e=>setOtherName(e.target.value)}
        className="form-control" value={other_name} placeholder="Other Name"/>
        <label>Other Name</label>
      </div>
      <div className="form-floating">
        <input type="email" required 
        onChange={e=>setEmail(e.target.value)}
        className="form-control" value={email} placeholder="Email"/>
        <label>Email address</label>
      </div>
      <div className="form-floating">
        <input type="number" required 
        onChange={e=>setPhone(e.target.value)}
        className="form-control" value={phone} placeholder="Phone"/>
        <label>Phone</label>
      </div>
      
      <div className="form-floating">
        <select className='form-control' value={sex}
        onChange={e=>setSex(e.target.value)}
        required>
        <option>Select Your sex</option>
          <option>M</option>
          <option>F</option>
        </select>
      </div>
    
      <div className="form-floating">
        <input type="password" required value={password}
        onChange={e=>setPassword(e.target.value)}
        className="form-control" placeholder="Password"/>
        <label>Password</label>
      </div>
  
      <button className="w-100 btn btn-lg btn-primary" type="submit">Sign Up</button>
      <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
    </form>
  </main>
    </div>
  )
}

export default Register