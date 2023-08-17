import React from 'react';

function Card({ input1, input2 }) {
  return (
    <div className="Card">
      <p>Hola! {input1}, sabemos que tu instrumento favorito es {input2}!</p>
    </div>
  );
}

export default Card;