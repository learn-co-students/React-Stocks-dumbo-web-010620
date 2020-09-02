import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    // this is just where you structure the information you want
    const portfolioStocks = this.props.portfolioStocks.map(
      stock => <Stock key={stock.id} stock={stock} removeFromPortfolio={this.props.removeFromPortfolio} />
    )
    return (
      <div>
        <h2>My Portfolio</h2>
          { portfolioStocks
            //render your portfolio stocks here
          }
      </div>
    );
  }

}

/**
 * this is where you show it.
 * the dual uses of render are a good example of poor/ambiguous word choice
 * that naturally confuses beginners 
 * above usage is render as a React keyword meaning something similar to compiling 
 * below usage is render in the sense of (show this as CSS/HTML/JSX) 
 **/

export default PortfolioContainer;
