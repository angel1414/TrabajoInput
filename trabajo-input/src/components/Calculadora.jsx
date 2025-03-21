import './Calculadora.css';

const Calculadora = () => {
  return (
    <div className="container">
      <h1>Calculadora</h1>
      <div className="input-group">
        <label htmlFor="numero1">Número 1:</label>
        <input
          type="number"
          id="numero1"
          className="input"
        />
      </div>
      <div className="input-group">
        <label htmlFor="numero2">Número 2:</label>
        <input
          type="number"
          id="numero2"
          className="input"
        />
      </div>
      <button className="button">Calcular</button>
    </div>
  );
};

export default Calculadora;