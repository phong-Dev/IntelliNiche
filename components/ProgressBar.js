import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
const ProgressBar = () => {
  return (
    <div className="our-work__progress container">
      <div className="our-work__progress--item">
        <AnimatedProgressProvider
          valueStart={0}
          valueEnd={75}
          duration={1.4}
          easingFunction={easeQuadInOut}
        >
          {(value) => {
            const roundedValue = Math.round(value);
            return (
              <CircularProgressbar
                value={value}
                text={`${roundedValue}+`}
                /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
                styles={buildStyles({ pathTransition: "none" })}
              />
            );
          }}
        </AnimatedProgressProvider>
        <b>
          <p>Working hours</p>
        </b>
      </div>
      <div className="our-work__progress--item">
        <AnimatedProgressProvider
          valueStart={0}
          valueEnd={75}
          duration={1.4}
          easingFunction={easeQuadInOut}
        >
          {(value) => {
            const roundedValue = Math.round(value);
            return (
              <CircularProgressbar
                value={value}
                text={`${roundedValue}+`}
                /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
                styles={buildStyles({ pathTransition: "none" })}
              />
            );
          }}
        </AnimatedProgressProvider>
        <b>
          <p>Happy Clients</p>
        </b>
      </div>
      <div className="our-work__progress--item">
        <AnimatedProgressProvider
          valueStart={0}
          valueEnd={75}
          duration={1.4}
          easingFunction={easeQuadInOut}
        >
          {(value) => {
            const roundedValue = Math.round(value);
            return (
              <CircularProgressbar
                value={value}
                text={`${roundedValue}+`}
                /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
                styles={buildStyles({ pathTransition: "none" })}
              />
            );
          }}
        </AnimatedProgressProvider>
        <b>
          <p>Total project</p>
        </b>
      </div>
      <div className="our-work__progress--item">
        <AnimatedProgressProvider
          valueStart={0}
          valueEnd={75}
          duration={1.4}
          easingFunction={easeQuadInOut}
        >
          {(value) => {
            const roundedValue = Math.round(value);
            return (
              <CircularProgressbar
                value={value}
                text={`${roundedValue}+`}
                /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
                styles={buildStyles({ pathTransition: "none" })}
              />
            );
          }}
        </AnimatedProgressProvider>
        <b>
          <p>running project</p>
        </b>
      </div>
    </div>
  );
};

export default ProgressBar;
