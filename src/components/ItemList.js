import React from "react"
import shopitems from "../ShopItems"
import Item from "./Item"
import "../shop-item-style.css"

const ItemList = ({listOfItems}) => {
       return (
        <div className="items_page">
            {listOfItems.map((user,index)=>{
        return <Item key={index} id={shopitems[index].id} image={shopitems[index].img} name={shopitems[index].name} desc={shopitems[index].desc} price={shopitems[index].price}/>
    })}
        </div>)
        
        
    }

export default ItemList;