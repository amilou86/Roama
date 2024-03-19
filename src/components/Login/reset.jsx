import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaEnvelope }  from "react-icons/fa6";
import { IoBag, IoBagCheck } from "react-icons/io5";

export default function Reset() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

    <a href="#reset-modal" onClick={handleShow} >Forgot Password?</a>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        
      >
        <Modal.Header closeButton>
          <Modal.Title className="form-title">Reset Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form >
            <InputGroup className="mb-3" controlId="email">
            <InputGroup.Text className='form-icon'><FaEnvelope/></InputGroup.Text>
              <Form.Control
                className='landing-forms'
                type="email"
                placeholder="Email*"
                autoFocus
              />
            </InputGroup>
            <InputGroup className="mb-3" controlId="password1">
            <InputGroup.Text className='form-icon'><IoBag/></InputGroup.Text>
              <Form.Control
                className='landing-forms'
                type="password"
                placeholder="New Password*"
              />
            </InputGroup>
            <InputGroup className="mb-3" controlId="password2">
            <InputGroup.Text className='form-icon'><IoBagCheck/></InputGroup.Text>
              <Form.Control
                className='landing-forms'
                type="password"
                placeholder="Confirm Password*"
              />
            </InputGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="signBtn rounded border-0 text-dark mx-auto w-75 my-3">Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

