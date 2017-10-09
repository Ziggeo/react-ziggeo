/* globals ZiggeoApi */
import React from 'react';
import { string, number, bool, arrayOf, func, array, object, oneOfType } from 'prop-types';

const ziggeoAttrPropTypes = {
	// Presentational parameters
	'width': oneOfType([number, string]),
	'height': oneOfType([number, string]),
	'responsive': bool,
	'skipinitial': bool,
	'picksnapshots': bool,
	'countdown': number,
	'stream-width': number,
	'stream-height': number,
	'nofullscreen': bool,
	'snapshotmax': number,
	'gallerysnapshots': number,
	'localplayback': bool,
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
	'videobitrate': oneOfType([number, string]),
	'audiobitrate': oneOfType([number, string]),
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
	onAttached: func,
	onLoaded: func,
	onPlaying: func,
	onPaused: func,
	onEnded: func,
	onError: func,
	onManuallySubmitted: func,
	onUploaded: func,
	onUploadSelected: func,
	onRecording: func,
	onUploading: func,
	onSeek: func,
	onRerecord: func,
	onCountdown: func,
	onRecordingProgress: func,
	onUploadProgress: func,
	onProcessing: func,
	onProcessed: func,
	onAccessForbidden: func,
	onAccessGranted: func,
	onCameraUnresponsive: func,
	onVerified: func,
	onNoCamera: func,
	onNoMicrophone: func
};

export default class ZiggeoEmbedRecorder extends React.Component {
	static propTypes = {
		apiKey:	string.isRequired,
		...ziggeoAttrPropTypes,
		...ziggeoEventPropTypes
	};

	static defaultProps = {
		// Presentational parameters
		'width': 640,
		'height': 480,
		'picksnapshots': true,
		'countdown': 3,
		'snapshotmax': 15,
		'gallerysnapshots': 3,
		'theme': 'default',
		'themecolor': 'default',
		'primaryrecord': true,

		// Video management parameters
		'recordingwidth': 640,
		'recordingheight': 480,
		'framerate': 25,
		'videobitrate': 'auto',
		'audiobitrate': 'auto',
		'microphone-volume': 1,

		// Operational parameters
		'allowupload': true,
		'allowrecord':	true,
		'force-overwrite':	true,
		'allowcustomupload': true,
		'recordermode': true,

		// Default events to no-op
		...Object.keys(ziggeoEventPropTypes).reduce((defaults, event) => {
			defaults[event] = () => {};
			return defaults;
		}, {})
	};

	ziggeoEvents = {
		playing: (...args) => this.props.onPlaying(...args),
		paused: (...args) => this.props.onPaused(...args),
		attached: (...args) => this.props.onAttached(...args),
		loaded: (...args) => this.props.onLoaded(...args),
		ended: (...args) => this.props.onEnded(...args),
		seek: (...args) => this.props.onSeek(...args),
		error: (...args) => this.props.onError(...args),
		manually_submitted: (...args) => this.props.onManuallySubmitted(...args),
		uploaded: (...args) => this.props.onUploaded(...args),
		upload_selected: (...args) => this.props.onUploadSelected(...args),
		uploading: (...args) => this.props.onUploading(...args),
		recording: (...args) => this.props.onRecording(...args),
		rerecord: (...args) => this.props.onRerecord(...args),
		countdown: (...args) => this.props.onCountdown(...args),
		recording_progress: (...args) => this.props.onRecordingProgress(...args),
		upload_progress: (...args) => this.props.onUploadProgress(...args),
		access_forbidden: (...args) => this.props.onAccessForbidden(...args),
		access_granted: (...args) => this.props.onAccessGranted(...args),
		camera_unresponsive: (...args) => this.props.onCameraUnresponsive(...args),
		verified: (...args) => this.props.onVerified(...args),
		no_camera: (...args) => this.props.onNoCamera(...args),
		no_microphone: (...args) => this.props.onNoMicrophone(...args)
	}

	get ziggeoAttrs () {
		return Object.keys(this.props).filter(k => ziggeoAttrPropTypes[k]).reduce((props, k) => {
			props[k] = this.props[k];
			return props;
		}, {});
	}

	get elementProps () {
		return Object.keys(this.props).filter(k => !this.constructor.propTypes[k]).reduce((props, k) => {
			props[k] = this.props[k];
			return props;
		}, {});
	}

	componentDidMount () {
		const { apiKey } = this.props;;
		this.application = ZiggeoApi.V2.Application.instanceByToken(apiKey);
		this.recorder = new ZiggeoApi.V2.Recorder({
			element: this.element,
			attrs: this.ziggeoAttrs
		});
		this.recorder.activate();
		Object.entries(this.ziggeoEvents).forEach(([event, func]) => {
			this.recorder.on(event, func);
		});
	};

	componentWillUnmount () {
		this.recorder.destroy();
	};

	// Delegate ziggeo methods to the recorder
	play = (...args) => this.recorder.play(...args);
	record = (...args) => this.recorder.record(...args);
	upload = (...args) => this.recorder.upload(...args);
	rerecord = (...args) => this.recorder.rerecord(...args);
	stop = (...args) => this.recorder.stop(...args);
	hidePopup = (...args) => this.recorder.hidePopup(...args);
	reset = (...args) => this.recorder.reset(...args);
	lightLevel = (...args) => this.recorder.lightLevel(...args);
	soundLevel = (...args) => this.recorder.soundLevel(...args);
	averageFrameRate = (...args) => this.recorder.averageFrameRate(...args);
	isRecording = (...args) => this.recorder.isRecording(...args);
	width = (...args) => this.recorder.width(...args);
	height = (...args) => this.recorder.height(...args);
	isFlash = (...args) => this.recorder.isFlash(...args);
	height = (...args) => this.recorder.height(...args);
	videoWidth = (...args) => this.recorder.videoWidth(...args);
	videoHeight = (...args) => this.recorder.videoHeight(...args);

	render () {
		return <div ref={e => { this.element = e ; }} {...this.elementProps} />;
	}
}
