import { Component } from "react";

// const Total = JSON.parse(window.localStorage.getItem('Total'))
// const goPremium = () =>{
//     this.setState({
//       Total:JSON.parse(window.localStorage.getItem('Total'))
//     })
//   }

class CartIcon extends Component {
    constructor(){
        super()
        this.state={
          Total : JSON.parse(window.localStorage.getItem('Total'))
        }
      }

 
    
    render() {
        return(
        <div id = "qty_cart" className="qty_cart">
            {this.state.Total}
        </div>
        )}
    }


export default CartIcon;
// export {goPremium};