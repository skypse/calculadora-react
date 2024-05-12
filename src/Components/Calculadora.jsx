import React, { useState } from 'react';
import './Calculadora.css'

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const calculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Erro');
    }
  };

  return (
    <div className="calculator">
      <h2>Calculadora Básica</h2>
      <input
        type="text"
        value={input}
        onChange={handleInput}
        placeholder="Digite sua operação"
      />
      <div className="buttons">
        <button onClick={clearInput}>Limpar</button>
        <span className='gap'> </span>
        <button onClick={calculate}>=</button>
      </div>
      <p>Operadores: + (adição), - (subtração), * (multiplicação), / (divisão)</p>
      <h3>Resultado: {result}</h3>
    </div>
  );
}

export default Calculator;
