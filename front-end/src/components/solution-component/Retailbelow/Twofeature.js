import React from 'react'
import pic2 from './sss.png'
import './trends.css'
import { Container, Row, Col } from 'react-grid-system';
function Twofeature(){
    return(
        <Container>
            <Row className="feat">
                <Col sm={4}>
                <img src={pic2}/>
                
                </Col>
                <Col sm={4}>
                    
                <img src={pic2} className="fim"/>
                    <h3 >Feature1</h3>
                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </Col>
    
                <Col sm={4}>
                    
                <img src={pic2} className="fim"/>
                    <h3 className="head">Feature1</h3>
                   eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
             
                </Col>
  </Row>
</Container>

        /*<div class="container">
            <h1 className="foot">Identify trends</h1>
        <div class="row">
            <div class="col-md-3">
                <img src={pic2} className="fea"/>
                
            </div>
            <div class="col-md-1">
                <img src={pic2} className="image-fluid"/>
                
                <img src={pic2} className="image-fluid"/>
                
            </div>
           <div class="col">
            <div class="row-md-4 mine">
                
                <h3 className="head">Feature1</h3>
                   eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
             </div>
             
            <div class="row-md-4 mine1">
            <h3>Feature2</h3>
                tota inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
             </div>
             </div>
            </div>
             </div>
        */
        
        
    
    
    );
}

export default Twofeature;