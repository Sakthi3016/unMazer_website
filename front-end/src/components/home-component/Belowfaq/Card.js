import React from 'react'
import './paper.css'
function Card({title,imageurl,body}){
    return(
        
        <div className="card-cont">
            
            <div className="images">
                <img src={imageurl} alt=""/>
            </div>
            <div className="contents">
            <div className="title">
                <h3>{title}</h3>
            </div>
            <div className="cbody">
                {body}
            </div>
            </div>
        </div>
    );
}

export default Card;