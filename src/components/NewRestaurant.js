import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Form from 'react-bootstrap/Form';

function NewRestaurant ({handleNewRestaurant}) {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        image_url: "",
    })

    function handleChange(e) {
        const name = e.target.name
        let value = e.target.value

        setFormData({...formData, [name]: value})
    }

    function handleSubmit (e) {
        e.preventDefault()
        fetch("http://localhost:9292/restaurants", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json" 
                },
                body: JSON.stringify(formData)
            })
            .then(res => res.json())
            .then(restaurant => handleNewRestaurant(restaurant))
            alert("New Restaurant Successfully Added!")
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
        <Button variant="outline-dark" onClick={showModal}>Add Your Business to Munchies</Button>
        <Modal show={isOpen} onHide={hideModal}>
          <Modal.Header>
            <Modal.Title>Don't see your business listed here?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formRestaurantName">
                    <Form.Control onChange={handleChange} name="name" type="text" placeholder="Restaurant name..." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formRestaurantDescription">
                    <Form.Control onChange={handleChange} name="description" type="text" placeholder="A brief description..." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formRestaurantImage">
                    <Form.Control onChange={handleChange} name="image_url" type="text" placeholder="Add a photo for best results..." />
                    <Form.Text className="text-muted">
                        Please be sure to upload a LINK to an image
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

export default NewRestaurant;