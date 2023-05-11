import { useContext } from "react";
import { Context } from "./Store/ContextProvider";
import { Container,Row,Col, Button } from "react-bootstrap";
import "./ShowItem.css";
async function postItem(item){
   await fetch("https://react-practice-38954-default-rtdb.firebaseio.com/cartItem.json",{
      method:'POST',
      headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(item),
   })
}
const ShowItem=()=>{
  const Cartctx=useContext(Context)
     const showItem=Cartctx.items.map((item)=>{
        return(  <li key={item.key} id={item.key}>
          <Container fluid >
          <Row xl={5}>
            <Col xl={2}>{item.MedicineName}</Col>
            <Col xl={2}>{item.Description}</Col>
            <Col xl={2}>{item.Price}</Col>
            <Col xl={3}>{item.Qty}</Col>
            <Col xl={3}><Button onClick={()=>postItem(item)}>Add to Cart</Button></Col>
          </Row><hr />
        </Container></li>)
     })
    return(<div className="box" >
      <Container fluid>
      <Row xl={5}>
        <Col xl={2}>Medicine Name</Col>
        <Col xl={2}>Description</Col>
        <Col xl={2}>Price</Col>
        <Col xl={3}>Quantity</Col>
      </Row>
    </Container><hr />
         <ol>{showItem}</ol>
    </div>)
}

export default ShowItem;