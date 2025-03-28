import { useState } from "react";
import "./Calculadora.css";

const Calculadora = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState(null);
  const [operacion, setOperacion] = useState("");

  const calcular = (operador) => {
    if (!num1 || !num2) return;
    
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    let res;
    
    switch(operador) {
      case '+':
        res = a + b;
        setOperacion("Suma");
        break;
      case '-':
        res = a - b;
        setOperacion("Resta");
        break;
      case '*':
        res = a * b;
        setOperacion("Multiplicación");
        break;
      case '/':
        res = b !== 0 ? a / b : "Error: Div/0";
        setOperacion("División");
        break;
      default:
        return;
    }
    
    setResultado(res);
  };

  const limpiar = () => {
    setNum1("");
    setNum2("");
    setResultado(null);
    setOperacion("");
  };

  return (
    <div className="calculadora-card">
      <div className="calculadora-header">
        <div className="calculadora-subtitle">Operaciones básicas</div>
      </div>
      
      <div className="calculadora-body">
        <div className="input-group">
          <label>Primer número</label>
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Ingrese un número"
          />
        </div>
        
        <div className="input-group">
          <label>Segundo número</label>
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Ingrese un número"
          />
        </div>
        
        <div className="botones-operaciones">
          <button className="btn-sumar" onClick={() => calcular('+')}>+</button>
          <button className="btn-restar" onClick={() => calcular('-')}>-</button>
          <button className="btn-multiplicar" onClick={() => calcular('*')}>×</button>
          <button className="btn-dividir" onClick={() => calcular('/')}>÷</button>
        </div>
        
        <button className="btn-limpiar" onClick={limpiar}>Limpiar</button>
      </div>
      
      <div className="calculadora-footer">
        {operacion && <div className="operacion">Operación: {operacion}</div>}
        <div className="resultado">
          {resultado !== null ? `Resultado: ${resultado}` : "Esperando cálculo..."}
        </div>
      </div>
    </div>
  );
};

export default Calculadora;