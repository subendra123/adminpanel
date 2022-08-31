import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <>

      
    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
      Button with data-bs-target
    </button>
    
    <div 
        class="offcanvas offcanvas-start sidebar-nav" 
        tabindex="-1" id="offcanvasExample" 
        aria-labelledby="offcanvasExampleLabel">

      <div class="offcanvas-header">
      
        <button type="button" data-bs-dismiss="offcanvas" aria-label="Close"><i class="ri-close-line"></i></button>
      </div>


      <div class="offcanvas-body">
       
    <div className="sidebar_Container">
   

    <div className="main_Menu_text">
      <p>MAIN MENU</p>
    </div>

    <div className="sidebar_menu_dashboard">
      <div className="menu_icon">
        <i class="ri-dashboard-line"></i>
      </div>
      <div className="menu_text">

        <li>Dashborad</li>
      </div>
    </div>

    <div className="sidebar_menu">
      <div className="menu_icon">
        <i class="ri-user-line"></i>
      </div>
      <div className="menu_text">
      <NavLink className="menu_Navlink" to="/All_Store"><li>Store</li> </NavLink>
       
      </div>
      <div className="menu_right_icon">
        <i class="ri-arrow-down-s-line"></i>
      </div>
    </div>
    <div className="sidebar_menu">
      <div className="menu_icon">
        <i class="ri-shopping-cart-line"></i>
      </div>
      <div className="menu_text">
      <NavLink className="menu_Navlink" to="/All_Order"><li>Order</li> </NavLink>
       
      </div>
      <div className="menu_right_icon billing_icon ">
        <i class="ri-arrow-down-s-line billing "></i>
      </div>
    </div>

    <div className="sidebar_menu">
      <div className="menu_icon">
      <i class="ri-product-hunt-line"></i>
      </div>
      <div className="menu_text">
      <NavLink className="menu_Navlink" to="/All_Product"><li>Product</li> </NavLink>
      </div>
    </div>
    <div className="sidebar_menu">
      <div className="menu_icon">
        <i class="ri-file-chart-line"></i>
      </div>
      <div className="menu_text">
      <NavLink className="menu_Navlink" to="/All_Executive"><li>Executive</li> </NavLink>
      </div>
    </div>

    <div className="sidebar_menu">
    <div className="menu_icon">
      <i class="ri-file-chart-line"></i>
    </div>
    <div className="menu_text">
    <NavLink className="menu_Navlink" to="/All_customer">Customer </NavLink>
     
    </div>
  </div>

    <div className="divider">
      <hr />
    </div>

    <div className="main_Menu_text">
      <p>SUPPORTS</p>
    </div>
    <div className="sidebar_menu">
      <div className="menu_icon">
        <i class="ri-mail-line"></i>
      </div>
      <div className="menu_text">
        <li>Messages</li>
      </div>
    </div>
    <div className="sidebar_menu">
      <div className="menu_icon">
        <i class="ri-question-line"></i>
      </div>
      <div className="menu_text">
        <li>Helps</li>
      </div>
    </div>

    <div className="sidebar_menu">
      <div className="menu_icon">
        <i class="ri-settings-2-line"></i>
      </div>

      <div className="menu_text">
        <li>Setting</li>
      </div>
      <div className="menu_right_icon">
        <i class="ri-arrow-down-s-line"></i>
      </div>
    </div>
  </div>



      </div> 
    </div>   
    </>

  )
}

export default Sidebar