import React from "react";
import "./App.css";
import Faq from "react-faq-component";

import pic1 from "../../../assets/images/home-assets/about/pic1.png";
const data = {
  title: "FAQ ",
  rows: [
    {
      title: "What are the sources of the dataset that unMazer.ai uses to provide the insights?",
      content: "We use a variety of public and private dataset aka signals such as smartphone location traces, social media posts, people interests/behavior, map, satellite imageries, census, news etc to provide relevant features applicable to your businesses"  
      
    },
    {
      title: "How much does it cost to access the platform?",
      
      content:
      "We provide monthly as well as yearly subscription options with a certain lock-in period."
      
      
    },
    {
      title: "What kind of after-sales support can I expect from unmazer?",
      content:
      "unMazer has a dedicated customer success team which is responsible to work with the customer and help them achieve their business goals. We provide workshops, webinars and training as required by customers"
      
    },
    {
      title: "In how many days, our businesses could start seeing the return on investment?",
      content: "With proper implementation of insights in the business workflow, we believe the visible RoI in 2-3 months time. unMazer’s customer success team works closely with the customers to achieve the value from the product" 
      
    },
    {
      title: "What are the business functions that could be helped if I buy unMazer’s subscription?",
      content: "Generally the sales, operations and marketing team could benefit from our offering immensely. Additionally, business functions such as analytics, risk, product innovation and corporate strategies could draw great value from our product"
      
    }
  ]
};
const styles = {
  
  titleTextColor: "blue",
  rowTitleColor: "black",
  rowContentColor: 'purple',

};
const App = () => {
  return (
    <div className="main">
      <div className="faq">
        <Faq 
        data={data} 
        styles={styles}
      />
      </div>
      <a className="morefaq" href="">More FAQs</a>
    </div>
  );
};

export default App;