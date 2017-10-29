import React from 'react';
import { API_KEY } from '../constants';
import { ZiggeoRecorder } from 'react-ziggeo';

class RecorderPage extends React.Component {

    recorderUploadSelected = () => {
        console.log('Recorder upload file selected, your action here');
    };

    recorderRecording = () => {
        console.log('Recording, your action when recording');
    };

    recorderAccessGranted = () => {
        console.log('Camera access granted, your action when camera access granted.');
    };

    render () {
        return (
            <section className="">
                <h1 className="page-header">Recorder Page</h1>
                <p className="alert alert-warning">
                    <strong>Note: </strong>
                    It's demonstrative view, recording and uploading set to not allowed, you can register <a href="https://ziggeo.com">Ziggeo</a>. After getting key, use all awesome features
                </p>
                <ZiggeoRecorder
                    apiKey={API_KEY}
                    ziggeo-width={640}
                    ziggeo-height={640}
                    // Events
                    onRecorderUploadSelected={this.recorderUploadSelected}
                    onRecorderRecording={this.recorderRecording}
                    onRecorderAccessGranted={this.recorderAccessGranted}
                    // onPlayerPlaying={this.playing}
                    // onPlayerPaused={this.paused}
                    // onPlayerEnded={this.playerEnded}
                    // onPlayerAttached={this.playerAttached}
                    // onPlayerLoaded={this.playerLoaded}
                    // onPlayerSeek={this.playerSeek}
                    // onRecorderError={this.recorderError}
                    // onRecorderManuallySubmitted={this.recorderManuallySubmitted}
                    // onRecorderUploaded={this.recorderUploaded}
                    // onRecorderUploading={this.recorderUploading}
                    // onRecorderRerecord={this.recorderRerecord}
                    // onRecorderCountdown={this.recorderCountdown}
                    // onRecorderRecordingProgress={this.recorderRecordingProgress}
                    // onRecorderUploadProgress={this.recorderUploadProgress}
                    // onRecorderAccessForbidden={this.recorderAccessForbidden}
                    // onRecorderCameraUnresponsive={this.recorderCameraUnresponsive}
                    // onRecorderVerified={this.recorderVerified}
                    // onRecorderNoCamera={this.recorderNoCamera}
                    // onRecorderNoMicrophone={this.recorderNoMicrophone}
                />

                <h5 className="text-center"> ES6 Code Sample </h5>
                <div className="text-left">
                <pre>
                    {"import React from 'react';"} <br/>
                    {"import { ZiggeoRecorder } from 'react-ziggeo';"} <br/>
                    {"import { API_KEY } from '../constants';"} <br/>

                    <br/><br/>
                    ...
                    <br/><br/>
                    <code>
                        {"<ZiggeoRecorder \n\t apiKey={'Ziggeo API key'} " +
                        "\n\t ziggeo-allowedextensions={['no.type']} \n\t ziggeo-allowrecord={false} \n/>"}
                    </code>
                    <br/><br/>
                    ...
                </pre>
                </div>
            </section>
        );
    }
};

export default RecorderPage;