import React, { Component } from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class AddBookForm extends Component {
  render() {
    return (
      <div>
        <Form onSubmit={this.props.addBook} style={{ textAlign: "center" }}>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontSize: "20px" }}>Book Title</Form.Label>
            <Form.Control
              placeholder="Book Title"
              name="title"
              style={{ textAlign: "center", margin: "auto", width: "auto" }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontSize: "20px" }}>
              Book Description
            </Form.Label>
            <Form.Control
              placeholder="Book Description"
              name="description"
              style={{ textAlign: "center", margin: "auto", width: "auto" }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontSize: "20px" }}>Status</Form.Label>
            <Form.Select
              id="status"
              style={{ textAlign: "center", margin: "auto", width: "auto" }}
            >
              <option value="avaliable">Avaliable</option>
              <option value="not avaliable">Not Avaliable</option>
              <option value="favorate">Favorate</option>
            </Form.Select>
          </Form.Group>
          <Button
            type="submit"
            style={{ fontSize: "20px", marginBottom: "30px" }}
          >
            Add new book
          </Button>
        </Form>
      </div>
    )
  }
}

export default AddBookForm