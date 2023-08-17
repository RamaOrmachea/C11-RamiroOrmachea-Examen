import React, { useState } from 'react';
import Card from './Card';
import Form from './Form';
import './App.css';

function App() {
  const [cardInfo, setCardInfo] = useState(null);

  return (
    <div className="App">
      <h1>Elige un instrumento</h1>
      <Form setCardInfo={setCardInfo} />
      {cardInfo && <Card input1={cardInfo.input1} input2={cardInfo.input2} />}
    </div>
  );
}

export default App;