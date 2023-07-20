import React from 'react';

interface Props {
  text: string;
  onClick?: () => void;
  classicName?: string;
}

export function Button(props: Props): JSX.Element {
  return (
    <button onClick={props.onClick}>
      {props.text}
      </button>
  );
}
