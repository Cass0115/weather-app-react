import React from 'react';

// import { ReactComponent as BrokenCloudsWhite }  from './images/BrokenCloudsWhite.svg';
import { ReactComponent as FewCloudsWhite }  from './images/FewCloudsWhite.svg';
// import { ReactComponent as RainWhite }  from './images/RainWhite.svg';
// import { ReactComponent as ScatteredCloudsWhite }  from './images/ScatteredCloudsWhite.svg';
// import { ReactComponent as ShowerRainWhite }  from './images/ShowerRainWhite.svg';
// import { ReactComponent as ThunderstormsWhite }  from './images/ThunderstormsWhite.svg';



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
        const isClearSky = this.props.cloud;
        const isClearSky1 = this.props.cloud1;
        const isClearSky2 = this.props.cloud2;
        const isClearSky3 = this.props.cloud3;
        console.log(isClearSky);
        console.log(isClearSky1);
        console.log(isClearSky2);
        console.log(isClearSky3);
        
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
                    {(() => {
                        if(isClearSky > 0 && isClearSky < 30){
                            return (
                                <div><ClearSkyBlack /></div>
                            ) 
                            } else if(isClearSky > 31 && isClearSky < 59){
                                return(
                                    <div><FewCloudsBlack /></div>
                                )
                            } else if(isClearSky > 60 && isClearSky < 100){
                                return(
                                    <div><BrokenCloudsBlack /></div>
                                )
                            } else {
                                return (
                                    <div><ThunderStormsBlack /></div>
                                )
                            }
                        
                    })()}
                            
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
                    {(() => {
                        if(isClearSky1 > 0 && isClearSky1 < 30){
                            return (
                                <div><ClearSkyBlack /></div>
                            ) 
                            } else if(isClearSky1 > 31 && isClearSky1 < 59){
                                return(
                                    <div><FewCloudsBlack /></div>
                                )
                            } else if(isClearSky1 > 60 && isClearSky1 < 100){
                                return(
                                    <div><BrokenCloudsBlack /></div>
                                )
                            } else {
                                return (
                                    <div><ThunderStormsBlack /></div>
                                )
                            }
                        
                    })()}
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
                        {(() => {
                        if(isClearSky2 > 0 && isClearSky2 < 30){
                            return (
                                <div><ClearSkyBlack /></div>
                            ) 
                            } else if(isClearSky2 > 31 && isClearSky2 < 59){
                                return(
                                    <div><FewCloudsBlack /></div>
                                )
                            } else if(isClearSky2 > 60 && isClearSky2 < 100){
                                return(
                                    <div><BrokenCloudsBlack /></div>
                                )
                            } else {
                                return (
                                    <div><ThunderStormsBlack /></div>
                                )
                            }
                        
                    })()}
                        
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
                        {(() => {
                        if(isClearSky3 > 0 && isClearSky3 < 30){
                            return (
                                <div><ClearSkyBlack /></div>
                            ) 
                            } else if(isClearSky3 > 31 && isClearSky3 < 59){
                                return(
                                    <div><FewCloudsBlack /></div>
                                )
                            } else if(isClearSky3 > 60 && isClearSky3 < 100){
                                return(
                                    <div><BrokenCloudsBlack /></div>
                                )
                            } else {
                                return (
                                    <div><ThunderStormsBlack /></div>
                                )
                            }
                        
                    })()}
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