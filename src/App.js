import Login from "./components/Common/Login/Login";
import {
  Navigate,
  Route,
  Routes,
  useNavigate,
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
import Track from "./pages/Buyer/Track";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getallproduct } from "./actions/ProductActions";
import Activerfq from "./components/Admin/RFQ/Activerfq.js";
import AccepetedRfq from "./components/Admin/RFQ/AccepetedRfq.js"
import RfqContent from "./components/Admin/RFQ/RfqContent";
import axios from "axios";
import { autologin, loginbuyeraction } from "./actions/BuyerActions";
import Rfq from "./components/Rfq";
import SendRfq from "./components/SendRfq";
import ComponentPage from "./components/Component";


function App() {

const {user , isAuthenticated} = useSelector(state=>state.user)
const navigate = useNavigate()
const dispatch = useDispatch()

  const Nav = () =>
    useRoutes([
      { path: "/", element: <Navbar user={user.role} /> },
      { path: "/bidding", element: <Navbar user={user.role} /> },
      { path: "/enqires", element: <Navbar user={user.role} /> },
      { path: '/sellerorder', element: <Navbar user={user.role}/> },
      { path: '/buyerorder', element: <Navbar user={user.role} /> },
      { path: '/trackshipment', element: <Navbar user={user.role}  /> },
      { path: '/activerfq', element: <Navbar user='admin'  /> },
      { path: '/rfq', element: <Navbar user='admin'  /> },
      { path: '/arfq', element: <Navbar user='admin'  /> },
      { path: '/rfq/:id', element: <Navbar user='admin'  /> },
      { path: '/sendRfq', element: <Navbar user='admin'  /> },
      { path: '/component', element: <Navbar user='admin'  /> },



      
    ]);
   
    useEffect(() => {
      
      

      dispatch(getallproduct)
      dispatch(autologin())

      // if(!isAuthenticated){
      //    navigate('/login')
      // }
    }, [])
    
  return (
    

      <div className="App relative flex">
        {
          isAuthenticated &&   <Nav user={user.role} />
        }
       
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
       { 
       !isAuthenticated ?
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route
        path="*"
        element={<Navigate to="/login" replace />}
    />
        </Routes>
        :
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/prod" element={<Prodcut />}></Route>
          <Route path="/enqires" element={<Enquires />}></Route>
          <Route path="/bidding" element={<Bidding />}></Route>
          <Route path="/onboard" element={<SellerPage />}></Route>
          <Route path="/sellerorder" element={<Sellerorderhistory />}></Route>
          <Route path="/buyerorder" element={<Orderhistory />}></Route>
          <Route path="/cd" element={<CompanyDescription />}></Route>
          <Route path="/trackshipment" element={<Track />}></Route>
          <Route path="/activerfq" element={<Activerfq />}></Route>
          <Route path="/rfq" element={<RfqContent />}></Route>
          <Route path="/arfq" element={<AccepetedRfq />}></Route>
          <Route path="/rfq/:id" element={<Rfq />}></Route>
          <Route path="/sendRfq" element={<SendRfq />}></Route>
          <Route path="/component" element={<ComponentPage />}></Route>



          <Route
        path="*"
        element={<Navigate to="/" replace />}
    />
        </Routes>}
      </div>
  
  );
}

export default App;
