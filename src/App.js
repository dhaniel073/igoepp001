import logo from './logo.svg';
import './App.css';
import Login from './pages/Login.jsx';
import Nav from './components/Nav.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  // const state = []
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [user, SetUser] = useState('')
  const [loggedIn, userLoggedIn] = useState(localStorage.getItem('token') ? true : false)
  
  useEffect(() => {
    (
      async () => {
        const accToken = localStorage.getItem('token')
        const config = {
          headers: {
              Authorization: 'Bearer ' + accToken
          }
      }
        // const response = await 
        const response =  axios.get('user', config )         
       .then(res => {

          // this.setUser(res.data)
          console.log(res.data)
          // this.state(res.data)
          setFirstName(res.data.first_name)
          setLastName(res.data.last_name)
          setEmail(res.data.email)
          SetUser(res.data.user_type)

        }, err => {
            console.log(err)
        }
        )
       
        // const content = await response.data
        // console.log(JSON.stringify(content))
        
      }
    )();

  }, [])

  // setUser = user => {
  //   this.setState({
  //     user: user
  //   }) ;
  // }

  
  return (
    <div className="App">
    <BrowserRouter>
    <Nav first_name={first_name} last_name={last_name} email={email} user={user}/>
      <Routes>
      <Route path='/' element={<Home first_name={first_name} last_name={last_name} email={email} user={user}/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
