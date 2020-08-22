import React from 'react';

var toggleWeather = document.querySelector('.weather_search');
var removeWeather = document.querySelector('.weather__wrapper weather');
// toggleWeather.addEventListener('click', function(e){
//     removeWeather.classList.add('remove');
// });

const Form = (props) => (
    <form onSubmit={props.getForecast}>
        <input className="weather_search" type="text" name="city" placeholder="Search" />
        <button className="weather_search_button">Get Weather</button>
        {/* <button onClick={() => this.handleClick()}>
            Get Weather
        </button> */}
    </form>
 );

export default Form;
