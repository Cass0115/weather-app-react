import React from 'react';

function addClass(){
  var toggleWeather = document.querySelector('weather');
  toggleWeather.classList.add('remove');
};

const Form = (props) => (
    <form onSubmit={props.getForecast}>
        <input className="weather_search" type="text" name="city" placeholder="Search" />
         {/* <input type="text" name="country" placeholder="Country" /> */}
        <button className="weather_search_button">Get Weather</button>
        {/* <button onClick={() => this.handleClick()}>
            Get Weather
        </button> */}
    </form>
 );

export default Form;
