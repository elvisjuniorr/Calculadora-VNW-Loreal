import { useState } from 'react'
import './App.css'

function App() {

  const [primeiroNumero, setPrimeiroNumero] = useState('');
  const [segundoNumero, setSegundoNumero] = useState('');
  const [resultado, setResultado] = useState(null);

  function consultarResultado(operador) {
    const num1 = parseFloat(primeiroNumero);
    const num2 = parseFloat(segundoNumero); 

    if (isNaN(num1) || isNaN(num2)) {
      setResultado ('Insira números válidos');
      return;
    }

    let res;

    switch (operador) {
      case '+':
        res = num1 + num2;
        break;
      case '-':
        res = num1 - num2;
        break;
      case 'x':
        res = num1 * num2;
        break;
      case '/':
        res = num1 / num2;
        break;
    }

    setPrimeiroNumero('');
    setSegundoNumero('');
    setResultado(res);
  }

  return (
    <>
      <div className='calculadora'>
        <h1>Calculadora</h1>
        <input placeholder='Digite o primeiro número' value={primeiroNumero}
          onChange={(e) => setPrimeiroNumero(e.target.value)}/>
        <input placeholder='Digite o segundo número' value={segundoNumero}
          onChange={(e) => setSegundoNumero(e.target.value)}/>
        {resultado !== null && (
          <div className="resultado">RESULTADO: <span>{resultado}</span></div>
        )}
        <section className='botoes'>
          <button onClick={() => consultarResultado('+')} >+</button>
          <button onClick={() => consultarResultado('-')} >-</button>
          <button onClick={() => consultarResultado('x')} >x</button>
          <button onClick={() => consultarResultado('/')} >/</button>
        </section>
      </div>
    </>
  )
}

export default App
