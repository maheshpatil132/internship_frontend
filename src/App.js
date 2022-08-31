import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Prodcut from "./components/Prodcut";
import Enquires from "./pages/Enquires/Enquires";
import Bidding from "./pages/Bidding/Bidding";



function App() {

  return (
    <Router>
      <div className="App relative">
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/prod" element={<Prodcut/>}></Route>
          <Route path="/enqires" element={<Enquires/>}></Route>
          <Route path="/bidding" element={<Bidding/>}></Route>


        </Routes>
      </div>
    </Router>
  );
}

export default App;
