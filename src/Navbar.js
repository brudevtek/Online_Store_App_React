import './navbar-style.css';
import React from 'react';
import CartIcon from "./CartIcon"



class Navbar extends React.Component{

   render(){
    
    return(
      <div className="nav_bar">
      <div className="logo">
          <a href="index.html"><header>cool outfit</header></a>
      </div>
      <div className="menu">
          <ul>
              <li><a href="">men</a></li>
              <li><a href="">women</a></li>
              <li><a href="">kids</a></li>
          </ul> 
      </div>
      <div className="cart_class">
      <CartIcon/>
    <a href="shopping_cart_page.html"><img src="https://img.icons8.com/ios/50/000000/shopping-cart--v1.png" alt="cart"/></a>
          
      </div>
  </div>)
  } 
 }

export default Navbar;
