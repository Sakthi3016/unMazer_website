import React from "react";
import "../../../assets/styles/solution-styles/SolutionStyles.scss";
import { categoryData } from "./Mock";
function Category() {
  return (
    <div className="category_Component">
      <div className="category_head_wrap">
        <div>Grow with unMazer</div>
        <div className="gov_banner_below">
            We help business thrive using alternative data to provide actionable insights.
        </div>
      </div>
      <div className="row category_data_wrap">
        {categoryData.map((item, i) => {
          return (
            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
              <div>
                <img src={item.img} alt="category" />
              </div>
              <div>{item.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Category;
