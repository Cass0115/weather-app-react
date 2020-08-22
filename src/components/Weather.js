import React from 'react';

import { ReactComponent as BrokenCloudsWhite }  from './images/BrokenCloudsSelected.svg';
import { ReactComponent as FewCloudsWhite }  from './images/FewCloudsSelected.svg';
import { ReactComponent as RainSelectedWhite }  from './images/RainSelected.svg';
import { ReactComponent as ScatteredCloudsSelectedWhite }  from './images/ScatteredCloudsSelected.svg';
import { ReactComponent as ShowerRainSelectedWhite }  from './images/ShowerRainSelected.svg';
import { ReactComponent as ThunderstormsSelectedWhite }  from './images/ThunderstormsSelected.svg';



import { ReactComponent as BrokenCloudsBlack }  from './images/BrokenCloudsBlack.svg';
import { ReactComponent as ClearSkyBlack }  from './images/clear-sky.svg';
import { ReactComponent as FewCloudsBlack }  from './images/FewCloudsBlack.svg';
import { ReactComponent as RainBlack }  from './images/RainBlack.svg';
import { ReactComponent as ScatteredCloudsBlack }  from './images/ScatteredCloudsBlack.svg';
import { ReactComponent as ShowerRainBlack }  from './images/ShowerRainBlack.svg';
import { ReactComponent as SnowBlack }  from './images/SnowBlack.svg';
import { ReactComponent as ThunderStormsBlack }  from './images/ThunderStormsBlack.svg';


class Weather extends React.Component {
    render() {
        return (
            <div className="weather__wrapper weather">

                <div className="content__block">
                    <div className="city__name">
                        <p>Los Angeles</p>
                    </div>
                    <div className="weather__temp">
                        {this.props.temperature && <p> {this.props.temperature} &#8457;</p>}
                    </div>
                    <div className="weather__icon">
                
                        <BrokenCloudsBlack /> 
                        
                    </div>
                    {/*  
                    <div className="weather__icon">
                        <img src="">Icon of weather depending on said weather 
                    </div>
                    if this.props.cloud = clouds 60-100 (cloudy photo);
                    if this.props.cloud = clouds 31-59 (semi-cloudy photo);
                    if this.props.cloud = clouds 0-30 (sunny photo);


                    */}
                    <div className="weather__extra-info">
                        <p>
                            <span>Low</span>
                            {this.props.minimum && <span> {this.props.minimum} &#8457;</span>}
                        </p>
                        <p>
                            <span>High</span>
                            {this.props.maximum && <span> {this.props.maximum} &#8457;</span>}
                        </p>
                        <p>
                            <span>Cloud coverage</span>
                            {this.props.cloud && <span> {this.props.cloud}%</span>}
                        </p>
                        <p>
                            <span>Humidity</span>
                            {this.props.humidity && <span> {this.props.humidity}%</span>}
                        </p>
                    </div>
                    

                </div>

                <div className="content__block">
                    <div className="city__name">
                        <p>New York</p>
                    </div>
                    <div className="weather__temp">
                        {this.props.temperature1 && <p> {this.props.temperature1} &#8457;</p>}
                    </div>
                    <div className="weather__icon">
                        <ClearSkyBlack />
                        {/* <img src="">Icon of weather depending on said weather */}
                    </div>
                    

                    <div className="weather__extra-info">
                        <p>
                            <span>Low</span>
                            {this.props.minimum1 && <span> {this.props.minimum1} &#8457;</span>}
                        </p>
                        <p>
                            <span>High</span>
                            {this.props.maximum1 && <span> {this.props.maximum1} &#8457;</span>}
                        </p>
                        <p>
                            <span>Cloud coverage</span>
                            {this.props.cloud1 && <span> {this.props.cloud1}%</span>}
                        </p>
                        <p>
                            <span>Humidity</span>
                            {this.props.humidity1 && <span> {this.props.humidity1}%</span>}
                        </p>
                    </div>
                    

                </div>

                <div className="content__block">
                    <div className="city__name">
                        <p>London</p>
                    </div>
                    <div className="weather__temp">
                        {this.props.temperature2 && <p> {this.props.temperature2} &#8457;</p>}
                    </div>
                    <div className="weather__icon">
                        <FewCloudsBlack />
                        {/* <img src="">Icon of weather depending on said weather */}
                    </div>
                    
                    <div className="weather__extra-info">
                        <p>
                            <span>Low</span>
                            {this.props.minimum2 && <span> {this.props.minimum2} &#8457;</span>}
                        </p>
                        <p>
                            <span>High</span>
                            {this.props.maximum2 && <span> {this.props.maximum2} &#8457;</span>}
                        </p>
                        <p>
                            <span>Cloud coverage</span>
                            {this.props.cloud2 && <span> {this.props.cloud2}%</span>}
                        </p>
                        <p>
                            <span>Humidity</span>
                            {this.props.humidity2 && <span> {this.props.humidity2}%</span>}
                        </p>
                    </div>
                    

                </div>

                <div className="content__block">
                    <div className="city__name">
                        <p>Tokyo</p>
                    </div>
                    <div className="weather__temp">
                        {this.props.temperature3 && <p> {this.props.temperature3} &#8457;</p>}
                    </div>
                    <div className="weather__icon">
                        <ScatteredCloudsBlack />
                        {/* <img src="">Icon of weather depending on said weather */}
                    </div>
                    
                    <div className="weather__extra-info">
                        <p>
                            <span>Low</span>
                            {this.props.minimum3 && <span> {this.props.minimum3} &#8457;</span>}
                        </p>
                        <p>
                            <span>High</span>
                            {this.props.maximum3 && <span> {this.props.maximum3} &#8457;</span>}
                        </p>
                        <p>
                            <span>Cloud coverage</span>
                            {this.props.cloud3 && <span> {this.props.cloud3}%</span>}
                        </p>
                        <p>
                            <span>Humidity</span>
                            {this.props.humidity3 && <span> {this.props.humidity3}%</span>}
                        </p>
                    </div>
                    

                </div>
            </div>

        )
    }
}

export default Weather;