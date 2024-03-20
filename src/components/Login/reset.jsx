import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaEnvelope }  from "react-icons/fa6";
import { IoBag, IoBagCheck } from "react-icons/io5";
import Signup from './signup';
import ResetForm from './reset-form';
import toast from 'react-hot-toast';

export default function Reset() {
  const [show, setShow] = useState(false);

  const toggleModal = () => setShow(!show);

  return (
    <>

    <a href="#reset-modal" onClick={toggleModal} >Forgot Password?</a>

      <Modal
        show={show}
        onHide={toggleModal}
        backdrop="static"
        keyboard={false}        
      >
        <Modal.Header closeButton>
          <Modal.Title className="form-title">Reset Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ResetForm setShow={setShow}/>
        </Modal.Body>
      </Modal>
    </>
  );
}

