import { useRef } from "react";

export default function Settings() {
  const textEl = useRef();
  const textEl2 = useRef();

  function changeColor() {
    console.log(textEl);
    textEl.current.style.color = "red";
    textEl.current.style.fontWeight = "100";
    textEl2.current.style.color="orange";
  }

  return (
    <div>

      <h1 ref={textEl}>Settings</h1>
      <h2 ref={textEl2}>hello</h2>
      <button onClick={changeColor}>Change</button>
    </div>
  );
}
