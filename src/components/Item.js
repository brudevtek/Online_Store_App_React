
import React, { Component } from 'react';
// import { goPremium } from '../CartIcon';





const DataToStore = []
const QtyInCart=[]


const StoredData= JSON.parse(window.localStorage.getItem('DataHub'))

class Item extends Component{
  
    constructor(props) {
    
      super(props);
      this.state =  { 
          count: 0 , 
          id:this.props.id};
     
    }

      componentDidMount() {  
        // Check if there any data in the local storage. If not just set the count to 0
      if (StoredData){
        
        const NewCounter=(StoredData.find((x)=> x.id ===this.props.id).count)
        this.setState({count: NewCounter})
        QtyInCart.push(this.state.count)

      } else{
        this.setState({count: 0})

      }
    }

      IncreaseByOne = (id) => {
        
        
        this.setState({count: this.state.count + 1,id:this.props.id })

        
        
      }

      DecreaseByOne = (id) => {

        if (this.state.count ===0){
            // do nothing
        } else {
            this.setState({count: this.state.count - 1,id:this.props.id })
            }     

        }
        
      
      componentDidUpdate() {
        //When there are any changes to the component, push the current state to DataToStore array and store it 
        
        const zz=DataToStore.find((y) => y.id ===this.state.id)
        if(zz===undefined){
          DataToStore.push(this.state)
        }else {
          zz.count=(this.state.count)
        }
        const QtySum= DataToStore.map(x => x.count)
        
        const TotalQtyInCart = QtySum.reduce((a, b) => {
          return a + b;
        });
        


        window.localStorage.setItem('Total', JSON.stringify(TotalQtyInCart));
        

        window.localStorage.setItem('DataHub', JSON.stringify(DataToStore));

        
        
       

      }

      render(){
        return(
          <div className="item">
            <div className="itemcard_up">
                <img src={this.props.image} alt="item" />
                <h1>{this.props.name}</h1>
                <p>{this.props.desc}</p>
              <div className="itemcard_down">
                  <div className="total_price">
                      <h2>$ {this.props.price}</h2>  
                  </div>
                  <div className="item_icons">
                      <div>
                          <i onClick={() => {this.DecreaseByOne(this.props.id)}}>-</i>  
                      </div>
                      <div className="one_item_counter">
                          <h1>{this.state.count}</h1>
                      </div>
                      <div>
                          <i onClick={() => {this.IncreaseByOne(this.props.id)}}>+</i>
                       </div>
                  </div>
              </div>
            </div>
        </div>
   
    
        );
    }}

export default Item;





