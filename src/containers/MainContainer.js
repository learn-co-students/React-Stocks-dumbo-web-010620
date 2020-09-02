import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

/**
 * I think the fetch can go in the MainContainer render() instead of in the app component since
 * the App component only contains two children: MainContainer and Header
 * MainContainer needs to pass down information to its children
 * Header is just a static/presentational component, so it doesn't need access to that info
 * Therefore the most direct way to start piping information into the frontend from the backend
 * is by collecting it in the MainContainer component.
 * 
 * HMMMM
 * do i want it below the render or in the component did mount? I think CDM
 */

class MainContainer extends Component {

  state = {
    stocks: [],
    displayStocks: [],
    portfolioStocks: [],
  }

  componentDidMount(){
    const stocksAPI = 'http://localhost:3000/stocks'
    fetch(stocksAPI)
      .then(response => response.json())
      .then(stocksData => this.setState({stocks: stocksData, displayStocks: stocksData}))
  }

  addToPortfolio = (stock) => {
    this.setState({
      portfolioStocks: [...this.state.portfolioStocks, stock]
    })
  }

  removeFromPortfolio = (stock) => {
    const newPortfolioStocks = [...this.state.portfolioStocks.filter(
      oldStock => oldStock.id !== stock.id
      )
    ]

    this.setState({
      portfolioStocks: newPortfolioStocks
    })
  }

  filterStocks = filterBy => {
    console.log(filterBy)

    this.setState({displayStocks: this.state.stocks.filter(stock => stock.type === filterBy)})
  }

  sortStocks = (sortBy) => {
    let arr = []
    switch(sortBy) {
      case 'Alphabetically':
        arr = this.state.displayStocks.sort((a,b) => a.name > b.name ? 1 : -1)
        break;
      case "Price":
        arr = this.state.displayStocks.sort((a,b) => a.price > b.price ? 1 : -1)
        break;
      default:
        console.log("wrong choice")
    }
    this.setState({displayStocks: arr})
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <SearchBar sortStocks={this.sortStocks} filterStocks={this.filterStocks} />

          <div className="row">
            <div className="col-8">

              <StockContainer 
                stocks={this.state.displayStocks} 
                addToPortfolio={this.addToPortfolio}

              />

            </div>
            <div className="col-4">

              <PortfolioContainer 
                portfolioStocks={this.state.portfolioStocks}
                removeFromPortfolio={this.removeFromPortfolio}
              />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
