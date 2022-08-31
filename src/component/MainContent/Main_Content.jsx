import React, {useState} from 'react'
import { DataList } from '../DataList';
import './Main_content.css'


const Main_Content = () => {
  const [data, setData] = useState(DataList);
  return (
    <>
   
   
    <main className="mt-3 pt-3 ">
   
    <div className="dashboard_second">
    <div className="row">
      <div className="col-lg-6 ">
        <div className="dashboar_text">
          <h4>Dashboard</h4>
          <p>Here's your analytics details</p>
        </div>
      </div>

      <div className="col-lg-6 ">
        <div className="row">
         
         
        </div>
      </div>
    </div>
  </div>


  <div className="credit_card_style_section">
  <div className="row row-cols-auto">
  <div className="col-lg-4 ">
  <div className="credit_card_box">
    <div className="row">
    <div className="col-lg-12 ">
      <div className="main_content_text">
      <span>Orders</span>
      </div>
      <div className="dollar_amount">
      
          <h1>289</h1>
          <p>(Pending)</p>
        </div>
    <div className="dollar_date">
    <p>Total - 900 </p>
    </div>
    <div className="dollar_button">
      <div className="widthdrow_button">
      <button>View</button>
      </div>
      <div className="link_account">
      <button>History</button>
      </div>
    </div>

    </div>
    
    </div>
    </div>
  </div>

  <div className="col-lg-4 ">
  <div className="credit_card_box">
    <div className="row">
    <div className="col-lg-12">
      <div className="main_content_text">
      <span>Stores</span>
      </div>
      <div className="dollar_amount">
       
          <h1>289</h1>
          <p>(Accepted)</p>
        </div>
    <div className="dollar_date">
    <p>Total - 900 </p>
    </div>
    <div className="dollar_button">
      <div className="widthdrow_button">
      <button>View</button>
      </div>
      <div className="link_account">
      <button>History</button>
      </div>
    </div>

    </div>
    
    </div>
    </div>
  </div>


  <div className="col-lg-4 ">
  <div className="credit_card_box">
    <div className="row">
    <div className="col-lg-12">
      <div className="main_content_text">
      <span>Executives</span>
      </div>
      <div className="dollar_amount">
       
          <h1>499</h1>
          <p>(Verified)</p>
        </div>
    <div className="dollar_date">
    <p>Total - 900 </p>
    </div>
    <div className="dollar_button">
      <div className="widthdrow_button">
      <button>View</button>
      </div>
      <div className="link_account">
      <button>History</button>
      </div>
    </div>

    </div>
    
    </div>
    </div>
  </div>


  </div>
</div>



<div className="table_container_style">
<div className="row">
<div className="col-lg-12 col-md-9 col-12 ">
<div className="table_box_container">
<div className="table_header_style">

<div className="table_text">
<h4>Customer</h4>
<p>Keep track of customer statics</p>
</div>

<div className="nav_search_style">
<i class="ri-search-line"></i>
<input
type="text"
name="search"
placeholder="search product"
/>
</div>



</div>
<div className="table_hr">
<hr />
</div>


<table className="table table-borderless table_style">

<tr>
<div  className="Table_Heading_data">

  <div className="heading_name">
  <th><span>Name <i class="ri-arrow-down-s-fill"></i></span></th>
  </div>

  <div className="heading_Status">
  <th><span>Status <i class="ri-arrow-down-s-fill"></i></span></th>
  </div>
 
  <div className="heading_Order">
  <th><span> Order <i class="ri-arrow-down-s-fill"></i></span></th>
  </div>

  <div className="heading_Store">
  <th><span> Store <i class="ri-arrow-down-s-fill"></i></span></th>
  </div>

  <div className="heading_Store">
  <th><span> Store Name <i class="ri-arrow-down-s-fill"></i></span></th>
  </div>

  <div className="heading_Sales">
  <th><span> Sales <i class="ri-arrow-down-s-fill"></i></span></th>
  </div>
</div>
</tr>



<tr>

{
  data.map((CurrElem, index)=> {
    return (
      <>
      <div className="customer_table_data">

  <div className="customer_data_name">
  <td>
      <div className="customer_data_name_image">
          <img src={CurrElem.exeimg} width="50" height="40px" alt="" />
          <h5>{CurrElem.executive}</h5>
        
      </div>
      </td>
  </div>
<div className="customer_data_name">
         <td>
         <div class="chip">
         Processing
         
       </div>
         </td>
    </div>
<div className="customer_data_name">
       <td>
       <div className="customer_data_order">
        <h5>{CurrElem.price}</h5>
       </div>
       </td>
  </div>
<div className="customer_data_name">
     <td>
     <div class="chip">
    manyavar
         
       </div>
     </td>
</div>

<div className="customer_data_name">
     <td>
     <div class="chip">
    Bangalore
         
       </div>
     </td>
</div>
<div className="customer_data_name">
  <td>
  <div className="customer_data_order">
  <h5>{CurrElem.price}</h5>
 </div>
  </td>
</div>
</div>
<div className="table_hr">
<hr />
</div>

      
      </>
    )
  })
}


</tr>

</table>

</div>


</div>
</div>
</div>

    </main>

  

    

 
    
    </>
  )
}

export default Main_Content