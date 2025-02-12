import Container from 'react-bootstrap/Container';
import { doctorData } from '../helper/data';
import { Col, Row } from 'react-bootstrap';
import AddModal from './AddModal';
import { useState } from 'react';

const Doctors = ({handleAdd}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [drName, setDrName] = useState('');
  const handleShow = (name) => {
    setShow(true);
    setDrName(name);
  };

  return (
    <Container className='p-2'>
      <h3 className='display-6 mb-3' style={{ color: 'rgb(166, 18, 189)' }}>
        Our Doctors
      </h3>
      <Row>
        {doctorData.map((doctor) => {
          const { id, img, dep, name } = doctor;
          return (
            <Col xs={6} md={4} lg={3} key={id}>
              <img
                src={img}
                alt={name}
                className='doctor-img img-thumbnail'
                onClick={() => handleShow(name)}
                // onClick={() => {
                //   setShow(true);
                //   setDrName(name);
                // }}
              />
              <h5>{name}</h5>
              <h6>{dep}</h6>
            </Col>
          );
        })}
      </Row>
      <AddModal handleClose={handleClose} show={show} drName={drName} handleAdd={handleAdd} />
    </Container>
  );
};

export default Doctors;
