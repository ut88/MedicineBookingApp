import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
const Header=()=>{

    return(<div className="bg-secondary">
      <Container fluid>
      <Row >
        <Col md={8}><h1 text-align="end">Medicine Booking</h1></Col>
        <Col md={2}><Button variant="outline-dark"><NavLink to="/Home"><h1>Home</h1></NavLink></Button></Col>
        <Col md={2}><Button variant="outline-dark"><NavLink to="/CartItem"><h1>CartItem</h1></NavLink></Button></Col>
      </Row>
      </Container>
    </div>);
}

export default Header;

