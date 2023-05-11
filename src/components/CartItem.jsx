import { Container,Row,Col, Button } from "react-bootstrap";
import "./CartItem.css"
import { useState } from "react";

const showItem=async()=>{
  let res=await fetch("https://react-practice-38954-default-rtdb.firebaseio.com/cartItem.json")
  let res1=await res.json();
  return res1
}

const CartItem =()=>{
 const [data,setdata]=useState();
  showItem().then((result)=>{
    setdata(result)
  })

  const deleteItem=async(k,data,setdata)=>{
    await fetch(`https://react-practice-38954-default-rtdb.firebaseio.com/cartItem/${k}.json`,{
     method:'DELETE',
     headers:{
       "Content-Type":"application/json"
     }
   })
   delete data[k]
   setdata({...data})
 }

let showItem1=[],Amount=0
console.log(data)
 for(let k in data){
  const {MedicineName,Description,Qty,Price}=data[k]
  Amount=Amount+parseInt(Qty*Price);
  showItem1.push(<li key={k} id={k}>
    <Container fluid >
    <Row xl={5}>
      <Col xl={2}>{MedicineName}</Col>
      <Col xl={2}>{Description}</Col>
      <Col xl={2}>{Price}</Col>
      <Col xl={3}>{Qty}</Col>
      <Col xl={3}><Button variant="danger" onClick={()=>deleteItem(k,data,setdata)}>Delete Item</Button></Col>
    </Row><hr />
  </Container></li>)
 }

   return(<>
   <h1>Order List</h1>
    <div className="boxx" >
      <Container fluid>
      <Row xl={5}>
        <Col xl={2}>Medicine Name</Col>
        <Col xl={2}>Description</Col>
        <Col xl={2}>Price</Col>
        <Col xl={3}>Quantity</Col>
      </Row><hr />
    </Container>
    <ol>{showItem1}</ol> 
   </div>
   <h1>Total Amount:{Amount}</h1>
   </>)
}

export default CartItem;