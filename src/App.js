import "./App.css";
import ReactSocket from "./Components/ReactSocket";
import SocketIoFile from "./Components/SocketIoFile";
import { APIState } from "./Context/APIContext";
import { SocketState } from "./Context/SocketContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserDetails from "./reduxToolKit/UserDetails";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <APIState>
          <SocketState>
            <Provider store={store}>
              <Routes>
                <Route path="/" element={<SocketIoFile />} />
                <Route path="/web-socket" element={<ReactSocket />} />
                <Route path="/redux-toolkit-basics" element={<UserDetails />} />
              </Routes>
            </Provider>
          </SocketState>
        </APIState>
      </BrowserRouter>
    </div>
  );
}

export default App;
