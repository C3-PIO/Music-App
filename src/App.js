import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import { useState, useEffect } from "react";

function App() {
  // Holds token
  const [accessToken, setAccessToken] = useState("");

  // Fetchs token and sets it so that API requests can be made
  useEffect(() => {}, []);

  // Use global state for all API fetchs or use UseContext????????

  return (
    <div className="App">
      <Sidebar token={accessToken} />
      <Main token={accessToken} />
    </div>
  );
}

export default App;
