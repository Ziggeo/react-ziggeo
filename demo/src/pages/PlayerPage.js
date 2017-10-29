import React from 'react';
import { ZiggeoPlayer } from 'react-ziggeo';
import { API_KEY, VIDEO_TOKEN } from '../constants';

class PlayerPage extends React.Component {
    playing = () => {
        console.log('it\'s playing, your action here');
    };

    paused = () => {
        console.log('it\'s paused, your action when pause');
    };

    render () {
        return (
            <section className="player-page">
                <h1 className="page-header">Player Page</h1>
                <ZiggeoPlayer
                    apiKey={API_KEY}
                    ziggeo-video={VIDEO_TOKEN}
                    // Events
                    onPlayerPlaying={this.playing}
                    onPlayerPaused={this.paused}
                    // onPlayerEnded={this.playerEnded}
                    // onPlayerAttached={this.playerAttached}
                    // onPlayerLoaded={this.playerLoaded}
                    // onPlayerError={this.playerError}
                    // onPlayerSeek={this.playerSeek}
                />

                <div className="text-left">
                    <h5 className="text-center"> ES6 Code Sample </h5>
                    <pre>
                    {"import React from 'react';"} <br/>
                        {"import { ZiggeoPlayer } from 'react-ziggeo';"}<br/>
                        {"import { API_KEY, VIDEO_TOKEN } from '../constants';"}
                        <br/><br/>
                    ...
                    <br/><br/>
                        {'<ZiggeoPlayer \n\t apiKey="Ziggeo provided key" \n\t ziggeo-video="your video token" \n/>'}
                        <br/>
                    ...
                </pre>
                </div>
            </section>
        );
    }
}

export default PlayerPage;