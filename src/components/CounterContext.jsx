import React, { createContext, useContext, useState } from 'react';

// 1. Create the context
const CounterContext = createContext();

// 2. Create a provider component
export function CounterProvider({ children }) {
  const [contextCounter, setContextCounter] = useState(0);

  const increment = () => setContextCounter((prev) => prev + 1);

  return (
    <CounterContext.Provider value={{ contextCounter, increment }}>
      {children}
    </CounterContext.Provider>
  );
}

// 3. Custom hook to use the context easily
export function useContextCounter() {
  return useContext(CounterContext);
}