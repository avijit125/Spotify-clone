import React, {useEffect,useState} from 'react';
import './App.css';
import Login from './Login';
import { getTokenFormUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js"
import Player from './Player';
import { useDataLayerValue } from './Datalayer';

const spotify = new SpotifyWebApi();

function App() {
  const [{user, token,playlists}, dispatch]= useDataLayerValue();
  useEffect(()=>{
    //code
    const hash = getTokenFormUrl();
    window.location.hash="";
    const token = hash.access_token;

    if(token){
      dispatch({
        type:'SET_TOKEN',
        token:token
      })

      spotify.setAccessToken(token);
      spotify.getMe().then(user =>{
        console.log(user)
        dispatch({
          type:'SET_User',
          user: user
        })
      })

      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type:"SET_PLAYLISTS",
          playlists: playlists,
        })
      })

      spotify.getPlaylist('37i9dQZEVXcIrd1pAZqGMc').then(response =>{
        dispatch({
          type:"SET_DISCOVER_WEEKLY",
          discover_weekly:response,
        })
      })

    }
  },[])
  

  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify}/>
        ):(
          <Login/>
        )
      }
    </div>
  );
}

export default App;
