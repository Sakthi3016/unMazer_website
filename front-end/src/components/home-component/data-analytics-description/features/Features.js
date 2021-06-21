import React from 'react'
import './features.css'
import pic1 from './feature.png'
import { setConfiguration } from 'react-grid-system';
import { Container, Row, Col } from 'react-grid-system';
import Category from '../../../solution-component/travel-component/Category';
import pic2 from './pic1.png'
import pic3 from './cin.jpg'


function Features(){

function change1(){
    
    document.getElementById("changing_image").innerHTML="<img src=" +pic2+ ">";
}
function change2(){
    document.getElementById("changing_image").innerHTML="<img src=" +pic3+ ">";
}
function change3(){
    document.getElementById("changing_image").innerHTML="<img src=" +pic2+ ">";
}

    return(
        
    <div>
        <meta charSet="utf-8"/>
       <div className="feature"> unMazer Features</div>
       <div className="cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec p  Lorem ipsum dolor sit a</div>
    
       <div class="row">
            <div class="column">
                <div id="changing_image">
                    <img className="major" src={pic1}/>
                </div>
  
            </div>

             <div class="column">
      
                <h3 className="card-title mt-2">Footwall
                <span onClick={change1} class="material-icons">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arrow_right_alt</span>
                </h3>
                <h5 className="card-title mt-2"><img src={pic1} className="img-fluid"/>
                    jdbfakfbakn kjs jkcnskjcksjd ncksn</h5>
             

                <h3 className="card-title mt-2">  Portfolio website
                    
                <span onClick={change2} class="material-icons">arrow_right_alt</span>
                </h3>
                 <h5 className="card-title mt-2"><img src={pic1} className="img-fluid"/>
                    jdbfakfbakn ncoomc moiwecmwlec kwnlclwkc knclsidkcnwmil kwncwlncw ckan hjsvbsjvsvb</h5>
        
                   
                   
                <h3 className="card-title mt-2">company profile
                 <span onClick={change3} class="material-icons">arrow_right_alt</span></h3>
                 <h5 className="card-title mt-2"><img src={pic1} className="img-fluid"/>
                    jdbfakfbakn kjwncwlncw kwndlwdnwl ckan hjsvbsjvsvb</h5>
              
            </div>
</div>
    {/*<div className="container ">
        
        <div className="card">
            <div className="row">
                <div className="col-md-4">
                    <div id="changing_image">
                        <img className="major" src={pic1}/>
                    </div>
                </div>
                <div className="col-md-2">
                    <img src={pic1} className="img-fluid"/>
                    
                    <img src={pic1} className="img-fluid"/>
                    
                    <img src={pic1} className="img-fluid"/>
                    

                </div>

                <div className="col-md-6">
                <h3 className="card-title mt-2">Foot Wall
                     
                       <span onClick={change1} class="material-icons">arrow_right_alt</span>
                
                       </h3>
                        <h5 className="card-title mt-2">jdbfakfbakn kjs jkcnskjcksjd ncksncksnc kncknc knknkndkdnknkscksc s,cnkdnk cckan hjsvbsjvsvb</h5>

                        <h3 className="card-title mt-2">  Portfolio website
                        <span onClick={change2} class="material-icons">arrow_right_alt</span>
                        </h3>
                        <h5 className="card-title mt-2">jdbfakfbakn ncoomc moiwecmwlec kwnlclwkc knclsidkcnwmil kwncwlncw ckan hjsvbsjvsvb</h5>
                   
                   
                   
                        <h3 className="card-title mt-2">company profile
                        <span onClick={change3} class="material-icons">arrow_right_alt</span></h3>
                        <h5 className="card-title mt-2">jdbfakfbakn kjwncwlncw kwndlwdnwl ckan hjsvbsjvsvb</h5>
                 </div>
                
            </div>
        </div>
    </div>*/}
    {/*<div className="container mt-5">
    
        <div className="card">
            <div className="row">
                
                <div className="col-md-6">
                    
                <img src={pic1} className="img-fluid"/>
                    
                </div>
                <div className="col-md-6">
                    <h3 className="card-title mt-2">Foot Wall
                <span class="material-icons">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arrow_right_alt</span></h3>
                    <h5 className="card-title mt-2">jdbfakfbaknckan hjsvbsjvsvb</h5>
                    
                </div>
            </div>
        </div>

        <div className="card">
            <div className="row">
                <div className="col-md-6">
                    <img src={pic1} className="img-fluid"/>
                </div>
                <div className="col-md-6">
                    <h3 className="card-title mt-2">Portfolio Website
                <span class="material-icons">arrow_right_alt</span></h3>
                    <h5 className="card-title mt-2">jdbfakfbaknckan hjsvbsjvsvb</h5>
                    
                </div>
            </div>
        </div>
        <div className="card">
            <div className="row">
                <div className="col-md-6">
                    <img src={pic1} className="img-fluid"/>
                </div>
                <div className="col-md-6">
                    <h3 className="card-title mt-2">Company Website
                <span class="material-icons">arrow_right_alt</span></h3>
                    <h5 className="card-title mt-2">jdbfakfbaknckan hjsvbsjvsvb</h5>
                    
                </div>
            </div>
        </div>
    </div>
    {/*<Container>
        
        <Col>
            <Row sm={4}>
            
                <h4 className="grid">Foot Fall</h4>
                <span class="material-icons">arrow_right_alt</span>
                <h6 className="grid2">Lorem ipsum dolor sit amet</h6>
                
            </Row>
            <Row sm={4}>
            <h4 className="grid">Portfolio Website</h4>
            <span class="material-icons">arrow_right_alt</span>
            <h6 className="grid2">Lorem ipsum dolor sit amet</h6>
            
            </Row>
            <Row sm={4}>
            <h4 className="grid">Company Profile</h4>
            <span class="material-icons">arrow_right_alt</span>
            <h6 className="grid2">Lorem ipsum dolor sit amet</h6>
            </Row>
        </Col>
    </Container>*/}
    
    </div>
    
    );
}

export default Features;