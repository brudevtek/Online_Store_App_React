
import React, { Component } from 'react';


//  const bucket= JSON.parse(localStorage.getItem("data")) || 0;

const dataHub = [{}]

class Item extends Component{
    constructor() {
        super();
        // this.state = JSON.parse(window.localStorage.getItem('state')) || { 
        //     counter: 0 , 
        //     id:0};
      this.state = { 
        counter: 0 , 
        id:0};
            
      }
      
      componentDidMount() {  
        // window.localStorage.setItem('state', JSON.stringify(this.state));
        // const dataHub=[{}]
        
            
      }

    //   setState(state) {
    //     window.localStorage.setItem('state', JSON.stringify(state));
    //     super.setState(state);
    //   }

    

      IncreaseByOne = (id) => {
        
        this.setState({counter: this.state.counter + 1,id:this.props.id })
        
      }
      DecreaseByOne = (id) => {
        if (this.state.counter ===0){
            // do nothing
        } else {
            this.setState({counter: this.state.counter - 1,id:this.props.id })
            }
            
          
            

        }
        
      
      componentDidUpdate() {
        // localStorage.setItem('state', JSON.stringify(this.state))
        const zz=dataHub.find((y) => y.id ===this.state.id)
        if(zz===undefined){
          dataHub.push(this.state)
        }else {
          zz.counter=(this.state.counter)
        }
        

        
        window.localStorage.setItem('DataHub', JSON.stringify(dataHub));
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
                          <h1>{this.state.counter}</h1>
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
