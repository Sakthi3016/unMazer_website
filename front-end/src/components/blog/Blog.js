import React from "react";
import {Helmet} from "react-helmet";
import blog from "../../assets/images/extra-constructs/blog.png"


const Blog = () => {
    return <div>
        
        <Helmet>
          <meta charSet="utf-8" />
          <title>unMazer Blog </title>
          <meta name="description" content="Unravelling alternative data universe one piece at a time. Also, sneak peek into our engineering, technology and culture." />
          
        </Helmet>
        <div className="fixed_header_margintop" style={{width:"62vh",margin: "10% 36% 9%"}}>
            <img src={blog} alt="By clicking read more you can read blog"/>
        </div>
        <div style={{position: "relative",  bottom: "120px"}}>
            
            <h3 style={{display: "flex",justifyContent: "center",color: "black"}}>
                <h3>To read full blog click here</h3>&nbsp;&nbsp;
            <a href="https://blog.unmazer.ai/"><b style={{color:"blue"}}>read more...</b></a>

            </h3>
        </div>
    </div>
}
export default Blog;