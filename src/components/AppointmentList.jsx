import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

const AppointmentList = ({ appointments }) => {
  return (
    <Container className='p-2'>
      <h3 className='display-6 mb-2' style={{ color: 'rgb(166, 18, 189)' }}>
        Appointment List
      </h3>
      {appointments.map(({ id, patient, consulted, doctor, day }) => (
        <div>
          <Row>
            <Col>
              <h4>{patient}</h4>
              <h5>{doctor}</h5>
            </Col>
            <h5>Date: {new Date(day).toLocaleDateString('tr')} </h5>
            <h4>Time:{new Date(day).toLocaleTimeString('tr')}</h4>
            <Col></Col>
            <Col></Col>
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default AppointmentList;
