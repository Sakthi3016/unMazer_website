import React from 'react'
import './trends.css'
import pic1 from './consumer.png'
import pic2 from './sss.png'
import { Container, Row, Col } from 'react-grid-system';
function Trends(){
    return(
        <Container className="trend">
            <h2 className="trends">Identify trends and consumer preference/ Value 1</h2>
            <h5 className="trendkey">Get key insights on what is in consumer search trends, location maps and expected response for your business decisions by demography and location</h5>
  <Row>
    <Col  md sm={3}>
    <img className="smiley" src={pic1} alt="hi"/>
                    <h2>Feature 1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec p
Lorem ipsum dolor sit amet, con</p>
                
    </Col>
    <Col md sm={3}>
    <img className="smiley" src={pic1} alt="hi"/>
                    <h2>Feature 1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec p
Lorem ipsum dolor sit amet, con</p>
                
    </Col>
    <Col md sm={3}>
        <img className="imaged" src={pic1}/>
    </Col>
    </Row>
    <Row>
    <Col md sm={3}>
    <img className="smiley" src={pic1} alt="hi"/>
                    <h2>Feature 1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec p
Lorem ipsum dolor sit amet, con</p>
                
    </Col>
    <Col md sm={3}>
    <img className="smiley" src={pic1} alt="hi"/>
                    <h2>Feature 1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec p
Lorem ipsum dolor sit amet, con</p>
                
    </Col>
    </Row>
    
</Container>
        /*<div>
            <div class="first">
                <div class="second">
                <img className="smiley" src={pic1} alt="hi"/>
                    <h2>Feature 1</h2>
                    <p>Some text..</p>
                </div>
                <div class="second">
                    
                <img className="smiley" src={pic1} alt="hi"/>
                     <h2>Feature 2</h2>
                    <p>Some text..</p>
                    <img className="hello" src={pic2}/>
                </div>
            </div>
            
            <div class="first">
                <div class="second">
                    
                <img className="smiley" src={pic1} alt="hi"/>
                    <h2>Feature 3</h2>
                    <p>Some text..</p>
                </div>
                <div class="second">
                    
                <img className="smiley" src={pic1} alt="hi"/>
                     <h2>Feature 4</h2>
                    <p>Some text..</p>
                </div>
            </div>
        </div>*/
    )
}

export default Trends;
