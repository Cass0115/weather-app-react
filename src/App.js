import React from 'react';
import './App.css';
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Forecast from "./components/Forecast";
// import * as reactRouter from "react-router";


const API_KEY = "0d1548ee736784b23abbe6a2cce6a6a6";



class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    forecast_date: undefined,
    error: undefined
  }



componentDidMount() {
    const cityID = "6173331,1850144,2643743,5809844";
    const data = fetch(`http://api.openweathermap.org/data/2.5/group?id=${cityID}&appid=${API_KEY}&units=imperial`)
      .then((response) => response.json())
      .then((object) => {
        
        console.log(object.list);
        console.log(object.list[1].name);
        console.log(object.list[1].main.temp);

        console.log(object.list[2].name);
        console.log(object.list[2].main.temp);

        console.log(object.list[3].name);
        console.log(object.list[3].main.temp);
        if(object) {
          return this.setState({
            isLoaded: true,
            // city: object.list[0].main.temp,
            temperature: Math.round(object.list[0].main.temp),
            description: object.list[0].weather[0].main,


            // city1: object.list[1].main.temp,
            temperature1: Math.round(object.list[1].main.temp),
            description1: object.list[1].weather[0].main,

            temperature2: Math.round(object.list[2].main.temp),
            description2: object.list[2].weather[0].main,

            temperature3: Math.round(object.list[3].main.temp),
            description3: object.list[3].weather[0].main,
          })
        } else {
          this.setState({
             isLoaded: true,
             temperature: undefined,
             city: undefined,
             description: undefined,
             error: "Oppps something went wrong"
            });
          }
      })
}

  getForecast = async (e) => {
    e.preventDefault();
    const forecast_city = e.target.elements.city.value;
    const forecast_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${forecast_city}&appid=${API_KEY}&units=imperial&cnt=40`);
    const forecast_data = await forecast_call.json();
    if(forecast_city) {
      this.setState({
        forecast_city: forecast_data.city.name,

        forecast: Math.round(forecast_data.list[7].main.temp),
        forecast1: Math.round(forecast_data.list[15].main.temp),
        forecast2: Math.round(forecast_data.list[23].main.temp),
        forecast3: Math.round(forecast_data.list[31].main.temp),
        forecast4: Math.round(forecast_data.list[39].main.temp),
        
        
        forecast_date: forecast_data.list[7].dt_txt,
        forecast_date1: forecast_data.list[15].dt_txt,
        forecast_date2: forecast_data.list[23].dt_txt,
        forecast_date3: forecast_data.list[31].dt_txt,
        forecast_date4: forecast_data.list[39].dt_txt,
        error: ""
      })
      console.log(this.forecast);
    } else {
      this.setState({
        forecast: undefined,
        forecast_city: undefined,
        forecast_date: undefined,
        error: "Please enter a city"
    })
  }
}

  
  render() { 
    return (
      
        <div className="wrapper"> 
          <Titles />
          
          {/* <Form getWeather={this.getWeather}/> */}

          <Form getForecast={this.getForecast}/>   


          <Weather
            temperature={this.state.temperature}
            humitidy={this.state.humidity}
            city={this.state.city}
            country={this.state.country}
            description={this.state.description}
            
            temperature1={this.state.temperature1}
            description1={this.state.description1}

            temperature2={this.state.temperature2}
            description2={this.state.description2}

            temperature3={this.state.temperature3}
            description3={this.state.description3}

            temperature4={this.state.temperature4}
            description4={this.state.description4}
            
            error={this.state.error}


          />
          
          <Forecast 

            forecast_city={this.state.forecast_city}
            
            forecast={this.state.forecast}
            forecast1={this.state.forecast1}
            forecast2={this.state.forecast2}
            forecast3={this.state.forecast3}
            forecast4={this.state.forecast4}

            
            forecast_date={this.state.forecast_date}
            forecast_date1={this.state.forecast_date1}
            forecast_date2={this.state.forecast_date2}
            forecast_date3={this.state.forecast_date3}
            forecast_date4={this.state.forecast_date4}

            error={this.state.error}
          />
        </div>
    
    );
  }
}

export default App;
