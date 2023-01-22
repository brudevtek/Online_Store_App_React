
import React from 'react';
import Navbar from "./Navbar"
import ItemList from "./components/ItemList"
import shopitems from "./ShopItems"





const App =() => {
      return(
        <>
            <Navbar/>
            <ItemList listOfItems={shopitems}/>
        </>
      )}



export default App;


