import React, { useRef } from 'react';
import { useContextCounter } from './CounterContext';

export default function FocusInput() {
  const inputRef = useRef(null);

  const { contextCounter , increment} = useContextCounter()

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
      <button onClick={increment}>Context Button {contextCounter} </button>
    </div>
  );
}
