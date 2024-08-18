import React, { createContext, useState } from "react";

const APIContext = createContext();

export function APIState({ children }) {
  const [clients, setClients] = useState([]);
  const fetchActiveClients = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/active-clients`,
        {
          method: "GET",
        }
      );
      const resJson = await response.json();
      console.log(resJson);
      setClients(resJson.client_list);
    } catch {
      console.log("netwrok error");
    }
  };
  return (
    <APIContext.Provider value={{ clients, fetchActiveClients }}>
      {children}
    </APIContext.Provider>
  );
}

export default APIContext;
