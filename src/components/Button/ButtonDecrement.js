import React from 'react';
import Button from '.';
import { useCountByAction } from '../../contexts/Counter';

import './button.css';

function ButtonDecrement() {
  const { decrement } = useCountByAction();
  return (
    <Button className="button-red" onClick={decrement} label="Decrement" />
  );
}

export default ButtonDecrement;
