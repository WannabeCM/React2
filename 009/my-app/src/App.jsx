import "./App.css";
import Hompage from "./pages/hompage/hompage";
import Login from "./pages/login/Login";

function App() {
  const login = false;
  const user = {
    login: true,
    name: "박성범",
  };
  // const login = true;
  return <div>{user.login ? <Hompage userName={user.name} /> : <Login />}</div>;
}

export default App;
