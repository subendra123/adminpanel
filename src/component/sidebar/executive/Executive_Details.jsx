import React, { useState } from "react";
import "./Executive_Details.css";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { NavLink } from "react-router-dom";
import Content_Header from "../../Content_Header";

import { DataList } from "../../DataList";
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../Sidebar";

const Executive_Details = () => {
  const [data, setData] = useState(DataList);

  const pdata = [
    {
      Order: "Total Order",
      Serving: 200,
      Pending: 110,
    },
    {
      Order: "On Hold",
      Serving: 50,
      Pending: 50,
    },
    {
      Order: "Delivered",
      Serving: 110,
      Pending: 87,
    },
    {
      Order: "Pending",
      Serving: 20,
      Pending: 90,
    },
    {
      Order: "Rejected",
      Serving: 160,
      Pending: 10,
    },
    {
      Order: "Happy",
      Serving: 33,
      Pending: 80,
    },
    {
      Order: "Sad",
      Serving: 157,
      Pending: 30,
    },
  ];


  const datar = [
    { id: "1", name: "L1", value: 75 },
    { id: "2", name: "L2", value: 25 }
  ];

  return (
    <>
      <Navbar />
      <Sidebar />

      <main className="mt-3 pt-3 bg-white ">
        <div className="all_store_container">
          <div className="container-fliud">
            <div className="row">
              <div className="dashboard_second">
                <div className="row">
                  <div className="col-lg-6 ">
                    <div className="dashboar_text"></div>
                  </div>

                  <div className="col-lg-6 ">
                    <div className="row"></div>
                  </div>
                </div>
              </div>

              <ul className="nav nav-tabs mt-3 ml-4" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#order"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Order{" "}
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Transaction{" "}
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    Personal{" "}
                  </button>
                </li>
              </ul>

              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="order"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="container-fluid New_customer_order_details_box bg-white">
                    <div className="row ">
                      <div className="col-lg-12">
                        <div className="row">
                          <div className="col-lg-4 deliver_order_customer customer_order_section_style">
                            <div className="row">
                              <div className="new_order_delivered_container">
                                <div className="new_deliverd_boxshadow shadow-sm p-3 my-3 bg-white rounded ">
                                  <div className="deliverd_icon_box">
                                    <i className="ri-truck-line"></i>
                                  </div>

                                  <div className="order_deliverd_customer_text">
                                    <h2>50</h2>
                                    <p>Total Deliverd</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 deliver_order_customer customer_order_section_style">
                            <div className="row">
                              <div className="new_order_delivered_container">
                                <div className="new_deliverd_boxshadow shadow-sm p-3  bg-white rounded ">
                                  <div className="deliverd_icon_box">
                                    <i className="ri-refresh-line"></i>
                                  </div>

                                  <div className="order_deliverd_customer_text ">
                                    <h2>20</h2>
                                    <p>Total Pending</p>
                                  </div>
                                  <div className="progress_style_pending">
                                    
                <PieChart width={80} height={80}>
                <text
                  x={35}
                  y={40}
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  25
               </text>
                <Pie
                  data={datar}
                  dataKey="value"
                  innerRadius="80%"
                  outerRadius="100%"
                  fill="red"
                  startAngle={90}
                  endAngle={-270}
                  paddingAngle={0}
                  blendStroke
                >
                  <Cell
                    key="test"
                    fill="#CCC"
                  />
                </Pie>
              </PieChart>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 deliver_order_customer customer_order_section_style">
                            <div className="row">
                              <div className="new_order_delivered_container">
                                <div className="new_deliverd_boxshadow shadow-sm p-3 rounded ">
                                  <div className="deliverd_icon_box">
                                    <i className="ri-shopping-cart-line"></i>
                                  </div>

                                  <div className="order_deliverd_customer_text">
                                    <h2>97</h2>
                                    <p>Total Order</p>
                                  </div>
                                  <div className="progress_style_pending">
                                  
                                                       
                <PieChart width={80} height={80}>
                <text
                  x={35}
                  y={40}
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  97
               </text>
                <Pie
                  data={datar}
                  dataKey="value"
                  innerRadius="80%"
                  outerRadius="100%"
                  fill="#CCC"
                  startAngle={90}
                  endAngle={-270}
                  paddingAngle={0}
                  blendStroke
                >
                  <Cell
                    key="test"
                    fill="green"
                  />
                </Pie>
              </PieChart>
                             
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                       
                      </div>

                    

              <div className="col-lg-12 deliver_order_customer customer_order_section_style">
              <div className="row">
                <div className="new_order_delivered_container">
                  <div className="new_deliverd_boxshadow shadow p-3 rounded bg-white ">
                  <ResponsiveContainer width="100%" aspect={3}>
                  <LineChart data={pdata}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Line
                      type="monotone"
                      dataKey="Serving"
                      activeDot={{ r: 8 }}
                      stroke="red"
                    />
                    <Line
                      type="monotone"
                      dataKey="Pending"
                      activeDot={{ r: 8 }}
                      stroke="green"
                    />
                    <XAxis
                      dataKey="Order"
                      interval="preserveStartEnd"
                    />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                  </LineChart>
                </ResponsiveContainer>



                   
                   
                  </div>
                </div>
              </div>
            </div>

                      
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="customer_order_details_container">
                    <div className="col-lg-12 deliver_order_customer shadow-none p-3  bg-white rounded ">
                      <div className="row">
                        <div className="transaction_header_customer mb-4">
                          <div className="transaction_text">
                            <h4>Transaction</h4>
                          </div>
                          <div className="sort_transaction">
                            <span>Sort By</span>
                            <select name="" id="">
                              <option value="">Select option</option>
                              <option value="">Paid </option>
                              <option value="">Unpaid</option>
                              <option value="">Store</option>
                            </select>
                          </div>
                        </div>

                        <tr>
                          {data.map((CurrElem, index) => {
                            return (
                              <>
                                <div className="customer_table_data">
                                  <div className="customer_data_name">
                                    <td>
                                      <div className="customer_data_name_image">
                                        <img
                                          src={CurrElem.image}
                                          width="50"
                                          height="40px"
                                          alt=""
                                        />
                                        <h5>{CurrElem.store}</h5>
                                      </div>
                                    </td>
                                  </div>
                                  <div className="customer_data_name">
                                    <td>
                                      <div className="rounded_chip">
                                        <span>Paid</span>
                                      </div>
                                    </td>
                                  </div>
                                  <div className="customer_data_name">
                                    <td>
                                      <div className="customer_data_order">
                                        <span>{CurrElem.price}</span>
                                      </div>
                                    </td>
                                  </div>
                                  <div className="customer_data_name">
                                    <td>
                                      <div className="customer_data_order">
                                        <span>Debit Card</span>
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
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
               <div className="executive_personal_container">
                  
                   <div className="col-lg-12">
                   <div className="row ">
                   <div className="col-lg-4 mt-3 ">
                      <div className="executive_profile_pic">
                      <img src="images/exe1.jpeg" alt=""   />
                      </div>
                   
                   </div>
                   <div className="col-lg-4 custom_shadow ">
                          <h6 className="p-3 text-center fw-bold">Executive Personal </h6>
                          <hr />
                          <div className="executive_personal">
                            <div className="exe_id">
                              <span>Exe Id</span> 
                              <span>Exe001</span>
                            </div>

                            <div className="exe_name">
                            <span> Name</span> 
                            <span>James</span>
                          </div>
                          
                          <div className="exe_email">
                          <span> Email</span> 
                          <span>James123@gmail.com</span>
                        </div>

                          <div className="exe_mobile">
                          <span>Mobile</span> 
                          <span>9877878763</span>
                        </div>
                        <div className="exe_company">
                        <span>Company</span> 
                        <span>Shopazard</span>
                      </div>

                      <div className="exe_alt_mobile">
                      <span>Alt Mobile</span> 
                      <span>9877878763</span>
                    </div>

                          </div>
                   
                   </div>
                   <div className="col-lg-4 custom_shadow ">
                   <h6 className="p-3 text-center fw-bold">Banking Details </h6>
                   <hr />

                   <div className="executive_banking">
                        <div className="bank_name">
                        <p>Bank Name</p>
                        <span>Kotak Mahindra</span>
                        </div>
                        <div className="bank_holder">
                        <p>Account Holder</p>
                        <span>James</span>
                        </div>

                        <div className="bank_acc">
                        <p>Account No</p>
                        <span>89776776566755</span>
                        </div>

                        <div className="bank_ifsc">
                        <p>IFSC</p>
                        <span>KOTB8089</span>
                        </div>
                        <hr className="mt-0"/>

                        <div className="document_dl">
                          <span>Driving License</span>
                          <img src="images/exe1.jpeg" alt="" width={50}  height="30px" />
                        </div>
                        <div className="document_adhar">
                        <span>Adhar Scanned</span>
                        <img src="images/exe1.jpeg" alt="" width={50}  height="30px" />
                      </div>
                  </div>
                   
                   </div>
                   
                   </div>
                          
                </div>
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

export default Executive_Details;
