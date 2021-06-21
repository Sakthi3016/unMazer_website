import db from "./firebase";
import {useState} from "react";
import "./index.css";
import React from "react";
import styled from "styled-components";
import UiComponents from './UiComponents';
import firebase from 'firebase'
function Appfinal(){

    const [input,setInput]=useState("");
    const[fname,setFname]=useState("");
    const[lname,setLname]=useState("");
    const[company,setCompany]=useState("");
    const[title,setTitle]=useState("");
    const [message,setMessage]=useState("");

    const inputHandler=(e)=>{
        setInput(e.target.value);
    }
    const Handle=(e)=>{
      setFname(e.target.value);
    }
    const Handlelast=(e)=>{
      setLname(e.target.value);
    }
   const Handlecompany=(e)=>{
     setCompany(e.target.value);
   }
   const Handletitle=(e)=>{
     setTitle(e.target.value);
   }

    const submitHandler=(e)=>{
        e.preventDefault();
        if(input){
         console.log(input);
         console.log(fname);
         console.log(lname);
         console.log(company);
         console.log(title);
         //add to firebase   
         db.collection("emails").add({
             email:input,
             fname:fname,
             lname:lname,
             company:company,
             title:title,
             
             time:firebase.firestore.FieldValue.serverTimestamp(),
         });
         //window.location.href="https://blog.unmazer.ai/";
         setInput("");
         setFname("");
         setLname("");
         setCompany("");
         setTitle("");
         
         setMessage("Submitted Successfully!!!")
         
         
         setTimeout(()=>{
             setMessage("Loading!!!");
             window.location.href="/demo";
         },3000)
        }
    };

    return(
   
        <Div className="App">
          
          <title>Report page - Unmazer</title>
      <Container>
        <UiComponents />
        <Form onSubmit={submitHandler} >
      
          <H2>Read the article</H2>
          <label>FirstName*</label>
          <Input type="text" onChange={Handle} value={fname} placeholder="Enter FirstName" required/>
          <br/>
          <label>LastName</label>
          <Input type="text" onChange={Handlelast} value={lname} placeholder="Enter LastName"/>
          <br/>
          <label>Company</label>
          <Input type="text" onChange={Handlecompany} value={company} placeholder="Enter Company"/><br/>
         <label>Title    </label>
          <Input type="text" onChange={Handletitle} value={title} placeholder="Enter JobTitle"/><br/>
          <label>Email*</label>
          <Input type="email" className="email1" onChange={inputHandler} value={input} placeholder="Enter Email" required/><br/>
          <Button type="submit">Submit</Button>
        </Form>
        {message && <Alert>{message}</Alert>}
      </Container>
    </Div>
    )
}

const Div = styled.div`
  height: 90vh;
  display: flex;
  margin-bottom:100px;
  justify-content: center;
  padding-top:50px;
  padding-bottom:50px;
  align-items: center;
  background: linear-gradient(to right, pink ,lightblue);
  overflow: hidden;
`;
const Form = styled.form`
  position: relative;
  padding: 2rem;
  min-width: 310px;
  border-radius: 5px;
  color:black;
  box-shadow: 0 0 30px #333;
  border: solid 1px rgba(255, 255, 255, 0.2);
  backgroud-clip: padding-box;
  backdrop-filter: blur(10px);
  z-index: 2;
`;
const H2 = styled.h2`
  color: black;
  padding: 1rem;
  text-align: center;
  font-size: 2rem;
`;
const Input = styled.input`
  padding: 10px;
  border-radius: 10px 0 0 10px;
  border-color:black;
  font-weight:bold;
  background-color:black;
  width: 70%;
  outline: none;
  margin-right:22px;
  margin-left:35px;
`;
const Button = styled.button`
  background-image: linear-gradient(
    to right,
    #eb3349 0%,
    #f45c43 51%,
    #eb3349 100%
  );
  width: 50%;
  padding: 10px;
  margin-right:50px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    background-position: right center;
  }
`;

const Container=styled.div`
position:relative;
width:400px;
margin-right:50px;
background-color:rose;

`;
const Alert = styled.p`
  position: relative;
  padding: 0.4rem;
  margin: 0.5rem;
  color: white;
  text-align: center;
  font-size: 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  background: rgba(0, 255, 0, 0.1);
  backdrop-filter: blur(10px);
  z-index: 3;
`;
export default Appfinal;