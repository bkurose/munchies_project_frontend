import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Form from 'react-bootstrap/Form';

function Register ({handleNewUser}) {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
    })

    function handleChange(e) {
        const name = e.target.name
        let value = e.target.value

        setFormData({...formData, [name]: value})
    }

    function handleSubmit (e) {
        e.preventDefault()
        fetch("http://localhost:9292/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json" 
                },
                body: JSON.stringify(formData)
            })
            .then(res => res.json())
            .then(user => {
                handleNewUser(user)
                alert(`New User Successfully Added! Your User ID is ${user.id}`)
            })
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
        <Button variant="outline-dark" onClick={showModal}>Sign Up</Button>
        <Modal show={isOpen} onHide={hideModal}>
          <Modal.Header>
            <Modal.Title>Come join us here at Munchies and start writing reviews!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formRegisterFirst">
                    <Form.Control onChange={handleChange} name="first_name" type="text" placeholder="First name..." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formRegisterLast">
                    <Form.Control onChange={handleChange} name="last_name" type="text" placeholder="Last name..." />
                    <Form.Text className="text-muted">
                        It is recommended reviewers not use their real names
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

export default Register;