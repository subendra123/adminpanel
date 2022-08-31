import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Content_Header from "../../Content_Header";
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../Sidebar";
import './All_Product.css'
import { DataList } from "../../DataList";

const All_Product = () => {
    
  const [data, setData] = useState(DataList);
  const [change, setChange] = useState("Reject");

  const ChangeStatus = () => {
    setChange("Accept");
    alert('Do you Want To Accept ?');
  }


  return (
    <>
      <Navbar />
      <Sidebar />

      <main className="mt-3 pt-3 ">
        <div className="all_store_container">
          <div className="container-fliud">
            <div className="row">
            
            <div className="col-lg-12  order_product_container">
            <div className="row ">
            <div className="  shadow-sm p-3  bg-white rounded   order_product_section ">
            
             
            <table id="example" className="table table-striped mt-2 table-borderless ">
            <thead className="sticky_header">
              <tr>
                <th  style={{ width: 60 }}>  Id</th>
                <th>Product Name</th>
                <th  style={{ width: 120 }}>image</th>
                <th>Status</th>
                <th  style={{ width: 80 }}>Price</th>
                <th>Size</th>
                <th>Date</th>
                <th style={{ width: 60 }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((curElem) => {
                const { id,  name, image,price, date } = curElem;
                return (
                  <>
                  <tr>
                 <td key={id}>{id} </td>
                     
                      <td>{name}</td>
  
                
                      <td> <NavLink  className="menu_Navlink"  to="/Product_Details"> 
                      <img src={image} alt="" width={50} />
                      </NavLink>
                      </td>

                      <td className="text-dark"> 
                      <div className="rounded_chip">
                      <span onClick={ChangeStatus} >{change}</span>
                      </div>
                      </td>
                      <td>{price}</td>
                      <td>Medium</td>
                      <td> {date}</td>
                      <td className="action_icon">
                        <button className="action_button">
                          <i class="ri-delete-bin-line"></i>
                        </button>{" "}
                        <button className="action_button">
                        <i class="ri-information-line "></i>
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
          
            
            </div>
            </div>
           </div>
  

            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default All_Product;
