import React, { Component } from 'react';
import * as weather from 'openweather-apis';

// main nav area  
// this is the first page which 
// weather infomation

class Weather extends Component {
    API_ID = '4f47a0059d2fc18089608cdeec0cd363';

    constructor(props) {
        super(props);

    // initialize the weather as nothing
        this.state = {
            weatherInformation: 'Choose a city from the above list.',
            city: 'Cape Town',
        };

    // attach these methods to this weather component so we can 
    // change the state when the weather information comes through
        this.displayTemperature = this.displayTemperature.bind(this);
        this.changeCity = this.changeCity.bind(this);

    // set weather API options
    // ===========
    // this is set at Farenheit or Degrees
        weather.setUnits('metric');

    // set the API ID
        weather.setAPPID(this.API_ID);
    }

    // this updates the temperature value in the component state
    displayTemperature(error, temperatureValue) {
        this.setState(state => ({
            weatherInformation: `The temperature in ${this.state.city} is currently: ${temperatureValue} degrees celcius.`,
        }));
    }

    // this updates the city value in the component state
    changeCity(cityName) {
        this.setState(state => ({
            city: cityName,
    // this gives a signal while server renders next page
            weatherInformation: 'Loading...',
        }));

    // this gets the weather information
        weather.getTemperature(this.displayTemperature);
    }

    render() {
    // city is set in here 
        weather.setCity(this.state.city);

        return (
            <div style={{ backgroundColor: this.props.color }}>
                <h1>
                    {this.props.title}
                </h1>

                <hr></hr>

                <div className="container">
                    <div>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown">
                                {this.state.city}
                            </button>

                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" onClick={e => this.changeCity('Cape Town', e)} href="#">Cape Town</a>
                                <a className="dropdown-item" onClick={e => this.changeCity('Wellington', e)} href="#">Wellington</a>
                                <a className="dropdown-item" onClick={e => this.changeCity('Paarl', e)} href="#">Paarl</a>
                                <a className="dropdown-item" onClick={e => this.changeCity('Somerset West', e)} href="#">Somerset West</a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-3">
                        {this.state.weatherInformation}
                    </div>
                </div>
            </div>
        )
    }
}
export default Weather