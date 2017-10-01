import React, { Component } from 'react';
import { ZiggeoEmbedPlayer } from 'react-ziggeo';
import WarningMessage from '../components/WarningMessage';
import { API_KEY, VIDEO_TOKEN } from '../constants';

class EmbedPlayerPage extends Component {

    playing = () => {
        console.log('it\'s playing, your action here');
    };

    paused = () => {
        console.log('it\'s paused, your action when pause');
    };

    playerEnded = () => {
        console.log('Player ended');
    };

    playerAttached = () => {
        console.log('Player attached');
    };

    playerLoaded = () => {
        console.log('Player loaded');
    };

    playerError = () => {
        console.log('Player error');
    };

    playerSeek = () => {
        console.log('Player seeking');
    };

    render() {
        return (
            <section className="player-page">
                <h1 className="page-header">Embed Player Page</h1>
                {!API_KEY && <WarningMessage message={"API Key required"} />}
                {!VIDEO_TOKEN && <WarningMessage message={"Video Token required"} />}
                <ZiggeoEmbedPlayer
                    apiKey={API_KEY}
                    video={VIDEO_TOKEN}
                    height={180}
                    width={320}
                    onPlayerPlaying={this.playing}
                    onPlayerPaused={this.paused}
                    onPlayerEnded={this.playerEnded}
                    onPlayerAttached={this.playerAttached}
                    onPlayerLoaded={this.playerLoaded}
                    onPlayerError={this.playerError}
                    onPlayerSeek={this.playerSeek}
                />
                <div className="text-left">
                    <h5 className="text-center"> ES6 Code Sample </h5>
                    <h6>Open console to see events attached to this Component</h6>
                    <pre>
                        {"import React from 'react';"} <br/>
                        {"import {ZiggeoEmbedPlayer} from 'react-ziggeo';"}<br/>
                        {"import { API_KEY, VIDEO_TOKEN } from '../constants';"}
                        <br/>
                        <br/>
                        ...
                        <br/>
                        <br/>
                        {"playerLoaded = () => { console.log('Player loaded'); };"}
                        <br/>
                        {"playing = () => { console.log(\"it's playing, your action here\"); };"}
                        <br/>
                        <br/>
                        ...
                        <br/>
                        <br/>
                        {"<ZiggeoPlayer \n\t apiKey=\"Ziggeo provided key\" \n\t ziggeo-video=\"your video token\"" +
                        "\n\t onPlayerLoaded={this.playerLoaded} \n\t onPlayerPlaying={this.playing}" +
                        "\n/>"}
                        <br/>
                        ...
                    </pre>
                </div>
            </section>
        );
    }
}

export default EmbedPlayerPage;