import React, { useState } from 'react';


function Form({ setCardInfo }) {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange1 = (event) => {
    setInput1(event.target.value);
    setErrorMessage('');
  };

  const handleInputChange2 = (event) => {
    setInput2(event.target.value);
    setErrorMessage('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (input1.length < 3 || /^\s/.test(input1) || input2.length < 6) {
      setErrorMessage('Por favor chequea que la información sea correcta');
      return;
    }

    setCardInfo({ input1, input2 });
  };

  return (
    <div>
      <form>
        <input type="text" placeholder="Cual es tu nombre?" value={input1} onChange={handleInputChange1} />
        <input type="text" placeholder="Instrumento favorito?" value={input2} onChange={handleInputChange2} />
        <button type="submit" onClick={handleSubmit}>Enviar</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default Form;