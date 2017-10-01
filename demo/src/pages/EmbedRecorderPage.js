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
                <p className="alert alert-warning">
                    <strong>Note: </strong>
                    It's demonstrative view, recording and uploading set to not allowed, you can register <a href="https://ziggeo.com">Ziggeo</a>. After getting key, use all awesome features
                </p>
                <ZiggeoEmbedRecorder
                    apiKey={API_KEY}
                    video={VIDEO_TOKEN}
                    height={180}
                    width={320}
                    allowupload={false}
                    allowrecord={false}
                    allowedextensions={['no.type']}
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

                <div className="text-left">
                    <h5 className="text-center"> ES6 Code Sample </h5>
                    <h6>Open console to see events attached to this Component</h6>
                    <pre>
                        {"import React from 'react';"} <br/>
                        {"import {ZiggeoEmbedRecorder} from 'react-ziggeo';"}<br/>
                        {"import { API_KEY } from '../constants';"}
                        <br/>
                        <br/>
                        ...
                        <br/>
                        <br/>
                        {"recorderError = () => { console.log('Recorder error'); };"}
                        <br/>
                        {"recorderRecording = () => { console.log('Recorder onRecorderUploading'); };"}
                        <br/>
                        <br/>
                        ...
                        <br/>
                        <br/>
                        {'<ZiggeoEmbedRecorder \n\t apiKey="Ziggeo provided key" \n\t ziggeo-video="your video token"' +
                        '\n\t allowupload={false} \n\t allowrecord={false}' +
                        "\n\t onRecorderError={this.recorderError} \n\t onRecorderRecording={this.recorderRecording}" +
                        '\n/>'}
                        <br/>
                        ...
                    </pre>
                </div>
            </section>
        );
    }
}

export default EmbedRecorderPage;