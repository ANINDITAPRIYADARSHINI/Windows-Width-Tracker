import React from 'react';
import './style.css';
import WindowTracker from './WindowTracker';

export default function App() {
  const [show, setShow] = React.useState(true);

  function toggle() {
    setShow((prevSetShow) => !prevSetShow);
  }

  return (
    <div className="container">
      <button onClick={toggle}>Toggle WindowTracker</button>
      {show && <WindowTracker />}
    </div>
  );
}
