import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Form from 'react-bootstrap/Form';

function ReviewForm ({restaurant}) {

    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
      setIsOpen(true);
    };
  
    const hideModal = () => {
      setIsOpen(false);
    };
  
    return (
      <>
        <Button variant="outline-dark" onClick={showModal}>Write your own review for {restaurant.name}!</Button>
        <Modal show={isOpen} onHide={hideModal}>
          <Modal.Header>
            <Modal.Title>Write a review for {restaurant.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formReviewMunchie">
                    <Form.Control type="integer" placeholder="How many munchies? 1-5" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formReviewText">
                    <Form.Control type="text" placeholder="Leave a description of your experience..." />
                    <Form.Text className="text-muted">
                        Please be breif and constructive!
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={hideModal}>Cancel</button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default ReviewForm;