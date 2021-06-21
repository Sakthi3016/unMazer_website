import React from "react";
import { categoryData } from "./Mock";
import './travel.css'
export default function Category() {
  return (
    <div className="Component">
      <div className="heading">
        <div>unMazer Features</div>
        <div className="below">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec p Lorem ipsum dolor sit a

          </div>
      </div>
      <div className="row">
        {categoryData.map((item, i) => {
          return (
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="image">
                <img src={item.img} alt="category" />
              
              {item.title}</div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
}
