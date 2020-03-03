import React from 'react';
import './App.css';
import Titles from "./components/Titles";
import Form from "./components/Form";
// import Weather from "./components/Weather";
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


  getWeather = async (e) => {
    const cityID = "6173331,1850144,2643743,5809844";
    const data = await fetch(`http://api.openweathermap.org/data/2.5/group?id=${cityID}&appid=${API_KEY}&units=imperial`)
    .then(api_call_onload => api_call_onload.json());
    console.log(data);
      if(cityID) {
        this.setState({
          isLoaded: true,
          temperature: data.main.temp,
          city: data.name,
          description: data.weather[0].description,
          error: ""
        });
      } else {
        this.setState({
            isLoaded: true,
            temperature: undefined,
            city: undefined,
            description: undefined,
            error: "Please enter a city"
        });
      }
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

          {/* <Weather
            temperature={this.state.temperature}
            humitidy={this.state.humidity}
            city={this.state.city}
            country={this.state.country}
            description={this.state.description}
            error={this.state.error}
          /> */}
          
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
