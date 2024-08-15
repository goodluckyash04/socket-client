import React, { useContext, useEffect } from "react";
import SocketContext from "./Context";

export default function SocketIoFile() {
  const { socket, SocketConnect } = useContext(SocketContext);
  const getapi = async () => {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/test`, {
      method: "GET",
    });
    console.log(response);
  };

  const sendMessage = () => (
    console.log("message"),
    socket?.emit("message", "Hi iam message"),
    socket?.on("response", (data) => {
      console.log("res", data);
    })
  );

  useEffect(() => {
    getapi();
    if (!socket?.connected) {
      SocketConnect();
    }
    return socket?.disconnect;
  }, []);

  return (
    <div>
      SocketIoFile
      <button onClick={sendMessage}>Message</button>
    </div>
  );
}
