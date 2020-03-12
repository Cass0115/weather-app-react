import React from 'react';

const Titles = (props) => (
    <div className="title__wrapper">
        <h3>Weather Simplified</h3>
        <h3>Brave the outdoors</h3>

       
        {props.cityID && <p>Location: {props.cityID}</p>}
        {props.temperature && <p>Temperature: {props.temperature} &#8457;</p>}
        <p>{props.description}</p>
        {props.error && <p>{props.error}</p>}
    </div>
);

export default Titles;
