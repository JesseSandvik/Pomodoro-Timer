import React, { useState } from "react";
import "./App.css";
import Pomodoro from "./pomodoro/Pomodoro";

function App() {
  const [aboutToggle, setAboutToggle] = useState(false);

  function aboutToggleHandler() {
    if (!aboutToggle) {
      setAboutToggle(true);
    } else {
      setAboutToggle(false);
    }
  }

  return (
    <div className="App">
      <header className="App-header container">
        <h1><b>Pomodoro Timer</b></h1>
          <ul className="about p-3"><button className="about-title btn btn-success" onClick={aboutToggleHandler}>What is a Pomodoro Timer?</button>
          {aboutToggle && (
            <div className="about-description p-3">
        <li><small>The pomodoro timer is a timer designed around the work/break interval system of the pomodoro technique.</small></li>
        <li><small>The pomodoro technique time management system was developed by Francesco Cirillo in the late 1980s.</small></li>
        <li><small>The technique uses a timer to break work into intervals, traditionally twenty five minutes in length, separated by short breaks.</small></li>
        <li><small>Each interval is known as a pomodoro, from the italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student.</small></li>
        </div>
        )}
        </ul>
      </header>
      <div className="container">
        <Pomodoro />
      </div>
    </div>
  );
}

export default App;
