import "./App.css";
import { SocketState } from "./Components/Context";
// import ReactSocket from "./Components/ReactSocket";
import SocketIoFile from "./Components/SocketIoFile";

function App() {
  return (
    <div className="App">
      {/* <ReactSocket /> */}
      <SocketState>
        <SocketIoFile />
      </SocketState>
    </div>
  );
}

export default App;
