import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function AddModal({handleClose,show, drName, handleAdd}) {
    const [name, setName] = useState("")
    const [date, setDate] = useState("")

    const handleSubmit=(e)=> {
        e.preventDefault()
        const newAppointment={
            id:new Date().getTime(),
            patient:name,
            day:date,
            consulted:false,
            doctor:drName
        }
        handleAdd(newAppointment);
        handleClose();
    }
 
  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment for {drName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='name'>
              <Form.Label>Patient Name:</Form.Label>
              <Form.Control type='text' placeholder='Enter name'  onChange={(e)=>setName(e.target.value)}   />
            </Form.Group>
            <Form.Group className='mb-3' controlId='date'>
              <Form.Label>Date:</Form.Label>
              <Form.Control type='datetime-local' placeholder='Date' onChange={(e)=>setDate(e.target.value)}  />
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
