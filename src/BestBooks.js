import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booksArr: []
    }
  }

  componentDidMount = () => {
    axios
    .get(`http://localhost:3001/getBooks`)
    .then(result =>{
      console.log(result.data);
      this.setState({
        booksArr : result.data
      })
    })
    .catch(err=>{
      console.log(err);
    })
    
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>

        {/* {this.state.books.length ? (
          <p>Book Carousel coming soon</p>
        ) : (
          <h3>No Books Found :(</h3>
        )} */}
        <Carousel>
        {this.state.booksArr.map(item =>{
          return(
                
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
          <h4 style={{color:"black"}}>{item.title}</h4>
          <h4 style={{color:"black"}}>{item.description}</h4>
          <h4 style={{color:"black"}}>{item.status}</h4>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      
    
          )
        })}
        </Carousel>
        
      </>
    )
  }
}

export default BestBooks;
