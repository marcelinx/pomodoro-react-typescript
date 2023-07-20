import React from 'react';
import { PomodoroTimer } from './components/pomodoro-timer';


function App(): JSX.Element {
  return (
  <div className="app">
    <PomodoroTimer defaultPomodoroTime={60}/>
  </div>
  );
}

export default App;
