import React from 'react'
import "./Footer.css"
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Grid, Slider } from '@material-ui/core';

function Footer() {
    return (
        <div className="footer">
            <div className="footer_left">
                <img className="footer_albumlogo" src="" alt="" />
                <div className="footer_songInfo">
                    <h4>yeah</h4>
                    <p>yo yo</p>
                </div>
            </div>
            <div className="footer_center">
                <ShuffleIcon className="green"/>
                <SkipPreviousIcon className="footer-icon"/>
                <PlayCircleOutlineIcon fontSize="large"className="footer-icon"/>
                <SkipNextIcon className="footer-icon"/>
                <RepeatIcon className="green"/> 
            </div>
            <div className="footer_right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon/>
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon/>
                    </Grid>
                    <Grid item xs>
                        <Slider/>
                    </Grid>
                </Grid>
            </div>
            
        </div>
    )
}

export default Footer;
