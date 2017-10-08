import React from 'react';
import PropTypes from 'prop-types';

const ziggeoAttrPropTypes = {
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
}

const ziggeoEventPropTypes = {
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
}

export default class ZiggeoEmbedRecorder extends React.Component {
	static propTypes = {
			apiKey:	PropTypes.string.isRequired,
			...ziggeoAttrPropTypes,
			...ziggeoEventPropTypes
	};

	static defaultProps = {
		"theme": 'default',
		"themecolor": 'default',
		"microphone-volume": 1,
		"allowupload": true,
		"allowrecord": true,
		"recordingwidth": 640,
		"recordingheight": 480,
		"width": 320,
		"height": 240,
		// Default events to no-op
		...Object.keys(ziggeoEventPropTypes).reduce((defaults, event) => {
			defaults[event] = () => {};
			return defaults;
		})
	};

	ziggeoEvents = {
		playing: (...args) => this.props.onPlayerPlaying(...args),
		paused: (...args) => this.props.onPlayerPaused(...args),
		attached: (...args) => this.props.onPlayerAttached(...args),
		loaded: (...args) => this.props.onPlayerLoaded(...args),
		ended: (...args) => this.props.onPlayerEnded(...args),
		seek: (...args) => this.props.onPlayerSeek(...args),
		error: (...args) => this.props.onRecorderError(...args),
		manually_submitted: (...args) => this.props.onRecorderManuallySubmitted(...args),
		uploaded: (...args) => this.props.onRecorderUploaded(...args),
		upload_selected: (...args) => this.props.onRecorderUploadSelected(...args),
		uploading: (...args) => this.props.onRecorderUploading(...args),
		recording: (...args) => this.props.onRecorderRecording(...args),
		rerecord: (...args) => this.props.onRecorderRerecord(...args),
		countdown: (...args) => this.props.onRecorderCountdown(...args),
		recording_progress: (...args) => this.props.onRecorderRecordingProgress(...args),
		upload_progress: (...args) => this.props.onRecorderUploadProgress(...args),
		access_forbidden: (...args) => this.props.onRecorderAccessForbidden(...args),
		access_granted: (...args) => this.props.onRecorderAccessGranted(...args),
		camera_unresponsive: (...args) => this.props.onRecorderCameraUnresponsive(...args),
		verified: (...args) => this.props.onRecorderVerified(...args),
		no_camera: (...args) => this.props.onRecorderNoCamera(...args),
		no_microphone: (...args) => this.props.onRecorderNoMicrophone(...args),
	}

	get ziggeoAttrs () {
		Object.keys(this.props).filter(k => ziggeoAttrPropTypes[k]).reduce((p, k) => p[k] = this.props[k], {});
	}

	get elementProps () {
		Object.keys(this.props).filter(k => !ZiggeoEmbedRecorder.propTypes[k]).reduce((p, k) => p[k] = this.props[k], {});
	}

	componentDidMount() {
			const { apiKey } = this.props;
			this.application = ZiggeoApi.V2.Application.instanceByToken(apiKey);
			this.recorder = new ZiggeoApi.V2.Recorder({
				element: this.element,
				attrs: this.ziggeoAttrs
			});
			this.recorder.activate();
			Object.entries(this.ziggeoEvents).forEach((event, func) => this.recorder.on(event, func))
		};

	componentWillUnmount() {
		this.recorder.destroy();
	};

	render() {
		return <div ref={e => { this.element = e; }} {...this.elementProps}/>;
	 };
}
