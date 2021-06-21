import React from "react";
import {Helmet} from "react-helmet";
import "../../../assets/styles/solution-styles/SolutionStyles.scss"
import Banner from "./Banner"
import Category from "./Category"
import CardData from "./CardData"
import Contact from "../../../common-components/contact-component/Contact"
import Finalretail from "./Finalretail";
import Trends from "../Retailbelow/Trends";
import Twofeature from "../Retailbelow/Twofeature";
import Contacts from "../../../common-components/contact-component/Contacts";



export default function RetailComponent(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    return(
        <div className="fixed_header_margintop" style={{marginTop:"6rem"}}>
        <Helmet>
                <meta charSet="utf-8" />
                <title>unMazer | Retail - Strengthen your Brand</title>
                <meta name="description" content="unMazer provides deep spatial and behavioural understanding of brands' prospects, billboards viewers, social media impressions, footfalls and trajectories." />
        </Helmet>
        <Banner/>
        
        <Finalretail/>
        
        <Category/>
       <Trends/>
       <Contacts/>
       <Twofeature/>
    
        <CardData/>
        {/* <DataSource/> */}
        
        <Contact/>
        </div>
    )
}