import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class ZiggeoEmbedRecorder extends Component {

    componentDidMount() {
        const _self = this;
        const { apiKey, onPlayerPlaying, onPlayerPaused, onPlayerAttached,
            onPlayerLoaded, onPlayerEnded, onPlayerSeek, onRecorderError, onRecorderManuallySubmitted, onRecorderUploaded,
            onRecorderUploadSelected, onRecorderRecording, onRecorderUploading, onRecorderRerecord, onRecorderCountdown,
            onRecorderRecordingProgress, onRecorderUploadProgress, onRecorderAccessForbidden, onRecorderAccessGranted,
            onRecorderCameraUnresponsive, onRecorderVerified, onRecorderNoCamera, onRecorderNoMicrophone,
            ...rest} = this.props;
        const options = {...rest};

        this.application = ZiggeoApi.V2.Application.instanceByToken(apiKey);

        this.player = new ZiggeoApi.V2.Recorder({
            element: ReactDOM.findDOMNode(_self),
            attrs: options
        });

        this.player.activate();

        this.player.on("playing", function () {
            if (onPlayerPlaying) this.props.onPlayerPlaying();
        }, this);

        this.player.on("paused", function () {
            if (onPlayerPaused) onPlayerPaused.call(null);
        }, this);

        this.player.on("attached", function () {
            if (onPlayerAttached) onPlayerAttached.call();
        }, this);

        this.player.on("loaded", function () {
            if (onPlayerLoaded) onPlayerLoaded.call(_self);
        }, this);

        this.player.on("ended", function () {
            if (onPlayerEnded) onPlayerEnded.call();
        }, this);

        this.player.on("error", function () {
            if (onRecorderError) onRecorderError.call();
        }, this);

        this.player.on("seek", function () {
            if (onPlayerSeek) onPlayerSeek.call();
        }, this);

        this.player.on("manually_submitted", function () {
            if (onRecorderManuallySubmitted) onRecorderManuallySubmitted.call();
        }, this);

        this.player.on("uploaded", function () {
            if (onRecorderUploaded) onRecorderUploaded.call();
        }, this);

        this.player.on("upload_selected", function () {
            if (onRecorderUploadSelected) onRecorderUploadSelected.call();
        }, this);

        this.player.on("recording", function () {
            if (onRecorderRecording) onRecorderRecording.call();
        }, this);

        this.player.on("uploading", function () {
            if (onRecorderUploading) onRecorderUploading.call();
        }, this);

        this.player.on("rerecord", function () {
            if (onRecorderRerecord) onRecorderRerecord.call();
        }, this);

        this.player.on("countdown", function () {
            if (onRecorderCountdown) onRecorderCountdown.call();
        }, this);

        this.player.on("recording_progress", function () {
            if (onRecorderRecordingProgress) onRecorderRecordingProgress.call();
        }, this);

        this.player.on("upload_progress", function () {
            if (onRecorderUploadProgress) onRecorderUploadProgress.call();
        }, this);

        this.player.on("access_forbidden", function () {
            if (onRecorderAccessForbidden) onRecorderAccessForbidden.call();
        }, this);

        this.player.on("access_granted", function () {
            if (onRecorderAccessGranted) onRecorderAccessGranted.call();
        }, this);

        this.player.on("camera_unresponsive", function () {
            if (onRecorderCameraUnresponsive) onRecorderCameraUnresponsive.call();
        }, this);

        this.player.on("verified", function () {
            if (onRecorderVerified) onRecorderVerified.call();
        }, this);

        this.player.on("no_camera", function () {
            if (onRecorderNoCamera) onRecorderNoCamera.call();
        }, this);

        this.player.on("no_microphone", function () {
            if (onRecorderNoMicrophone) onRecorderNoMicrophone.call();
        }, this);
    };

    componentWillUnmount() {
        this.player.destroy();
    };

    render() {
        return this.props.element || <div />;
    };
}

ZiggeoEmbedRecorder.propTypes = {
    apiKey:             PropTypes.string.isRequired,
    "video":            PropTypes.string.isRequired,
    "theme":            PropTypes.string,
    "themecolor":       PropTypes.string,
    "height":           PropTypes.number,
    "width":            PropTypes.number,
    "effect-profile":   PropTypes.array,
    "skipinitial":      PropTypes.bool,
    "stretch":          PropTypes.bool,

    "recordingwidth":   PropTypes.bool,
    "picksnapshots":    PropTypes.bool,
    "snapshotmax":      PropTypes.number,
    "countdown":        PropTypes.number,
    "gallerysnapshots": PropTypes.number,
    "timelimit":        PropTypes.number,
    "timeminlimit":     PropTypes.number,
    "localplayback ":   PropTypes.bool,
    "autorecord":       PropTypes.bool,
    "primaryrecord":    PropTypes.bool,
    "early-rerecord":   PropTypes.bool,
    "auto-crop":        PropTypes.bool,
    "auto-pad":         PropTypes.bool,
    "key":              PropTypes.string,
    "video-profile":    PropTypes.string,
    "meta-profile":     PropTypes.string,
    "enforce-duration": PropTypes.bool,
    "noaudio":          PropTypes.bool,
    "framerate":        PropTypes.number,
    "videobitrate":     PropTypes.number,
    "audiobitrate":     PropTypes.number,
    "microphone-volume":PropTypes.number,
    "manual_upload":    PropTypes.bool,
    "rerecordable":     PropTypes.bool,
    "allowupload":      PropTypes.bool,
    "allowrecord":      PropTypes.bool,
    "recordings":       PropTypes.number,

    element:          PropTypes.node,
    onPlayerPlaying:    PropTypes.func,
    onPlayerPaused:     PropTypes.func,
    onPlayerAttached:   PropTypes.func,
    onPlayerLoaded:     PropTypes.func,
    onPlayerEnded:      PropTypes.func,
    onPlayerSeek:       PropTypes.func,
    onRecorderError:    PropTypes.func,
    onRecorderManuallySubmitted: PropTypes.func,
    onRecorderUploaded: PropTypes.func,
    onRecorderUploadSelected: PropTypes.func,
    onRecorderRecording:PropTypes.func,
    onRecorderUploading:PropTypes.func,
    onRecorderRerecord: PropTypes.func,
    onRecorderCountdown:PropTypes.func,
    onRecorderRecordingProgress:PropTypes.func,
    onRecorderUploadProgress:   PropTypes.func,
    onRecorderAccessForbidden:  PropTypes.func,
    onRecorderAccessGranted:    PropTypes.func,
    onRecorderCameraUnresponsive:PropTypes.func,
    onRecorderVerified: PropTypes.func,
    onRecorderNoCamera: PropTypes.func,
    onRecorderNoMicrophone: PropTypes.func
};

ZiggeoEmbedRecorder.defaultProps = {
    "theme": 'default',
    "themecolor": 'default',
    "microphone-volume": 1,
    "allowupload": true,
    "allowrecord": true,
    "recordingwidth": 640,
    "recordingheight": 480,
    "width": 320,
    "height": 240
};

export default ZiggeoEmbedRecorder;
