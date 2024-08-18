import "./App.css";
import ReactSocket from "./Components/ReactSocket";
import SocketIoFile from "./Components/SocketIoFile";
import { APIState } from "./Context/APIContext";
import { SocketState } from "./Context/SocketContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <APIState>
          <SocketState>
            <Routes>
              <Route path="/" element={<SocketIoFile />} />
              <Route path="/web-socket" element={<ReactSocket />} />
            </Routes>
          </SocketState>
        </APIState>
      </BrowserRouter>
    </div>
  );
}

export default App;
