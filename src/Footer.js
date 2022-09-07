import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand style={{padding:'10px 20px'}}>Created by Mohammad Alfayoume</Navbar.Brand>
      </Navbar>
    )
  }
}

export default Footer;
