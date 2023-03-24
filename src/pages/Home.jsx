import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = (props) => {
  
  return (
    <div>
      <br/>
      <h1>UserName: <span>{props.first_name} {props.last_name}</span></h1>
      <h1>Email: <span>{props.email}</span></h1>
  <h1>User_Type: <span>{props.user}</span></h1>

  {props.first_name ? 'Hi ' + props.first_name : "You Are Not Logged In"}
    </div>
  )
}

export default Home