import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

// action importada de store calculator, dispara a ação para o reducer.
import { sum, subtract } from  '../store/calculator/Calculator.actions';

function Calculator() {
  // hook useSelector para ter acesso ao estado da store
  const result = useSelector(state => state.calculator );
  // hook useDispatch, usado para disparar a action para o reducer.
  const dispatch = useDispatch();
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  return (
    <div>
      <input 
        type='number'
        placeholder='a'
        value={a}
        onChange={(e) => setA(Number(e.target.value))} 
        />
      <input 
        type='number' 
        placeholder='b' 
        value={b}
        onChange={(e) => setB(Number(e.target.value))}
        />

      <button
        onClick={() => {
          dispatch(sum(a,b))
        }}
      >somar</button>
      <button
        onClick={() => {
          dispatch(subtract(a, b))
        }}
      >subtrair</button>
      <div>
        { result }
      </div>
    </div>
  );
};



export default Calculator;