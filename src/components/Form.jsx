import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useRef,useContext } from 'react';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import { Context } from './Store/ContextProvider';

const FormDetail =()=>{
   const Cartctx=useContext(Context);
    const Name=useRef();
    const Description=useRef();
    const price=useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    var t=Math.random().toString();
    const obj={
      key:t,
      id:t,
      MedicineName:Name.current.value,
      Description:Description.current.value,
      Price:price.current.value,
      Qty:1
    }
    Cartctx.add(obj);
    Name.current.value=''
    Description.current.value=''
    price.current.value=''
  };
  
    return(<Container fluid className='bg-info'>
      <Row className="align-items-center">
        <Col  >
        <Form  className='bg-#20c997-800' onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Medicine Name</Form.Label>
            <Form.Control type="text" ref={Name} />
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Description</Form.Label>
            <Form.Control  type="text" ref={Description}/>
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Price</Form.Label>
            <Form.Control type='number' ref={price}/>
          </Form.Group>
          <Form.Group>
          <Button  height={20} size="xs" variant="primary" type="submit"> Submit
           </Button>
          </Form.Group>
        </Row>
      </Form>
</Col></Row></Container>

  )
}

export default FormDetail;