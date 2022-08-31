import React, { useState } from "react";

import Navbar from "../../Navbar/Navbar";
import Sidebar from "../Sidebar";
import "./Customer_Details.css";
import { NavLink } from "react-router-dom";
import Content_Header from "../../Content_Header";
import { DataList } from "../../DataList";

const Customer_Details = () => {
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
                      <h4>Customer Details</h4>
                    </div>
                  </div>

                  <div className="col-lg-6 ">
                    <div className="row"></div>
                  </div>
                </div>
              </div>

              <ul class="nav nav-tabs mt-3 ml-4" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
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
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
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
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
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

              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="order"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="container-fluid New_customer_order_details_box">
                    <div className="row ">
                      <div className="col-lg-12">
                        <div className="row">
                          <div className="col-lg-4">
                            <div class="card card-2">
                              <div class="card-body">
                                <div class="media">
                                  <div class="sq align-self-center ">
                                    {" "}
                                    <img
                                      class="img-fluid my-auto align-self-center mr-2 mr-md-4 pl-0 p-0 m-0"
                                      src="https://i.imgur.com/RJOW4BL.jpg"
                                      width="135"
                                      height="135"
                                    />{" "}
                                  </div>
                                  <div class="media-body my-auto text-right">
                                    <div class="row my-auto flex-column flex-md-row">
                                      <div class="col my-auto">
                                        <h6 class="mb-0"> Jack Jacs</h6>
                                      </div>
                                      <div class="col-auto my-auto">
                                        {" "}
                                        <small>Golden Rim </small>
                                      </div>
                                      <div class="col my-auto">
                                        {" "}
                                        <small>Size : M</small>
                                      </div>
                                      <div class="col my-auto">
                                        {" "}
                                        <small>Qty : 1</small>
                                      </div>
                                     
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-4">
                            <div class="card card-2">
                              <div class="card-body">
                                <div class="media">
                                  <div class="sq align-self-center ">
                                    {" "}
                                    <img
                                      class="img-fluid my-auto align-self-center mr-2 mr-md-4 pl-0 p-0 m-0"
                                      src="https://i.imgur.com/RJOW4BL.jpg"
                                      width="135"
                                      height="135"
                                    />{" "}
                                  </div>
                                  <div class="media-body my-auto text-right">
                                    <div class="row my-auto flex-column flex-md-row">
                                      <div class="col my-auto">
                                        <h6 class="mb-0"> Jack Jacs</h6>
                                      </div>
                                      <div class="col-auto my-auto">
                                        {" "}
                                        <small>Golden Rim </small>
                                      </div>
                                      <div class="col my-auto">
                                        {" "}
                                        <small>Size : M</small>
                                      </div>
                                      <div class="col my-auto">
                                        {" "}
                                        <small>Qty : 1</small>
                                      </div>
                                    
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div class="card card-2">
                              <div class="card-body">
                                <div class="media">
                                  <div class="sq align-self-center ">
                                    {" "}
                                    <img
                                      class="img-fluid my-auto align-self-center mr-2 mr-md-4 pl-0 p-0 m-0"
                                      src="https://i.imgur.com/RJOW4BL.jpg"
                                      width="135"
                                      height="135"
                                    />{" "}
                                  </div>
                                  <div class="media-body my-auto text-right">
                                    <div class="row my-auto flex-column flex-md-row">
                                      <div class="col my-auto">
                                        <h6 class="mb-0"> Jack Jacs</h6>
                                      </div>
                                      <div class="col-auto my-auto">
                                        {" "}
                                        <small>Golden Rim </small>
                                      </div>
                                      <div class="col my-auto">
                                        {" "}
                                        <small>Size : M</small>
                                      </div>
                                      <div class="col my-auto">
                                        {" "}
                                        <small>Qty : 1</small>
                                      </div>
                                      
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div class="card card-2">
                              <div class="card-body">
                                <div class="media">
                                  <div class="sq align-self-center ">
                                    {" "}
                                    <img
                                      class="img-fluid my-auto align-self-center mr-2 mr-md-4 pl-0 p-0 m-0"
                                      src="https://i.imgur.com/RJOW4BL.jpg"
                                      width="135"
                                      height="135"
                                    />{" "}
                                  </div>
                                  <div class="media-body my-auto text-right">
                                    <div class="row my-auto flex-column flex-md-row">
                                      <div class="col my-auto">
                                        <h6 class="mb-0"> Jack Jacs</h6>
                                      </div>
                                      <div class="col-auto my-auto">
                                        {" "}
                                        <small>Golden Rim </small>
                                      </div>
                                      <div class="col my-auto">
                                        {" "}
                                        <small>Size : M</small>
                                      </div>
                                      <div class="col my-auto">
                                        {" "}
                                        <small>Qty : 1</small>
                                      </div>
                                     
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div class="card card-2">
                              <div class="card-body">
                                <div class="media">
                                  <div class="sq align-self-center ">
                                    {" "}
                                    <img
                                      class="img-fluid my-auto align-self-center mr-2 mr-md-4 pl-0 p-0 m-0"
                                      src="https://i.imgur.com/RJOW4BL.jpg"
                                      width="135"
                                      height="135"
                                    />{" "}
                                  </div>
                                  <div class="media-body my-auto text-right">
                                    <div class="row my-auto flex-column flex-md-row">
                                      <div class="col my-auto">
                                        <h6 class="mb-0"> Jack Jacs</h6>
                                      </div>
                                      <div class="col-auto my-auto">
                                        {" "}
                                        <small>Golden Rim </small>
                                      </div>
                                      <div class="col my-auto">
                                        {" "}
                                        <small>Size : M</small>
                                      </div>
                                      <div class="col my-auto">
                                        {" "}
                                        <small>Qty : 1</small>
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
                </div>

                <div
                  class="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="customer_order_details_container">
                    <div className="col-lg-12 deliver_order_customer shadow p-3  bg-white rounded ">
                      <div className="row">
                        <div className="transaction_header_customer mb-4">
                          <div className="transaction_text">
                            <h4>Transaction</h4>
                          </div>
                          <div className="sort_transaction">
                            <span>Favourite Store</span>
                            <select name="" id="">
                              <option value="">Apple Store</option>
                              <option value="">Samsung Store</option>
                              <option value="">Big Bajar</option>
                              <option value="">Orion mall</option>
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
                                      <div className="customer_data_status">
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
                  class="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                <div className="personal_details_customer">
                

                <div class="card p-3 py-3 mt-3 card-1 text-center">
    <h4>Delivery Address</h4>
    <div class="p-3 card-2">
        <div class="p-3 card-child">
            <div class="d-flex flex-row align-items-center"> <span class="circle"> <i class="ri-home-4-line"></i></span>
                <div class="d-flex flex-column ms-3">
                    <h6 class="fw-bold">Home</h6> <span>2112, cottonwoon lane, <br />Ground Floor, NY ,20021</span>
                </div>
            </div>
        </div>
        <div class="p-3 card-child mt-4">
            <div class="d-flex flex-row align-items-center"> <span class="circle-2"> <i class="ri-bank-line"></i> </span>
                <div class="d-flex flex-column ms-3">
                    <h6 class="fw-bold">Office</h6> <span>3432, Awesome Tail lane, <br />First Floor, NY, 43434</span>
                </div>
            </div>
        </div>
       
    </div>
</div>



<div class="card p-3 py-3 mt-3 card-1 text-center">
<h4>Residencial Address</h4>
<div class="p-3 card-2">
    <div class="p-3 card-child">
        <div class="d-flex flex-row align-items-center"> <span class="circle"> <i class="ri-home-4-line"></i></span>
            <div class="d-flex flex-column ms-3">
                <h6 class="fw-bold">Home</h6> <span>#121, Jaynagar 4th block, <br />7th cross near, 4th block bus stop ,560046</span>
            </div>
        </div>
    </div>
    <div class="p-3 card-child mt-4">
        <div class="d-flex flex-row align-items-center"> <span class="circle-2"> <i class="ri-bank-line"></i> </span>
            <div class="d-flex flex-column ms-3">
                <h6 class="fw-bold">Office</h6> <span>3432, Awesome Tail lane, <br />First Floor, NY, 43434</span>
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

export default Customer_Details;
