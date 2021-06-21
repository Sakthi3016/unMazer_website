import React,{Link} from 'react';
import logo from './logo.png'
import './card.css';
import Appfinal from '../../../report/Appfinal';
import Report from '../../../report/Report';

const CardUI=props=>{

    return(
        <div className="text-center shadow">
            <div className="overflow">
               <a href="/Appfinal"> <img src={props.imgsrc} alt="" className="card-img-top"/></a>
            </div>
            
        <div className="body text-dark">
            <h4 className="catitle">{props.title}</h4>
            <p className="text text-secondary">
                {props.para}
            </p>
            <a href="./Description" className="btn btn-outline-success">Read more</a>
        </div>
            
        </div>
    );
}
export default CardUI;