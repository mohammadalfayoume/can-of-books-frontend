import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';

class Profile extends Component {
  render() {
    // `this.props.auth0` has all the same properties as the `useAuth0` hook
    const { user } = this.props.auth0;
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
    // {console.log(user)}
    return(
     <div style={background}>
       <h1 style={h1}>Welecome to your profile 👦</h1>
       <h2 style={h1}>This is {user.name}</h2>
       <h2 style={h1}>Email: {user.email}</h2>
       <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3-A5HyX-dT6wS33Fwl6GZsDpx3Q_Qq8JTng&usqp=CAU' style={{padding:'50px'}} alt='pic'></img>
      </div>
    )
  }
}

export default withAuth0(Profile);