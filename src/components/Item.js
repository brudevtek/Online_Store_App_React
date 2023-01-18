import React, { useState} from 'react';




const Item = (props) =>{
  
  
     return(
      
       <div className="item">
         <div className="itemcard_up">
             <img src={props.image} alt="item" />
             <h1>{props.name}</h1>
             <p>{props.desc}</p>
           <div className="itemcard_down">
               <div className="total_price">
                   <h2>$ {props.price}</h2>  
               </div>
               <div className="item_icons">
                   <div>
                       <i>-</i>  
                   </div>
                   <div className="one_item_counter">
                       <h1>0</h1>
                   </div>
                   <div>
                       <i>+</i>
                    </div>
               </div>
           </div>
         </div>
     </div>

 
     );
     

   }

export default Item;
