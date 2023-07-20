import React, { useEffect } from 'react';
import { useInterval } from '../hooks/use-interval';
import { Button } from './button';
import { Timer } from './timer';
const bellStart = require('../sounds/bell-start.mp3');
const bellFinish = require('../sounds/bell-finish.mp3');

const audioStartWorking = new Audio(bellStart);
const audioStopWorking = new Audio(bellFinish);

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
  const [resting, setResting] = React.useState(false);

  useEffect(() => {
    if(working) document.body.classList.add('working');
    if(resting) document.body.classList.remove('working');
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
    setResting(false);
    setMainTime(props.PomodoroTime);
    audioStartWorking.play()
  };

  const configureRest = (Long: boolean) => {
    setTimeCounting(true);
    setWorking(false);
    setResting(true);

    if (Long) {
      setMainTime(props.longRestTime)
    } else {
      setMainTime(props.shortRestTime)
    }

    audioStopWorking.play()
  };

  return (
    <div className="pomodoro">
      <h2>You are: Working</h2>
      <Timer mainTime={mainTime} />

      <div className="controls">
      <Button text='Work' onClick={() => configureWork()}></Button>
      <Button text='Rest' onClick={() => configureRest(false)}></Button>
      <Button
      className={!working && !resting ? 'hidden' : ''}
      text={timeCounting ? 'Pause' : 'Play'}
      onClick={() => setTimeCounting(!timeCounting)}
      ></Button>
      </div>

      <div className="details">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, delectus.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, delectus.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, delectus.</p>
      </div>
    </div>
  )
}
