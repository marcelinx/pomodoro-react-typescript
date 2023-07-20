import React, { useEffect } from 'react';
import { useInterval } from '../hooks/use-interval';
import { Button } from './button';
import { Timer } from './timer';


interface Props {
  PomodoroTime : number
  shortRestTime : number
  longRestTime : number
  cycles: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.PomodoroTime);
  const [timeCounting, setTimeCounting] = React.useState(false);
  const [working, setWorking] = React.useState(false);

  useEffect(() => {
    if(working) document.body.classList.add('working');
  }, [working]);

  useInterval(
    () => {
    setMainTime(mainTime - 1);
    },
    timeCounting ? 1000 : null,
  );

  const configureWork = () => {
    setTimeCounting(true);
    setWorking(true);
  };

  return (
    <div className="pomodoro">
      <h2>You are: Working</h2>
      <Timer mainTime={mainTime} />

      <div className="controls">
      <Button text='Work' onClick={() => configureWork()}></Button>
      <Button text='teste' onClick={() => console.log(1)}></Button>
      <Button text={timeCounting ? 'Pause' : 'Play'} onClick={() => setTimeCounting(!timeCounting)}></Button>
      </div>

      <div className="details">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, delectus.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, delectus.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, delectus.</p>
      </div>
    </div>
  )
}
