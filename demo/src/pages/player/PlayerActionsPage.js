import React, { Component } from 'react';
import { ZiggeoPlayer } from 'react-ziggeo';
import {
    API_KEY, VIDEO_TOKEN, API_KEY_2, VIDEO_TOKEN_2, VIDEO_TOKEN_2_1
} from '../../constants';

export default class PlayerActionsPage extends Component {

    static playerInstance = null;
    static playerProperties = null;

    constructor (props) {
        super(props);
        this.state = {
            apiToken: API_KEY_2,
            video: VIDEO_TOKEN_2_1,
            playerInstance: null,
            player: {
                videoHeight: 380,
                videoWidth: 520
            }
        }
    }

    handleChangeApiKey = () => {
        this.setState({
            apiToken: API_KEY,
            video: VIDEO_TOKEN
        });
    };

    handleChangeVideo = () => {
        this.setState({
            apiToken: API_KEY_2,
            video: VIDEO_TOKEN_2
        });
    };

    handlePlayerSize = () => {
        let currentHeight = this.state.player.videoHeight;
        let currentWidth = this.state.player.videoWidth;

        let player = Object.assign({}, this.state.player);

        player.videoWidth = currentWidth / 2;
        player.videoHeight = currentHeight / 2;

        this.setState({ player });
    };

    handlePlayerRef = ref => {
        if (!ref) {
            return;
        }

        this.child = ref;

        if (typeof ref.playerInstance === 'function') {
            this.playerInstance = ref.playerInstance();
            this.playerProperties = this.playerInstance && this.playerInstance.get
                ? this.playerInstance.get()
                : null;
        }
    };

    triggerPlay = () => {
        if (this.child && typeof this.child.play === 'function') {
            this.child.play();
        }
    };

    triggerPause = () => {
        if (this.child && typeof this.child.pause === 'function') {
            this.child.pause();
        }
    };

    triggerSeek = () => {
        if (this.child && typeof this.child.seek === 'function') {
            this.child.seek(5);
        }
    };

    render () {
        return (
            <section className="player-page">
                <h1 className="page-header">Player Page With Actions Example</h1>
                <p>Video token: {this.state.video}</p>
                <ZiggeoPlayer
                    apiKey={this.state.apiToken}
                    video={this.state.video}
                    height={this.state.player.videoHeight}
                    width={this.state.player.videoWidth}
                    onRef={this.handlePlayerRef}
                />

                <hr />
                <div>
                    <button onClick={this.handleChangeVideo} className="btn btn-warning">Change Video</button>
                    <span> -- </span>
                    <button onClick={this.handlePlayerSize} className="btn btn-primary">Double minimize</button>
                    { this.state.player.videoWidth && <span> Width: {this.state.player.videoWidth} </span>}
                    { this.state.player.videoHeight && <span> Height: {this.state.player.videoHeight} </span>}
                </div>
                <br/>
                <div>
                    <button onClick={this.triggerPlay} className="btn btn-default">Play</button>
                    <span> -- </span>
                    <button onClick={this.triggerPause} className="btn btn-info">Pause</button>
                    <span> -- </span>
                    <button onClick={this.triggerSeek} className="btn btn-danger">Seek 5 sec</button>
                </div>
                <br/><br/>
            </section>
        );
    }
}
