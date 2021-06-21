import React from "react";
import {Helmet} from "react-helmet";
import "../../../assets/styles/solution-styles/SolutionStyles.scss"
import Banner from "./Banner"
import Category from "./Category"
import CardData from "./CardData"
import Contact from "../../../common-components/contact-component/Contact"
export default function GovComponent(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    return(
        <div className="fixed_header_margintop" style={{marginTop:"6rem"}}>
        <Helmet>
                <meta charSet="utf-8" />
                <title>unMazer | BFSI - Generate More Alphas</title>
                <meta name="description" content="unMazer helps BFSI industries capture the events, track sentiment, understand prospects and decipher unstructured data which helps in the financial decisions." />
        </Helmet>
        <Banner/>
        <Category/>
        <CardData/>
        {/* <DataSource/> */}
        <Contact/>
        </div>
    )
}