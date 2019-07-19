import React, { Component } from 'react';
import './App.css';
import Page from './components/Page';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {currentPage: 'weather'};
    this.switchToWeatherPage = this.switchToWeatherPage.bind(this);
    this.switchToNormalPage = this.switchToNormalPage.bind(this);
  }

  switchToWeatherPage() {
    this.setState(state => ({
      currentPage: 'weather'
    }));
  }

  switchToNormalPage() {
    this.setState(state => ({
      currentPage: 'page'
    }));
  }

  render() {
    return (
      <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Navigation</a>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={this.switchToWeatherPage}>
                Weather Forecast
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#" onClick={this.switchToNormalPage}>
                Second Page
                </a>
              </li>
          </ul>

        </div>
      </nav>

      <div className="container">
      <Page page={this.state.currentPage}/>
      </div>
    </div>
    );
  }
}
export default App