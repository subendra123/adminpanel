import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Content_Header from "../../Content_Header";
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../Sidebar";
import "./All_Executive.css";
import { DataList } from "../../DataList";



const  Verified_Executive = () => {
    
const [data, setData] = useState(DataList);








  return (
    <>
      <Navbar />
      <Sidebar />

      <main className="mt-3 pt-3 ">
        <div className="all_store_container">
          <div className="container-fliud">
            <div className="row">

            <div className="dashboard_second">
            <div className="row mb-3 ">
              <div className="col-lg-6 ">
                <div className="dashboar_text">
                  <h4>Executive Lists</h4>
                 
                </div>
              </div>
        
              <div className="col-lg-6 ">
                <div className="row">
                
                 
                </div>
              </div>
            </div>
          </div>

          
            
            <table id="example" className="table table-striped mt-2 table-borderless ">
                <thead className="sticky_header">
                  <tr>
                    <th  style={{ width: 60 }}> Exe Id</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Company Name</th>
                    <th>Date</th>
                    <th style={{ width: 60 }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((curElem) => {
                    const { id,  executive, exestatus, date } = curElem;
                    return (
                      <>
                      <tr>
                     <td key={id}> {id}  </td>
                         
                          <td><NavLink className="menu_Navlink"  to="/Executive_Details">{executive} </NavLink></td>

                    
                          <td>
                          <div className="verified_status_box">
                               <span>Verified</span> &nbsp;  <i class="ri-checkbox-circle-line"></i>
                            </div>
                        </td>
                          <td> Shopazard</td>
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
      </main>
    </>
  );
};

export default Verified_Executive;
