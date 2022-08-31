import React,{useState} from "react";
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../Sidebar";
import "./Store_Details.css";
import { DataList } from "../../DataList";

const Store_Details = () => {
  const [data, setData] = useState(DataList);
  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="mt-3 pt-3 ">
        <div className="store_details_container ">
          <div className="container-fliud">
            <div className="row">
              <div className="col-lg-8  ">
                <div className="store_header">
                  <h3>Store Id</h3>
                  <h3>#5157657</h3>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="row">
                  <div className="back_to_previous">
                    <button className="shadow-sm   rounded">
                      Back To Store
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="row m-2">
              <div className="col-lg-8">
                <div className="store_leftside_container  shadow-sm p-3  bg-white rounded ">
                  <div className="row ">
                <div className="col-lg-5 ">

               
            <div className="order_customer_detail_data">
            <div className="order_customer_first_name">
              <span>Store Id</span>
              <h6>#86868</h6>
            </div>
            <div className="order_customer_last_name">
            <span>Store Name</span>
            <h6>Manyavar</h6>
          </div>
          </div>
         
          <div className="order_customer_detail_data">
          <div className="order_customer_first_name">
            <span>Mobile</span>
            <h6>8797886868</h6>
          </div>
          <div className="order_customer_last_name">
          <span>Addresh</span>
          <h6>Jaynagar</h6>
        </div>
        </div>

        <div className="order_customer_detail_data">
        <div className="order_customer_first_name">
          <span>Email</span>
          <h6>manya123@gmial.com</h6>
        </div>
        <div className="order_customer_last_name">
        <span>Alt Mobile</span>
        <h6>88685868</h6>
      </div>
      </div>
       
                
                </div>
                  <div className="col-lg-7">
                  <div className="order_customer_detail_data">
                  <div className="order_customer_first_name">
                    <span>Store Status</span>
                    <h6>Accepted</h6>
                  </div>
                  <div className="order_customer_last_name">
                  <span>GSTIN</span>
                  <h6>686</h6>
                </div>
                </div>
                <div className="order_customer_detail_data">
                  <div className="order_customer_first_name">
                    <span>Product Category</span>
                    <h6>Electronics</h6>
                  </div>
                  <div className="order_customer_last_name">
                  <span> Exchange</span>
                  <h6>Not Yet</h6>
                </div>
                </div>
               
                  </div>
                  </div> 
                </div>
              </div>

              <div className="col-lg-4">
                <div className="store_rightside_container  shadow-sm p-3  bg-white rounded ">
                <div className="store_details_header">
                  <h6>Store Banking Details</h6>
                
                </div>

                <div className="order_customer_detail_data">
                <div className="order_customer_first_name">
                  <span>Bank Account ID</span>
                  <h6>878768</h6>
                </div>
                <div className="order_customer_last_name">
                <span>Holder Name</span>
                <h6>James</h6>
              </div>
              </div>

              <div className="order_customer_detail_data">
              <div className="order_customer_first_name">
                <span>Bank Name</span>
                <h6>HDFC Bank</h6>
              </div>
              <div className="order_customer_last_name">
              <span>IFSC CODE &nbsp;&nbsp;</span>
              <h6>KTB8977</h6>
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

export default Store_Details;
