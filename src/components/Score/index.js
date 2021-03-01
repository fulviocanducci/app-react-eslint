import React from 'react';
import { useCountByValue } from '../../contexts/Counter';

function Score() {
  const value = useCountByValue();
  return <div>{value}</div>;
}

export default Score;
