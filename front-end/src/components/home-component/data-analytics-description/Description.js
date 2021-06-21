import React from "react";
import Category from "../../solution-component/home-componen/Category";
import "./description.scss";
import Features from "./features/Features";
const Description = () => {
  return (
    <div className="row description">
    <div className="col-lg-1 col-md-1">

    </div>
      <div className="col-lg-10 col-md-10 description_text">
      unMazer is a B2B SaaS data intelligence platform that enables key decisions for businesses. Our AI technology creates 
       <span className="highlighted_text_desc">"Alternative Information Graph"</span> {`  `} 
       by ingesting signals from multiple sources such as social media, news/articles, locations, transactions and private proprietary data
      </div>
      <div className="col-lg-1 col-md-1">
    
    </div>
    <Category/>
    <Features/>
    
    </div>
    
  );
};
export default Description;