import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { MESSAGE_EVENT, RESPONSE_EVENT } from "../socketConfig";
import { useLocation } from "react-router";

const SocketContext = createContext();

export const SocketState = (props) => {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState([]);

  const params = useLocation();
  const path = new URLSearchParams(params.search);
  const client = path.get("id");

  const SocketConnect = () => {
    const socketInstance = io(`${process.env.REACT_APP_BASE_URL}`, {
      transports: ["websocket"],
      reconnection: false,
      query: { client },
      debug: true,
    });
    socketInstance?.on("connect", () => {
      console.log("Server Connected");
    });
    socketInstance?.on("disconnect", () => {
      console.log("Disconnected from server");
    });
    socketInstance?.on(RESPONSE_EVENT, (data) => {
      console.log("res", data);
      setMessage((prev) => [...prev, data]);
    });
    setSocket(socketInstance);
  };

  const sendMessage = (message) => socket?.emit(MESSAGE_EVENT, message);

  const socketDisConnect = () => socket?.disconnect;

  return (
    <SocketContext.Provider
      value={{ socket, sendMessage, message, SocketConnect, socketDisConnect }}
    >
      {props.children}
    </SocketContext.Provider>
  );
};

export default SocketContext;
