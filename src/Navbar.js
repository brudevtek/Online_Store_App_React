import './navbar-style.css';
import React from 'react';

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
          <div id = "qty_cart" className="qty_cart">
              0
          </div>
          <a href="shopping_cart_page.html"><img src="https://img.icons8.com/ios/50/000000/shopping-cart--v1.png"/></a>
          
      </div>
  </div>)
  } 
 }

export default Navbar;
