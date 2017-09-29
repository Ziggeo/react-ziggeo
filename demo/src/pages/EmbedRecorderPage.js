import React, { Component } from 'react';
import { ZiggeoEmbedRecorder } from 'react-ziggeo';
import { API_KEY, VIDEO_TOKEN } from '../constants';

class EmbedRecorderPage extends Component {

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

    playerSeek = () => {
        console.log('Player seeking');
    };

    recorderError = () => {
        console.log('Recorder error');
    };

    recorderManuallySubmitted = () => {
        console.log('Recorder onRecorderManuallySubmitted');
    };

    recorderRecording = () => {
        console.log('Recorder onRecorderRecording');
    };

    recorderUploaded = () => {
        console.log('Recorder onRecorderUploaded');
    };

    recorderUploadSelected = () => {
        console.log('Recorder onRecorderUploadSelected');
    };

    recorderUploading = () => {
        console.log('Recorder onRecorderUploading');
    };

    recorderRerecord = () => {
        console.log('Recorder onRecorderRerecord');
    };

    recorderCountdown = () => {
        console.log('Recorder onRecorderCountdown');
    };

    recorderRecordingProgress = () => {
        console.log('Recorder onRecorderRecordingProgress');
    };

    recorderUploadProgress = () => {
        console.log('Recorder onRecorderUploadProgress');
    };

    recorderAccessForbidden = () => {
        console.log('Recorder recorderAccessForbidden');
    };

    recorderAccessGranted = () => {
        console.log('Recorder onRecorderAccessGranted');
    };

    recorderCameraUnresponsive = () => {
        console.log('Recorder onRecorderCameraUnresponsive');
    };

    recorderVerified = () => {
        console.log('Recorder onRecorderVerified');
    };

    recorderNoCamera = () => {
        console.log('Recorder onRecorderNoCamera');
    };

    recorderNoMicrophone = () => {
        console.log('Recorder onRecorderNoMicrophone');
    };

    render() {
        return (
            <section className="player-page">
                <h1 className="page-header">Embed Player Page</h1>
                <p>Video token: {VIDEO_TOKEN}</p>
                <ZiggeoEmbedRecorder
                    apiKey={API_KEY}
                    video={VIDEO_TOKEN}
                    height={180}
                    width={320}
                    onPlayerPlaying={this.playing}
                    onPlayerPaused={this.paused}
                    onPlayerEnded={this.playerEnded}
                    onPlayerAttached={this.playerAttached}
                    onPlayerLoaded={this.playerLoaded}
                    onPlayerSeek={this.playerSeek}
                    onRecorderError={this.recorderError}
                    onRecorderManuallySubmitted={this.recorderManuallySubmitted}
                    onRecorderUploaded={this.recorderUploaded}
                    onRecorderUploadSelected={this.recorderUploadSelected}
                    onRecorderRecording={this.recorderRecording}
                    onRecorderUploading={this.recorderUploading}
                    onRecorderRerecord={this.recorderRerecord}
                    onRecorderCountdown={this.recorderCountdown}
                    onRecorderRecordingProgress={this.recorderRecordingProgress}
                    onRecorderUploadProgress={this.recorderUploadProgress}
                    onRecorderAccessForbidden={this.recorderAccessForbidden}
                    onRecorderAccessGranted={this.recorderAccessGranted}
                    onRecorderCameraUnresponsive={this.recorderCameraUnresponsive}
                    onRecorderVerified={this.recorderVerified}
                    onRecorderNoCamera={this.recorderNoCamera}
                    onRecorderNoMicrophone={this.recorderNoMicrophone}
                />
            </section>
        );
    }
}

export default EmbedRecorderPage;