import "./App.css";
import DataTable from "react-data-table-component";


import Home from "./Home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import All_store from "./component/sidebar/store/All_store";
import All_Customer from "./component/sidebar/customer/All_Customer";
import { NavLink } from 'react-router-dom'
import Main_Content from "./component/MainContent/Main_Content";
import Sidebar from "./component/sidebar/Sidebar";
import Navbar from "./component/Navbar/Navbar";
import All_Product from "./component/sidebar/product/All_Product";
import All_Order from "./component/sidebar/order/All_Order";
import All_Executive from "./component/sidebar/executive/All_Executive";
import Executive_Details from "./component/sidebar/executive/Executive_Details";
import Customer_Details from "./component/sidebar/customer/Customer_Details";
import Store_Details from "./component/sidebar/store/Store_Details";
import Verified_Executive from "./component/sidebar/executive/Verified_Executive";
import Order_Details from "./component/sidebar/order/Order_Details";
import Product_Details from "./component/sidebar/product/Product_Details";

function App() {
  return (
    <>

   
   
 
    <Routes>
    <Route path="/" element={ <Home /> } />
    <Route path="/All_Store" element={ <All_store /> } />
    <Route path="/All_customer" element={ <All_Customer /> } />
    <Route path="/All_Product" element={ <All_Product /> } />
    <Route path="/All_Order" element={ <All_Order /> } />
    <Route path="/All_Executive" element={ <All_Executive /> } />
    <Route path="/Executive_Details" element={ <Executive_Details /> } />
    <Route path="/Customer_Details" element={ <Customer_Details /> } />
    <Route path="/Store_Details" element={ <Store_Details /> } />
    <Route path="/Verified_Executive" element={<Verified_Executive /> } />
    <Route path="/Order_Details" element={<Order_Details /> } />
    <Route path="/Product_Details" element={<Product_Details /> } />


    
    


    
    
    
    </Routes>



   

    </>
  );
}

export default App;
