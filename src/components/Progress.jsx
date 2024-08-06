/* eslint-disable react/prop-types */
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

export const Progress = ({ children }) => {
  return (
    <CircularProgressbarWithChildren
      value={70}
      strokeWidth={10}
      styles={{
        // Customize the root svg element
        root: {},
        // Customize the path, i.e. the "completed progress"
        path: {
          // Path color
          stroke: "#7295FF",
          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: "round",
        },
        // Customize the circle behind the path, i.e. the "total progress"
        trail: {
          // Trail color
          stroke: `#2A3467`,
          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: "round",
        },
        // Customize the text
        text: {
          // Text color
          fill: "#f88",
          // Text size
          fontSize: "16px",
        },
        // Customize background - only used when the `background` prop is true
        background: {
          fill: "#3e98c7",
        },
      }}
    >
      {children}
    </CircularProgressbarWithChildren>
  );
};
