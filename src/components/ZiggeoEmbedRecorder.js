/* globals ZiggeoApi */

import React from 'react';
import { string, number, bool, arrayOf, func, array, object } from 'prop-types';

const ziggeoAttrPropTypes = {
	// Presentational parameters
	'width': number,
	'height': number,
	'responsive': bool,
	'skipinitial': bool,
	'picksnapshots': bool,
	'countdown': number,
	'stream-width': number,
	'stream-height': number,
	'nofullscreen': bool,
	'snapshotmax': number,
	'gallerysnapshots': number,
	'localplayback ': bool,
	'stretch': bool,
	'theme': string,
	'themecolor': string,
	'autorecord': bool,
	'primaryrecord': bool,
	'flip-camera': bool,
	'early-rerecord': bool,
	'sharevideo':	arrayOf(string),

	// Security parameters
	'server-auth': string,
	'client-auth': string,
	'expiration-days': number,

	// Video management parameters
	'recordingwidth': number,
	'recordingheight': number,
	'video': string,
	'stream':	string,
	'effect-profile': array,
	'auto-crop': bool,
	'auto-pad': bool,
	'key': string,
	'timelimit': number,
	'timeminlimit': number,
	'video-profile': string,
	'meta-profile': string,
	'enforce-duration': bool,
	'noaudio': bool,
	'source':	string,
	'framerate': number,
	'videobitrate': number,
	'audiobitrate': number,
	'microphone-volume': number,
	'custom-covershots': bool,

	// Data parameters
	'tags': arrayOf(string),
	'custom-data':	object,
	'title':	string,
	'description': string,

	// Operational parameters
	'manual_upload': bool,
	'rerecordable':	bool,
	'allowupload': bool,
	'allowrecord':	bool,
	'force-overwrite':	bool,
	'autoplay': bool,
	'recordings':	number,
	'allowedextensions': arrayOf(string),
	'application':	string,
	'filesizelimit': number,
	'flashincognitosupport': bool,
	'simulate': bool,
	'allowcustomupload': bool,
	'recordermode': bool,
	'forceflash': bool,
	'noflash': bool,
	'manualsubmit': bool,
	'initialseek': number,
	'playfullscreenonmobile': bool,

	// Form and HTML parameters
	'input-bind': string,
	'form-accept': string
};

const ziggeoEventPropTypes = {
	onPlayerPlaying: func,
	onPlayerPaused: func,
	onPlayerAttached: func,
	onPlayerLoaded: func,
	onPlayerEnded: func,
	onPlayerSeek: func,
	onRecorderError: func,
	onRecorderManuallySubmitted: func,
	onRecorderUploaded: func,
	onRecorderUploadSelected: func,
	onRecorderRecording: func,
	onRecorderUploading: func,
	onRecorderRerecord: func,
	onRecorderCountdown: func,
	onRecorderRecordingProgress: func,
	onRecorderUploadProgress: func,
	onRecorderAccessForbidden: func,
	onRecorderAccessGranted: func,
	onRecorderCameraUnresponsive: func,
	onRecorderVerified: func,
	onRecorderNoCamera: func,
	onRecorderNoMicrophone: func
};

export default class ZiggeoEmbedRecorder extends React.Component {
	static propTypes = {
		apiKey:	string.isRequired,
		...ziggeoAttrPropTypes,
		...ziggeoEventPropTypes
	};

	static defaultProps = {
		'theme': 'default',
		'themecolor': 'default',
		'microphone-volume': 1,
		'allowupload': true,
		'allowrecord': true,
		'recordingwidth': 640,
		'recordingheight': 480,
		'width': 320,
		'height': 240,
		// Default events to no-op
		...Object.keys(ziggeoEventPropTypes).reduce((defaults, event) => {
			defaults[event] = () => {};
			return defaults;
		}, {})
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
		no_microphone: (...args) => this.props.onRecorderNoMicrophone(...args)
	}

	get ziggeoAttrs () {
		return Object.keys(this.props).filter(k => ziggeoAttrPropTypes[k]).reduce((p, k) => {
			p[k] = this.props[k];
		}, {});
	}

	get elementProps () {
		return Object.keys(this.props).filter(k => !this.constructor.propTypes[k]).reduce((p, k) => {
			p[k] = this.props[k];
		}, {});
	}

	componentDidMount () {
		const { apiKey } = this.props;
		this.application = ZiggeoApi.V2.Application.instanceByToken(apiKey);
		this.recorder = new ZiggeoApi.V2.Recorder({
			element: this.element,
			attrs: this.ziggeoAttrs
		});
		this.recorder.activate();
		Object.entries(this.ziggeoEvents).forEach((event, func) => {
			this.recorder.on(event, func);
		});
	};

	componentWillUnmount () {
		this.recorder.destroy();
	};

	render () {
		return <div ref={e => { this.element = e; }} {...this.elementProps}/>;
	}
}
