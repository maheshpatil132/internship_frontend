import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {

  return (
    <Router>
      <div className="App relative">
        <Routes>
          <Route path="/login/:user" element={<Login />}></Route>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
