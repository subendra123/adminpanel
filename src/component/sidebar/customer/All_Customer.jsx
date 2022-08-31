import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Content_Header from "../../Content_Header";
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../Sidebar";
import "./All_customer.css";
import { DataList } from "../../DataList";

const All_Customer = () => {

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
            <div className="row">
              <div className="col-lg-6 ">
                <div className="dashboar_text">
                  <h4> Customers </h4>
                  <p>Here's your analytics details</p>
                </div>
              </div>
        
              <div className="col-lg-6  ">
                <div className="row">
              
                 
                </div>
              </div>
            </div>
          </div>

              <div className="table_hr">
                <hr />
              </div>

              <table className="table_style">
                <tr>
                  <div className="Table_Heading_data">
                    <div className="heading_name">
                      <th>
                        <span>
                         Customer Name <i class="ri-arrow-down-s-fill"></i>
                        </span>
                      </th>
                    </div>

                    <div className="heading_Status">
                      <th>
                        <span>
                          Status <i class="ri-arrow-down-s-fill"></i>
                        </span>
                      </th>
                    </div>

                    <div className="heading_Order">
                      <th>
                        <span>
                          {" "}
                          Email <i class="ri-arrow-down-s-fill"></i>
                        </span>
                      </th>
                    </div>

                    <div className="heading_Store">
                      <th>
                        <span>
                          {" "}
                          Mobile <i class="ri-arrow-down-s-fill"></i>
                        </span>
                      </th>
                    </div>

                    <div className="heading_Store">
                    <th>
                      <span>
                        {" "}
                        Fav Store <i class="ri-arrow-down-s-fill"></i>
                      </span>
                    </th>
                  </div>
                    <div className="heading_Sales">
                      <th>
                        <span>
                          {" "}
                          Date <i class="ri-arrow-down-s-fill"></i>
                        </span>
                      </th>
                    </div>
                  </div>
                </tr>

                <tr>
                  {data.map((CurrElem, index) => {
                    return (
                      <>
                        <div className="customer_table_data">
                          <div className="customer_data_name">
                            <td>
                              <div className="customer_data_name_image">
                               <NavLink to="/Customer_Details"> <img
                                  src={CurrElem.exeimg}
                                  width="50"
                                  height="40px"
                                  alt=""
                                /></NavLink>
                                <h5>{CurrElem.executive}</h5>
                              </div>
                            </td>
                          </div>
                          <div className="customer_data_name">
                            <td>
                              <div className="customer_data_status">
                                <span>Verified</span>
                              </div>
                            </td>
                          </div>
                          <div className="customer_data_name">
                            <td>
                              <div className="customer_data_order">
                                <span>{CurrElem.email}</span>
                              </div>
                            </td>
                          </div>
                          <div className="customer_data_name">
                            <td>
                              <div className="customer_data_store">
                                <span>{CurrElem.Mobiile}</span>
                              </div>
                            </td>
                          </div>
                          <div className="customer_data_name">
                            <td>
                              <div className="customer_data_store">
                                <span>{CurrElem.store}</span>
                              </div>
                            </td>
                          </div>
                          <div className="customer_data_name">
                            <td>
                              <div className="customer_data_order">
                                <span>{CurrElem.date}</span>
                              </div>
                            </td>
                          </div>
                        </div>
                        <div className="table_hr">
                          <hr />
                        </div>
                      </>
                    );
                  })}
                </tr>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default All_Customer;
