import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';


class UpdatForm extends Component {
  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form style={{ textAlign: "center" }} onSubmit={this.props.updateHandler}>
              <Form.Group className="mb-3">
                <Form.Label style={{ fontSize: "20px" }}>Book Title</Form.Label>
                <Form.Control
                  placeholder="Book Title"
                  name="title"
                  style={{ textAlign: "center", margin: "auto", width: "auto" }}
                  defaultValue={this.props.sendData.title}
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
                  defaultValue={this.props.sendData.description}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label style={{ fontSize: "20px" }}>Status</Form.Label>
                <Form.Select
                  id="status"
                  style={{ textAlign: "center", margin: "auto", width: "auto" }}
                  defaultValue={this.props.sendData.status}
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
                Update
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default UpdatForm;
