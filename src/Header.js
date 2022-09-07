import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import LogoutButton from './LogoutButton';
import { withAuth0 } from '@auth0/auth0-react';


class Header extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Navbar.Brand style={{padding:'10px 20px'}}>My Favorite Books</Navbar.Brand>
        <div style={{display:'flex',flexDirection:'space-between', gap:'15px'}}>
        
        {isAuthenticated && <NavItem style={{color:'white'}}><Link to="/" className="nav-link" style={{color:'blue'}}>Home</Link></NavItem>}
        {isAuthenticated && <NavItem style={{color:'white'}}><Link to="/profile" className="nav-link" style={{color:'blue'}}>Profile</Link></NavItem>}
        
        
        <NavItem><LogoutButton /></NavItem>
        </div>
        {/* PLACEHOLDER: render a navigation link to the about page */}
      </Navbar>
    )
  }
}

export default withAuth0(Header);
