import * as React from "react";

export function InputUI(props: {
  sliderMin: number;
  sliderMax: number;
  width?: number;
  startValue?: number;
  endValue?: number;
}) {
  const styles = props.width ? { width: props.width } : {};
  const [leftSliderValue, setLeftSliderValue] = React.useState<number>(
    props.startValue ? props.startValue : props.sliderMin
  );
  const [rightSliderValue, setRightSliderValue] = React.useState<number>(
    props.endValue ? props.endValue : props.sliderMax
  );
  return (
    <>
      <input
        type="range"
        min={props.sliderMin}
        max={props.sliderMax}
        value={leftSliderValue}
        onChange={(event) => {
          const value = Math.min(
            Number(event.target.value),
            rightSliderValue - 1
          );
          setLeftSliderValue(value);
        }}
        step={1}
        className="thumb thumb--left"
        style={styles}
      />
      <input
        type="range"
        min={props.sliderMin}
        max={props.sliderMax}
        value={rightSliderValue}
        onChange={(event) => {
          const value = Math.max(
            Number(event.target.value),
            leftSliderValue + 1
          );
          setRightSliderValue(value);
        }}
        step={1}
        className="thumb thumb--right"
        style={styles}
      />
    </>
  );
}
