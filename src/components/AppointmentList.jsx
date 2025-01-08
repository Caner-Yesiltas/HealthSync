import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { TiDelete } from "react-icons/ti";


const AppointmentList = ({ appointments, handleDelete }) => {
  return (
    <Container className='p-2'>
      <h3 className='display-6 mb-2' style={{ color: 'rgb(166, 18, 189)' }}>
        Appointment List
      </h3>
      {appointments.length ===0 && <img src="./img/appointment.jpg" alt="" width="70%" />}
      {appointments.map(({ id, patient, consulted, doctor, day }) => (
        <div  className={consulted? "appointments consulted": "appointments"}  >
          <Row className='justify-content-between align-items-center'  >
            <Col  md={6}>  
              <h4>{patient}</h4>
              <h5>{doctor}</h5>
            </Col>
            <Col>
            <h5>Date: {new Date(day).toLocaleDateString('tr')} </h5>
            <h4>Time:{new Date(day).toLocaleTimeString('tr')}</h4>
            </Col>
            <Col className='text-end'>
            <TiDelete className='text-danger  display-1' type="button"  onClick={()=>handleDelete(id)} />
            </Col>
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default AppointmentList;
