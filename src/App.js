import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import { useState, useEffect } from "react";


const CLIENT_ID = "60c47a0b477d4b39b816055486254ba8";
const CLIENT_SECRET = "e64e08d0eece499d9db1ff7ddc68962c";

function App() {
  // Holds token
  const [accessToken, setAccessToken] = useState("");

  // Fetchs token and sets it so that API requests can be made
  useEffect(() => {
    let authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    };
    // NEED TO ADD ERROR HANDLING?????
    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);

  return (
    <div className="App container-fluid">
      <Sidebar />
      <Main token={accessToken} />
    </div>
  );
}

export default App;
