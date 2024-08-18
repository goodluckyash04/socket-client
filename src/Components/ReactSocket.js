import React, { useState, useEffect } from "react";

const ReactSocket = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    return () => {
      socket?.close();
    };
  }, []);

  const socketConnect = () => {
    console.log(socket);
    setSocket(() => {
      const socketInstance = new WebSocket("ws://localhost:8000/ws");
      socketInstance.onopen = () => {
        alert("WebSocket connection established");
      };
      socketInstance.onmessage = (event) => {
        setResponse(event.data);
      };
      return socketInstance;
    });
  };

  const sendMessage = () => {
    socket.onopen = () => {
      socket.send(message);
    };
  };

  const socketDisconnect = () => {
    socket.close();
    console.log(socket);
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send Message</button>
      <button onClick={socketConnect}>Connect</button>
      <button onClick={socketDisconnect}>Disconnect</button>
      <p>Response: {response}</p>
    </div>
  );
};

export default ReactSocket;
