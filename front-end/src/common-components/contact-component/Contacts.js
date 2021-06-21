import React from "react";
import './contact.css'
export default function Contacts(props) {
  return (
    <div className="letstart">
      <div className="common">
     
        
          <div className="interested">
            <div>Interested? Let's get in touch!</div>
            </div>
            <div className="contacted">
              Drop us a message if you wish to learn more about unMazer and how we can help you transform your business.
            </div>
            <a target="blank" href={"https://us7.list-manage.com/contact-form?u=c45b4435fa81fc45d23ed7254&form_id=6313ebab993ba9105ee068628885d91f"}><button style={{borderRadius:"4px"}} className="but">Contact Us </button></a>
          <div className="excuse"></div>
        </div>
      </div>
    
  );
}
