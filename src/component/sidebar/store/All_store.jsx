import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Content_Header from "../../Content_Header";
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../Sidebar";
import "./All_Store.css";
import { DataList } from "../../DataList";

import DataTable from "react-data-table-component";

const All_store = () => {
  const [data, setData] = useState(DataList);

  const [change, setChange] = useState("Declined");

  const order_status = () => {
    setChange("Accepted");
    alert("Store status Changed");
 
  };

  return (
    <>
      <Navbar />
      <Sidebar />

      <main className="mt-3 pt-3 ">
        <div className="all_store_container">
          <div className="container-fliud">
            <div className="row">
              <div className="dashboard_second"></div>

              <table id="example" className="table table-striped table-borderless ">
                <thead className="sticky_header">
                  <tr>
                    <th> Store Name</th>
                    <th>Status</th>
                    <th>Addresh</th>
                    <th>Mobile</th>
                    <th>Date</th>
                    <th style={{ width: 60 }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((curElem) => {
                    const { store, Status, addresh, Mobiile, date } = curElem;
                    return (
                      <>
                      <tr>
                     <td> <NavLink  className="menu_Navlink"  to="/Store_Details"> {store} </NavLink></td>
                          <td>
                            <button
                              onClick={order_status}
                              className="status_button"
                            >
                              {change}
                             
                            </button>{" "}
                          </td>
                          <td> {addresh}</td>
                          <td> {Mobiile}</td>
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

export default All_store;
