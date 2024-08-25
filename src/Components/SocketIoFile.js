import React, { useContext, useEffect } from "react";
import SocketContext from "../Context/SocketContext";
import APIContext from "../Context/APIContext";
import MessageBox from "./MessageBox";

export default function SocketIoFile() {
  const { socket, sendMessage, message, SocketConnect, socketDisConnect } =
    useContext(SocketContext);

  const { clients, fetchActiveClients } = useContext(APIContext);

  useEffect(() => {
    if (!socket?.connected) {
      SocketConnect();
    }

    return socketDisConnect;
  }, []);

  return (
    <div>
      SocketIoFile<br></br>
      <button onClick={fetchActiveClients}>Refresh</button>
      <table>
        <thead>
          <th>Sr no.</th>
          <th>Client List</th>
        </thead>
        <tbody>
          {clients?.map((item, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{item}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <MessageBox />
      {message?.map((msg, index) => (
        <h6>
          {msg.client} {msg.data}
        </h6>
      ))}
    </div>
  );
}
