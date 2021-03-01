import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};

CounterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useCountByValue() {
  const { count } = useContext(CounterContext);
  return count;
}

export function useCountByAction() {
  const { setCount } = useContext(CounterContext);
  const increment = () => setCount((state) => state + 1);
  const decrement = () => setCount((state) => state - 1);
  return { increment, decrement };
}

export default CounterProvider;
