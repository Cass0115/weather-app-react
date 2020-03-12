import React from 'react';


// class Form extends React.Component {
//     render() {
//         return(
//             <form onSubmit={this.props.getWeather}>
//                 <input type="text" name="city" placeholder="City" />
//                 {/* <input type="text" name="country" placeholder="Country" /> */}
//                 <button>Get Weather</button>
//             </form>
//         )
//     }
//  } 

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
