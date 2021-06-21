import React,{Component} from 'react';
import CardUI from './CardUI';
import logo from './logo.png'
import pic1 from './pic1.png'
class Finalcards extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <CardUI imgsrc={logo} title="6 reasons why unMazer.ai should be part of your data strategy" para="Why unMazer should be an integral part of data strategy and a go-to tool for aspirational enterprises and businesses."/>
                    </div>
                    <div className="col-md-4">
                        <CardUI imgsrc={pic1} title="Sample Article Name" para="Sample Article overview/ brief Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"/>
                    </div>
                    <div className="col-md-4">
                    <CardUI imgsrc={logo} title="6 reasons why unMazer.ai should be part of your data strategy" para="Why unMazer should be an integral part of data strategy and a go-to tool for aspirational enterprises and businesses."/>
                   
                    </div>
                </div>

            </div>
        )
    }
}
export default Finalcards;