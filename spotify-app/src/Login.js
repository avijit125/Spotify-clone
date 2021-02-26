import React from 'react';
import './Login.css';
import { loginUrl } from './spotify';

function Login() {
    return (
        <div className="login">
            <img src="https://cdn.telanganatoday.com/wp-content/uploads/2020/06/Spotify-now-works-with-Amaz.jpg" alt="logo"/>
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
            
        </div>
    )
}

export default Login;
