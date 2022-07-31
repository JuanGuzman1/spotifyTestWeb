import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

function App() {
  const code = new URLSearchParams(window.location.search).get("code");

  return <div>{code ? <Home code={code} /> : <Login />} </div>;
}

export default App;
