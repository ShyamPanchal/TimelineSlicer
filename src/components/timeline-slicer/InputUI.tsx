import * as React from "react";

export function InputUI(props: {
  sliderMin: number;
  sliderMax: number;
  width?: number;
  value?: number;
}) {
  const styles = props.width ? { width: props.width } : {};
  const [value, setVal] = React.useState<number>(props.value ? props.value : 1);
  return (
    <input
      type="range"
      min={props.sliderMin}
      max={props.sliderMax}
      value={value}
      onChange={(event) => {
        // const value = Math.min(Number(event.target.value), props.sliderMax - 1);
        setVal(Number(event.target.value));
        // minValRef.current = value;
      }}
      step={1}
      className="thumb thumb--left"
      style={styles}
    />
  );
}
