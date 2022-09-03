import Login from "./components/Common/Login/Login";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useRoutes
} from "react-router-dom";
import Enquires from "./pages/Seller/Enquires";
import Bidding from "./pages/Buyer/Bidding";
import SellerPage from "./pages/MainPage/SellerOnBoard/SellerPage";
import Prodcut from "./pages/CommonPages/Prodcut";
import Home from "./pages/CommonPages/Home";
import Sellerorderhistory from "./pages/Seller/Sellerorderhistory";
import Orderhistory from "./pages/Buyer/Orderhistory";
import CompanyDescription from "./pages/CommonPages/Company_description";
import Navbar from "./components/Navbar";



function App() {
  
  const Nav = () =>
  useRoutes([
    { path: "/", element: <Navbar user='buyer' /> },
    { path: "/bidding", element: <Navbar user='buyer' /> },
    { path: "/enqires", element: <Navbar user='buyer' /> },
    { path:'/sellerorder' ,element: <Navbar user='buyer' /> },
    { path:'/buyerorder' ,element: <Navbar user='buyer' /> }

  ]);

  return (
    <Router>

      <div className="App relative flex">
      <Nav/>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/prod" element={<Prodcut />}></Route>
          <Route path="/enqires" element={<Enquires />}></Route>
          <Route path="/bidding" element={<Bidding />}></Route>
          <Route path="/onboard" element={<SellerPage />}></Route>
          <Route path="/sellerorder" element={<Sellerorderhistory />}></Route>
          <Route path="/buyerorder" element={<Orderhistory />}></Route>
          <Route path="/cd" element={<CompanyDescription />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
