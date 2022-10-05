import React, {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Form from 'react-bootstrap/Form';

function ReviewForm ({restaurant}) {
    const [formData, setFormData] = useState({
        munchie_rating: "",
        review_text: "",
        restaurant_id: "",
        user_id: ""
    })

    function handleChange(e) {
        const name = e.target.name
        let value = e.target.value

        setFormData({...formData, restaurant_id: restaurant.id, [name]: value})
    }

    function handleSubmit (e) {
        e.preventDefault()
        fetch("http://localhost:9292/reviews", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json" 
                },
                body: JSON.stringify(formData)
            })
            .then(res => res.json())
            .then(review => alert("New review Successfully Added!"))
            hideModal()
    }

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
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formReviewMunchie">
                    <Form.Control onChange={handleChange} name="munchie_rating" type="integer" placeholder="How many munchies? 1-5" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formReviewUser">
                    <Form.Control onChange={handleChange} name="user_id" type="integer" placeholder="User ID number?" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formReviewText">
                    <Form.Control  onChange={handleChange} name="review_text" type="text" placeholder="Leave a description of your experience..." />
                    <Form.Text className="text-muted">
                        Please be brief and constructive!
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