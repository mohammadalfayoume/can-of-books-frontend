import React, { Component } from 'react'
import LoginButton from './LoginButton';




class Welecom extends Component {
  render() {
    const background ={
        backgroundImage: 'url("https://img.freepik.com/premium-photo/front-view-pile-books-with-copy-space_23-2148255858.jpg?w=2000")',
        backgroundColor: '#cccccc',
        height: '800px',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover'
    }
    const h1 ={
        padding: '20px 50px'
    }
    
    return (
    
      <div style={background}>
        <h1 style={h1}>Welecome to your library 📘</h1>
        
        {/* <h2 style={h1}>Login from here 👉 </h2> */}
        <LoginButton/>
        
    
      </div>
      
    )
  }
}

export default Welecom