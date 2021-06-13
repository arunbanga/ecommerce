import React from "react";
import Slider from "../Slider/Slider";

const Sidebar = (props) => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="border-bottom">
            <div className="col-6 col-lg-11 col-xl-7 red-border-bottom border-bottom ">
              <h5 className="d-inline-block ">Product Family</h5>
            </div>
          </div>
          <ul className="list-group list-group-flush">{props.families}</ul>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="border-bottom">
            <div className="col-6 col-lg-11 col-xl-7 mt-2 border-bottom red-border-bottom">
              <h5 className="d-inline-block ">Size</h5>
            </div>
          </div>
          <ul className="list-group list-group-flush">{props.checkBoxes}</ul>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="border-bottom">
            <div className="col-6 col-lg-11 col-xl-7 mt-2 border-bottom red-border-bottom">
              <h5 className="d-inline-block ">Price</h5>
            </div>
          </div>
          <Slider minValue="0" maxValue="100" />
        </div>
      </div>
    </>
  );
};

export default React.memo(Sidebar);
