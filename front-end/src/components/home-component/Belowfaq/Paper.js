import React from 'react'
import Card from './Card'
import './paper.css'
import { Container, Row, Col } from 'react-grid-system';
import pic1 from './pic1.png'
function Paper(){
    return(
        <div className="ball">
    <Container>
  <Row>
    <Col sm={4}>
        <div className="yel">
        <img src={pic1}/>
        <h4>dbvjdvbjv</h4>
        <h6>jscnjzdknck</h6></div>
    </Col>
    <Col sm={4}>
        
    <div className="yel">
    <img src={pic1}/>
    
    <h4>dbvjdvbjv</h4>
        <h6>jscnjzdknck</h6></div>
    </Col>
    <Col sm={4}>
        
    <div className="yel">
    <img src={pic1}/>
    <h4>dbvjdvbjv</h4>
        <h6>jscnjzdknck</h6></div>
    </Col>
  </Row>
  <a href="">Article Library</a>
</Container>
</div>
            
           /* <Card 

            title='jvdkkd'
            imageurl={pic1}
            body='ksdnvsknv'/>

        
        <Card 
        title='jvdkkd'
        imageurl={pic1}
        body='ksdnvsknv'/>

<Card 
        title='jvdkkd'
        imageurl={pic1}
            body='ksdnvsknv'/>
           <br/><br/>*/

    
    );
}

export default Paper;