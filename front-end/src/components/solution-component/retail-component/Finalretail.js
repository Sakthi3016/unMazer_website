import React from "react"
import './final.css'
import { Container, Row, Col } from 'react-grid-system';

import pic1 from './smallbox.png'

function Finalretail(){
    return(
      <Container className="contain">
        <h3 className="retail">problem in one line</h3>
        <p className="retails">We help businesses thrive using alternative data to provide actionable insights. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec p
Lorem ipsum dolor sit</p>
  <Row className="contains">
    <Col sm={4}>
      <h2><img className="smile" src={pic1}></img>Column 1</h2>
    <p>Some text..</p>
  
    </Col>
    <Col sm={4}>
      <h2><img className="smile" src={pic1}></img>Column 1</h2>
    <p>Some text..</p>
  
    </Col>
    <Col sm={4}>
      <h2><img className="smile" src={pic1}></img>Column 1</h2>
    <p>Some text..</p>
  
    </Col>
  </Row>
</Container>
      /*
<div>
    
<div className="header">
                    Problem in one line or at max 2 line
                    
            </div>
            
            <h4 className="subheading">We help businesses thrive using alternative data to provide actionable insights. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec p
        Lorem ipsum dolor sit amet</h4>
<div class="row-first">
  <div class="like">
     
    <h2><img className="smile" src={pic1}></img>Column 1</h2>
    <p>Some text..</p>
  </div>
  <div class="like">
      
    <h2><img className="smile" src={pic1}></img>Column 1</h2>
    <p>Some text..</p>
  </div>
  <div class="like">
      
    <h2><img className="smile" src={pic1}></img>Column 1</h2>
    <p>Some text..</p>
  </div>
</div>
      </div>*/

    )
}
export default Finalretail;