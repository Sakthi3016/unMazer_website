
import React from "react";
import {Helmet} from "react-helmet";
import App from "../home-component/data-analytics-description/Navigation/App";

const Sample = () => {

  
    return (
    <div className="fixed_header_margintop">
      
      <Helmet>
          <meta charSet="utf-8" />

          <title>Report page - Unmazer</title>
          <meta name="description" content="Periodic publications of general/industry-specific reports through ingesting of large-scale signals by our AI engines. Provided free of cost to our clients!" />
      </Helmet>


      {/*<Appfinal/>*/}
      <App/>
       
        </div>    
      
      

    )
    }

export default Sample;