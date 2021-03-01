import React from 'react';
import Button from '.';
import { useCountByAction } from '../../contexts/Counter';

import './button.css';

function ButtonIncrement() {
  const { increment } = useCountByAction();
  return (
    <Button className="button-blue" onClick={increment} label="Increment" />
  );
}

export default ButtonIncrement;
