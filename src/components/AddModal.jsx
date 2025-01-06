import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function AddModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment for drname</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3' controlId='name'>
              <Form.Label>Patient Name:</Form.Label>
              <Form.Control type='text' placeholder='Enter name' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='date'>
              <Form.Label>Date:</Form.Label>
              <Form.Control type='datetime-local' placeholder='Date' />
            </Form.Group>
            <div className='text-center'>
              <Button variant='success' type="submit" className='me-2'  >
               Save
              </Button>
              <Button variant='danger' type="button" onClick={handleClose}>
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddModal;
