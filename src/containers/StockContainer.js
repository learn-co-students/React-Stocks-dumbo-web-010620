import React, { Component } from 'react';
import Stock from '../components/Stock'

/**
{
  id: 1
  name: "Google"
  price: 1194.8
  ticker: "GOOG"
  type: "Tech"
}
 */

class StockContainer extends Component {

  render() {
    // console.log("stocks data console.logged via this.props.stocks in stocksContainer ", this.props.stocks)

    const allStocks = this.props.stocks.map( 
      stockObj => 
      <Stock
        key={stockObj.id}
        stock={stockObj}
        addToPortfolio={this.props.addToPortfolio}
      />
      )
    return (
      <div>
        <h2>Stocks</h2>
        { //render the list of stocks here
          allStocks
        }
      </div>
    );
  }
}

export default StockContainer;
