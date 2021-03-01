import React from 'react';

import Score from '../Score';
import ButtonIcrement from '../Button/ButtonIncrement';
import ButtonDecrement from '../Button/ButtonDecrement';

function App() {
  return (
    <div>
      <Score />
      <ButtonIcrement />
      <ButtonDecrement />
    </div>
  );
}

export default App;
