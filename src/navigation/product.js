import React from 'react';
import  './navigation.css';
import {productList} from './list'



//to change state we have to use class method
// if we are using class method

class ProductListexport extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            product:productList,
            add: 2+3
        }
    }
    plus = index => {
        this.state.product[index].quantity +=1;
        this.setState(state => {
            return  {product:state.product}
        })
    }
    minus = index => {
        this.state.product[index].quantity -= 1;
        this.setState({
            product:this.state.product
        })
    }
    addNumber = (a,b) => {
        this.setState({
            add:a+b
        })
    }
    
    render(){
        const productItem = productList.map((listName,index) =>
            <li key ={index}><a href="investment" className="abc" title="Investments">{listName.name}</a>
                <span>{listName.quantity}</span>
                <button onClick={() => this.plus(index)} >+</button>
                <button onClick={this.minus.bind(this, index)}>-</button>
            </li>
        );
        return(
            <div>
                <ul className="inventery">
                    {productItem}
                    
                </ul>

                
                <h1>{this.state.add}</h1>
                <p>{this.state.check}</p>
            </div>
        )
    }
    
}
export default ProductListexport;