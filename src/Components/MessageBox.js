import React, { useContext, useState } from "react";
import SocketContext from "../Context/SocketContext";

export default function MessageBox() {
  const { sendMessage } = useContext(SocketContext);
  const [msg, setMsg] = useState();

  const submitMessage = () => {
    sendMessage(msg);
    setMsg("");
  };
  return (
    <div className="container col-4">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Write Message"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={submitMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}
