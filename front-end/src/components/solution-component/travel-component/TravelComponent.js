import React from "react";
import {Helmet} from "react-helmet";

import Category from "./Category"
import Contact from "../../../common-components/contact-component/Contact"
export default function TravelComponent(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    return(
        <div style={{marginTop:"6rem"}}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>unMazer | Travel - Enrich your Travel Products</title>
                <meta name="description" content="unMazer helps hospitality industries figure out globetrotters' interest, demographic details, topic-trend which is helpful for unique product offerings." />
            </Helmet>
    
        <Category/>
        
        {/* <DataSource/> */}
        <Contact/>
        </div>
    )
}