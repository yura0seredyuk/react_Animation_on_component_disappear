import "./styles.css";
import * as React from "react";

export default function App() {
  const [animateBeforeUnmount, setAnimateBeforeUnmount] = React.useState(false);
  const [isRendered, setIsRendered] = React.useState(true);
  const divRef = React.useRef();

  const handleAnimationEnd = () => {
    setIsRendered(false);
    setAnimateBeforeUnmount(false);
  };

  return (
    <>
      <button onClick={() => setAnimateBeforeUnmount(true)}>Toggle</button>
      {isRendered && (
        <div
          onAnimationEnd={handleAnimationEnd}
          ref={divRef}
          className={`bg-square ${animateBeforeUnmount && "fade-out"}`}
        />
      )}
    </>
  );
}
