import React, { createContext, useContext, useState } from "react";

const SelectedTaskContext = createContext();

export const SelectedTaskProvider = ({ children }) => {
  const [selectedTaskId, setSelectedTaskId] = useState([]);

  return (
    <SelectedTaskContext.Provider value={{ selectedTaskId, setSelectedTaskId }}>
      {children}
    </SelectedTaskContext.Provider>
  );
};

export const useSelectedTask = () => {
  return useContext(SelectedTaskContext);
};
