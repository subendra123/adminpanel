import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Content_Header from "../../Content_Header";
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../Sidebar";
import "./All_Order.css";
import { DataList } from "../../DataList";
import Data from "../../../Data";
import Table from "../../../DataTable";


const All_Order = () => {

  const [data, setData] = useState(DataList);
  const clickhandler = name => console.log("delete", name);

  return (
    <>


      <Navbar />
      <Sidebar />

      <main className="mt-3 pt-3 ">
        <div className="all_store_container">
          <div className="container-fliud">
            <div className="row">
            
            <div className="dashboard_second">
            <div className="row">
              <div className="col-lg-6 ">
                <div className="dashboar_text">
                  <h4>Orders</h4>
                  <p>Here's your analytics details</p>
                </div>
              </div>
        
              <div className="col-lg-6 ">
                <div className="row">
                 
                 
                </div>
              </div>
            </div>
          </div>
              

                   
              <table id="example" class="table table-striped table-borderless  ">
              <thead >
                  <tr>
                      <th style={{ width:60}}> Order Id</th>
                      <th>Active Order</th>
                      <th>Store Name</th>
                      <th>Ex Name</th>
                      <th>Order Date</th>
                      <th>Action </th>
                     
                    
                  </tr>
              </thead>
              <tbody>
              

              {data.map((curElem) => {
                const {id, store, Status, executive, Mobiile, date } = curElem;
                return (
                  <>
                  <tr>
                 <td> <NavLink  className="menu_Navlink"  to="/Order_Details"> {id} </NavLink></td>
                      <td>
                       Pending
                      </td>
                      <td> {store}</td>
                      <td> {executive}</td>
                      <td> {date}</td>
                      <td className="action_icon">
                        <button className="action_button">
                          <i class="ri-delete-bin-line"></i>
                        </button>{" "}
                        <button className="action_button">
                          <i class="ri-edit-circle-line"></i>
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
      </main>
    </>
  );
};

export default All_Order;
