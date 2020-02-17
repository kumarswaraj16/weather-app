import React from 'react';
import Titles from './components/titles';
import Form from './components/form';
import Weather from './components/weather';

const API_KEY = "1bea0b691243d0afd04b99eefb6fc84f";

class App extends React.Component {

    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined
    }

    getWeather = async(e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`);
        const data = await api_call.json();
        if (city && country) {
            console.log(data);
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ''
            });
        } else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "Please!! Enter City and Country Names :)"
            });
        }

    }
    render() {
        return ( <
            div >
            <
            div className = "wrapper" >
            <
            div className = "main" >
            <
            div className = "container" >
            <
            div className = "row" >
            <
            div className = "col-xs-5 title-container" >
            <
            Titles / >
            <
            /div> <
            div className = "col-xs-7 form-container" >
            <
            Form getWeather = { this.getWeather }
            /> <
            Weather temperature = { this.state.temperature }
            city = { this.state.city }
            country = { this.state.country }
            humidity = { this.state.humidity }
            description = { this.state.description }
            error = { this.state.error }
            /> <
            /div> <
            /div> <
            /div> <
            /div> <
            /div> <
            /div>
        )
    }
}

export default App;