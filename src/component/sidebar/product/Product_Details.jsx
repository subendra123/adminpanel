
import React,{useState} from "react";
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../Sidebar";
import "./Product_Details.css";
import { DataList } from "../../DataList";

const Product_Details = () => {
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
                  <h3>Product Id</h3>
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
             <h1>Product Details page</h1>
            </div>





          </div>
        </div>
      </main>
    </>
  );
};

export default Product_Details;
