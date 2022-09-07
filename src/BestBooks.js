import React from "react";
import axios from "axios";
// import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import UpdatForm from "./UpdatForm";
import AddBookForm from "./AddBookForm";
import { withAuth0 } from '@auth0/auth0-react';

const URL = process.env.REACT_APP_URL;

class BestBooks extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      booksArr: [],
      showFlag: false,
      item: {}
    };
  }

  componentDidMount = () => {
    axios
      .get(`${URL}getBooks`)
      .then((result) => {
        // console.log(result.data);
        this.setState({
          booksArr: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  addBook = (e) => {
    e.preventDefault();
    const { user } = this.props.auth0;
    const obj = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.value,
      email: user.email
    };
    // console.log(obj)
    axios
      .post(`${URL}addBook`, obj)
      .then((result) => {
        this.setState({
          booksArr: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteBookHandle = (id) => {
    // console.log(id);
    axios.delete(`${URL}deleteBook/${id}`).then((result) => {
      this.setState({
        booksArr: result.data,
      });
    });
  };

  updateHandler = (e) => {
    const { user } = this.props.auth0;
    e.preventDefault();
    const obj={
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.value,
      email: user.email
    }
    // console.log(obj);
    let id =this.state.item._id
    // console.log(id);
    axios
    .put(`${URL}updateBook/${id}`,obj)
    .then(result=>{
      // console.log(result.data);
      this.setState({
        booksArr: result.data
      })
      this.handleClose()
    })
    .catch(err=>{
      console.log(err);
    })
  };


  openForm = (item) => {
    console.log(item);
    this.setState({
      showFlag: true,
      item: item
    });
  };

  handleClose = () => {
    this.setState({
      showFlag: false,
    });
  };


  render() {
    const background ={
      backgroundImage: 'url("https://assets.teenvogue.com/photos/5e6bffbbdee1770008c6d9bd/16:9/w_2560%2Cc_limit/GettyImages-577674005.jpg")',
      backgroundColor: '#cccccc',
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover'
  }

    return (
      <div style={background}>
        <AddBookForm addBook={this.addBook}/>
        <UpdatForm
          show={this.state.showFlag}
          handleClose={this.handleClose}
          updateHandler={this.updateHandler}
          sendData={this.state.item}
        />
        <Row xs={1} md={3} className="g-4">
          {this.state.booksArr.map((item) => {
            return (
              <Col>
                <Card
                  style={{ textAlign: "center", margin: "auto", width: "auto" }}
                >
                  <Card.Img
                    variant="top"
                    src="https://sbooks.net/wp-content/uploads/2021/10/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-history-218640948.jpg"
                    alt="First slide"
                  />
                  <Card.Body>
                    <Card.Title>
                      <h2>Title: {item.title}</h2>
                    </Card.Title>
                    <Card.Text>
                      <h4>Description: {item.description}</h4>
                      <h4>Status: {item.status}</h4>
                      <Button onClick={() => this.deleteBookHandle(item._id)}>
                        Delete
                      </Button>
                      <Button onClick={()=>this.openForm(item)} style={{marginLeft:'5px'}}>Update</Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
        
        {/* <Carousel>
          {this.state.booksArr.map((item) => {
            return (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://sbooks.net/wp-content/uploads/2021/10/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-history-218640948.jpg"
                  alt="First slide"
                  width="800px"
                  height="600px"
                />
                <Carousel.Caption>
                  <div>
                    <h4 style={{ color: "black" }}>{item.title}</h4>
                    <h4 style={{ color: "black" }}>{item.description}</h4>
                    <h4 style={{ color: "black" }}>{item.status}</h4>
                    <button onClick={() => this.deleteBookHandle(item._id)}>
                      Delete
                    </button>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel> */}
      </div>
    );
  }
}

export default withAuth0(BestBooks);
