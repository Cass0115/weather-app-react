import React from 'react';

const Titles = (props) => (
    <div>
        <h1 className="title-container__title">Weather Finder</h1>
        <h3 className="title-container__subtitle">Find out temperature, conditions and more...</h3>

        {props.cityID && <p>Location: {props.cityID}</p>}
        {props.temperature && <p>Temperature: {props.temperature} &#8457;</p>}
        <p>{props.description}</p>
        {props.error && <p>{props.error}</p>}
    </div>
);

export default Titles;