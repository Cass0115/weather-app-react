import React from 'react';
import { ReactComponent as clearSky }  from './images/clear-sky.svg';


class Weather extends React.Component {
    render() {
        return (
            <div className="weather__wrapper weather">

                <div className="content__block">
                    <div className="city__name">
                        <p>Los Angeles</p>
                    </div>
                    <div className="weather__temp">
                        {this.props.temperature && <p>{this.props.temperature} &#8457;</p>}
                    </div>
                    <div className="weather__icon">
                        <clearSky />
                        
                        
                    </div>
                    {/*  
                    <div className="weather__icon">
                        <img src="">Icon of weather depending on said weather 
                    </div>
                    */}
                    <div className="weather__extra-info">
                        <p>Low</p>
                        {this.props.minimum && <p> {this.props.minimum} &#8457;</p>}
                        <p>High</p>
                        {this.props.maximum && <p> {this.props.maximum} &#8457;</p>}
                        <p>Cloud coverage</p>
                        {this.props.cloud && <p>{this.props.cloud}%</p>}
                        <p>Humidity</p>
                        {this.props.humidity && <p>{this.props.humidity}%</p>}
                    </div>
                    

                </div>

                <div className="content__block">
                    <div className="city__name">
                        <p>New York</p>
                    </div>
                    <div className="weather__temp">
                        {this.props.temperature1 && <p>{this.props.temperature1} &#8457;</p>}
                    </div>
                    <div className="weather__icon">
                        {/* <img src="">Icon of weather depending on said weather */}
                    </div>
                    <div className="weather__extra-info">
                        <p>Low</p>
                        {this.props.minimum1 && <p> {this.props.minimum1} &#8457;</p>}
                        <p>High</p>
                        {this.props.maximum1 && <p> {this.props.maximum1} &#8457;</p>}
                        <p>Cloud coverage</p>
                        {this.props.cloud1 && <p>{this.props.cloud1}%</p>}
                        <p>Humidity</p>
                        {this.props.humidity1 && <p>{this.props.humidity1}%</p>}
                    </div>
                    

                </div>

                <div className="content__block">
                    <div className="city__name">
                        <p>London</p>
                    </div>
                    <div className="weather__temp">
                        {this.props.temperature2 && <p>{this.props.temperature2} &#8457;</p>}
                    </div>
                    <div className="weather__icon">
                        {/* <img src="">Icon of weather depending on said weather */}
                    </div>
                    <div className="weather__extra-info">
                        <p>Low</p>
                        {this.props.minimum2 && <p> {this.props.minimum2} &#8457;</p>}
                        <p>High</p>
                        {this.props.maximum2 && <p> {this.props.maximum2} &#8457;</p>}
                        <p>Cloud coverage</p>
                        {this.props.cloud2 && <p>{this.props.cloud2}%</p>}
                        <p>Humidity</p>
                        {this.props.humidity2 && <p>{this.props.humidity2}%</p>}
                    </div>
                    

                </div>

                <div className="content__block">
                    <div className="city__name">
                        <p>Tokyo</p>
                    </div>
                    <div className="weather__temp">
                        {this.props.temperature3 && <p>{this.props.temperature3} &#8457;</p>}
                    </div>
                    <div className="weather__icon">
                        {/* <img src="">Icon of weather depending on said weather */}
                    </div>
                    <div className="weather__extra-info">
                        <p>Low</p>
                        {this.props.minimum3 && <p> {this.props.minimum3} &#8457;</p>}
                        <p>High</p>
                        {this.props.maximum3 && <p> {this.props.maximum3} &#8457;</p>}
                        <p>Cloud coverage</p>
                        {this.props.cloud3 && <p>{this.props.cloud3}%</p>}
                        <p>Humidity</p>
                        {this.props.humidity3 && <p>{this.props.humidity3}%</p>}
                    </div>
                    

                </div>
            </div>

        )
    }
}

export default Weather;