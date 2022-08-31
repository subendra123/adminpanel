import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from '../../Navbar/Navbar'
import Sidebar from '../Sidebar'
import './Order_Details.css'
import { DataList } from "../../DataList";

const Order_Details = () => {

  const [data, setData] = useState(DataList);





  return (
    <>
    
    
    <Navbar />
    <Sidebar />
       <main className="mt-3 pt-3 main_order_detail " >
         <div className="all_store_container">
           <div className="container-fliud">
             <div className="row">
             <div className="dashboard_second">
             <div className="row">
                  <div className="col-lg-8  ">
                    <div className="order_header">
                      <h3>Order Id</h3>
                      <h3>#5157657</h3>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="row">
                    <div className="back_to_previous">
                    <button className='shadow-sm   rounded'>Back To Order</button>
                    </div>
                 
                    </div>
                  </div>
                </div>
             </div>

              <div className="order_details_card_style">
              <div className="row">
            <div className="col-lg-7  shadow-sm p-3  bg-white rounded  order_section">

            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="pills-order-tab" data-bs-toggle="pill" data-bs-target="#pills-order" type="button" role="tab" aria-controls="pills-order" aria-selected="true">Order Details</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-status-tab" data-bs-toggle="pill" data-bs-target="#pills-status" type="button" role="tab" aria-controls="pills-status" aria-selected="false">Product</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-payment-tab" data-bs-toggle="pill" data-bs-target="#pills-payment" type="button" role="tab" aria-controls="pills-payment" aria-selected="false">Payment Details</button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">

            <div class="tab-pane fade show active" id="pills-order" role="tabpanel" aria-labelledby="pills-home-tab">
             
              <div className="order_details_tab_style">
                <div className="row">
                <div className="col-lg-6 ">
                <div className="order_details_box  shadow-sm   bg-white rounded  ">
                  <h6>Overview</h6>
                  <div className="order_details_date">
                    <p>Order Id:</p>
                    <span>98877</span>
                  </div>
                  <div className="order_details_date">
                  <p>Order Status: </p>
                  <span>Pending</span>
                </div>
                <div className="order_details_date">
                <p>Store Name</p>
                <span>Manyavar</span>
              </div>
              <div className="order_details_date">
              <p>Delivery Exe</p>
              <span>Jams</span>
            </div>
            <div className="order_details_date">
            <p> Date</p>
            <span>22, jan 2022, 10:08 am</span>
          </div>
                </div>
                </div>


                <div className="col-lg-6 ">
                <div className="order_invoice  shadow-sm   bg-white rounded ">
                <h6>Invoice</h6>
                  <div className="order_details_date">
                    <p>Promotion:</p>
                    <span>jd10</span>
                  </div>
                  <div className="order_details_date">
                  <p>Product Price: </p>
                  <span>8786</span>
                </div>
                <div className="order_details_date">
                <p>Shipping</p>
                <span>0</span>
              </div>
              <div className="order_details_date">
              <p>Total Payable</p>
              <span>1500</span>
            </div>

                </div>
                </div>

                
                </div>
              </div>
            </div>




            <div class="tab-pane fade" id="pills-status" role="tabpanel" aria-labelledby="pills-profile-tab">
           
            <div className="col-lg-6 ">
              <div className="order_product_tab shadow-sm   bg-white rounded">
            
            <h6>Product Details</h6>
            <div className="product_order_data">
              <p>Product Id</p>
              <span>001</span>
            </div>
            <div className="product_order_data">
            <p>Product Name</p>
            <span>Laptop</span>
          </div>
          <div className="product_order_data">
          <p>Product price</p>
          <span>677</span>
        </div>
        <div className="product_order_data">
        <p>Quantity</p>
        <span>6</span>
      </div>
      <div className="product_order_data">
      <p>size</p>
      <span>Medium</span>
    </div>
              </div>
              </div>

             
         
            
            </div>



            <div class="tab-pane fade" id="pills-payment" role="tabpanel" aria-labelledby="pills-contact-tab">
              <div className="col-lg-12">
                <div className="order_payment_section">
               
                <table class="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Type</th>
                    <th scope="col" > Mode</th>
                    <th scope="col">Amount</th>
                    <th scope="col">tran id</th>
                    <th scope="col">State</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>22 jan 2022</td>
                    <td>Pending</td>
                    <td> Credit Card</td>
                    <td>Rs 757</td>
                    <td> 868</td>
                    <td>
                    <div className="rounded_chip">
                          <span>Completed</span>
                          </div>
                    </td>
                  </tr>
                  
                  
                </tbody>
              </table>
                </div>
              </div>
            
            </div>
          </div>





            </div>
            <div className="col-lg-4  shadow-sm p-3  bg-white rounded   customer_detail_section">
            <div className="row">
            <div className="order_customer_header">
              <h5>Customer Details</h5>
              <button><i class="ri-refresh-line"></i> CHANGE</button>
            
            </div>
            <hr />
            <div className="order_customer_detail_data">
              <div className="order_customer_first_name">
                <span>First Name</span>
                <h6>James</h6>
              </div>
              <div className="order_customer_last_name">
              <span>Last  Name</span>
              <h6>Anderson</h6>
            </div>
            </div>

            <div className="order_customer_detail_data">
              <div className="order_customer_first_name">
                <span>Mobile</span>
                <h6>987876766</h6>
              </div>
              <div className="order_customer_last_name">
              <span>Company</span>
              <h6>shopazard</h6>
            </div>
            </div>

            <div className="order_customer_detail_data">
              <div className="order_customer_first_name">
                <span>Addresh</span>
                <h6>#22, jaynagar 4th </h6>
              </div>
              <div className="order_customer_last_name">
              <span>state</span>
              <h6>Karnataka</h6>
            </div>
            </div>

            <div className="order_customer_detail_data">
              <div className="order_customer_first_name">
                <span>City</span>
                <h6>Bangalore</h6>
              </div>
              <div className="order_customer_last_name">
              <span>Order Type</span>
              <h6>Customer</h6>
            </div>
            </div>


            </div>
            
            </div>
            </div>
            </div>

        
         <div className="col-lg-12  order_product_container">
          <div className="row ">
          <div className="  shadow-sm p-3  bg-white rounded   order_product_section ">
          
           
          <table id="example" className="table table-striped mt-2 table-borderless ">
          <thead className="sticky_header">
            <tr>
              <th  style={{ width: 60 }}>  Id</th>
              <th>Product Name</th>
              <th  style={{ width: 120 }}>image</th>
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
               <td key={id}><NavLink  className="menu_Navlink"  to="/Executive_Details"> {id} </NavLink></td>
                   
                    <td>{name}</td>

              
                    <td> 
                    <img src={image} alt="" width={50} />
                    
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


  )
}

export default Order_Details