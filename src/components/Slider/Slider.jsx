import { useRef, useState } from "react";
import "./Slider.scss";

const Slider = (props) => {
  const [minValue, setMinValue] = useState(25);
  const [maxValue, setMaxValue] = useState(75);

  const range = useRef();
  const leftSliderShadowRef = useRef();
  const rightSliderShadowRef = useRef();
  const leftSliderRef = useRef();
  const rightSliderRef = useRef();

  const setLeftValue = (e) => {
    var value = Math.min(e.target.value, maxValue - 1);
    var percent =
      ((value - leftSliderShadowRef.current.min) /
        (leftSliderShadowRef.current.max - leftSliderShadowRef.current.min)) *
      100;
    leftSliderRef.current.style.left = percent + "%";
    range.current.style.left = percent + "%";
    setMinValue(value);
  };

  const setRightValue = (e) => {
    var value = Math.max(e.target.value, minValue + 1);
    var percent =
      ((value - leftSliderShadowRef.current.min) /
        (rightSliderShadowRef.current.max - rightSliderShadowRef.current.min)) *
      100;
    rightSliderRef.current.style.right = 100 - percent + "%";
    range.current.style.right = 100 - percent + "%";
    setMaxValue(value);
  };

  return (
    <div className="middle mt-4">
      <div className="multi-range-slider">
        <input
          ref={leftSliderShadowRef}
          type="range"
          className="input-left"
          min={props.minValue}
          max={props.maxValue}
          onChange={(e) => setLeftValue(e)}
          value={minValue}
        />
        <input
          ref={rightSliderShadowRef}
          type="range"
          className=" input-right"
          min={props.minValue}
          max={props.maxValue}
          onChange={(e) => setRightValue(e)}
          value={maxValue}
        />
        <div className="slider">
          <div className="track "></div>
          <div ref={range} className="range"></div>
          <div ref={leftSliderRef} className="thumb left"></div>
          <div ref={rightSliderRef} className="thumb right"></div>
        </div>
      </div>
      <div className="d-flex justify-content-around my-4">
        <p>Min: {minValue}</p>
        <p>Max: {maxValue}</p>
      </div>
    </div>
  );
};

export default Slider;
