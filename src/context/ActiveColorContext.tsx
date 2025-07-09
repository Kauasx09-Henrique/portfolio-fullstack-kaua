// src/context/ActiveColorContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';

type ActiveColorContextType = {
  color: string;
  setColor: (color: string) => void;
};

const ActiveColorContext = createContext<ActiveColorContextType | undefined>(undefined);

export const ActiveColorProvider = ({ children }: { children: ReactNode }) => {
  const [color, setColor] = useState('#FF0000');

  return (
    <ActiveColorContext.Provider value={{ color, setColor }}>
      {children}
    </ActiveColorContext.Provider>
  );
};

export const useActiveColor = () => {
  const context = useContext(ActiveColorContext);
  if (!context) {
    throw new Error('useActiveColor must be used within an ActiveColorProvider');
  }
  return context;
};
