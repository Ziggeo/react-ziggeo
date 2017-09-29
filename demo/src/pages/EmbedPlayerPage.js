import React, { Component } from 'react';
import { ZiggeoEmbedPlayer } from 'react-ziggeo';
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
                <p>Video token: {VIDEO_TOKEN}</p>
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
            </section>
        );
    }
}

export default EmbedPlayerPage;