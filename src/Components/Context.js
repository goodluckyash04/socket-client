import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext();

export const SocketState = (props) => {
  const [socket, setSocket] = useState(null);

  const SocketConnect = () => {
    const socketInstance = io(
      `${process.env.REACT_APP_BASE_URL}?client_code=A1234`,
      {
        transports: ["websocket"],
        reconnection: false,
        debug: true,
      }
    );
    socketInstance?.on("connect", () => {
      console.log("Server Connected");
    });
    socket?.on("disconnect", () => {
      console.log("Disconnected from server");
    });
    setSocket(socketInstance);
  };

  return (
    <SocketContext.Provider value={{ socket, SocketConnect }}>
      {props.children}
    </SocketContext.Provider>
  );
};

export default SocketContext;
