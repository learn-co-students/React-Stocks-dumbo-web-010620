import React from 'react'

/**
{
  id: 1
  name: "Google"
  price: 1194.8
  ticker: "GOOG"
  type: "Tech"
}
 */

const Stock = (props) => (
  <div onClick={() => props.addToPortfolio ? props.addToPortfolio(props.stock) : props.removeFromPortfolio(props.stock)} >

    <div className="card">
      <div className="card-body">
        <h5 className="card-title"> {
            //Company Name
            props.stock.name
          }</h5>
        <p className="card-text">{
            //ticker: stock price
            props.stock.ticker
          }: {props.stock.price} </p>
      </div>
    </div>


  </div>
);

export default Stock
