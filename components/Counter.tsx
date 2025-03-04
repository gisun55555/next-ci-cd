import React, { useState, useEffect, useRef } from "react";

const Button = (props: { onClick: () => void; text: string }) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

function Counter() {
  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState(false);
  const initialTitleRef = useRef(document.title);

  useEffect(() => {
    document.title = checked
      ? `Total number of clicks: ${count}`
      : initialTitleRef.current;
  }, [checked, count]);

  return (
    <div>
      <span data-testid="count">
        Clicked {count} time{count === 1 ? "" : "s"}
      </span>
      <br />
      <Button onClick={() => setCount((prev) => prev + 1)} text="Increment" />
      <div>
        <input
          type="checkbox"
          id="checkbox-title"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <label htmlFor="checkbox-title">
          Check to display count in document title
        </label>
      </div>
    </div>
  );
}

export default Counter;