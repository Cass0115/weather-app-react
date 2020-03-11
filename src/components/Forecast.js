import React from 'react';


const Forecast = (props) => (
    <div className="forecast">
        {props.forecast_city && <p>Location: {props.forecast_city}</p>}
        {/* today (0) */}
        {props.forecast && <p>Temperature: {props.forecast} &#8457;</p>}
        {props.forecast_date && <p>Date: {props.forecast_date} </p>}

        {/* tomorrow (1) */}
        {props.forecast1 && <p>Temperature: {props.forecast1} &#8457;</p>}
        {props.forecast_date1 && <p>Date: {props.forecast_date1} </p>}
        

        {/* (2)  */}
        {props.forecast2 && <p>Temperature: {props.forecast2} &#8457;</p>}
        {props.forecast_date2 && <p>Date: {props.forecast_date2} </p>}

        {/* (3)  */}
        {props.forecast3 && <p>Temperature: {props.forecast3} &#8457;</p>}
        {props.forecast_date3 && <p>Date: {props.forecast_date3} </p>}

        {/* (4)  */}
        {props.forecast4 && <p>Temperature: {props.forecast4} &#8457;</p>}
        {props.forecast_date4 && <p>Date: {props.forecast_date4} </p>}

        <p>{props.description}</p>
        {props.error && <p>{props.error}</p>}
    </div>
)

export default Forecast;