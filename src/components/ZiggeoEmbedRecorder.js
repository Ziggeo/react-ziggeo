/* globals ZiggeoApi */
import React from 'react';
import { ziggeoRecorderAttrPropTypes, ziggeoEmbedRecorderEventPropTypes } from '../constants';
import { string, bool, arrayOf, func  } from 'prop-types';

export default class ZiggeoEmbedRecorder extends React.Component {

	static propTypes = {
		apiKey:	string.isRequired,
		...ziggeoRecorderAttrPropTypes,
		...ziggeoEmbedRecorderEventPropTypes
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
		...Object.keys(ziggeoEmbedRecorderEventPropTypes).reduce((defaults, event) => {
			defaults[event] = () => {};
			return defaults;
		}, {})
	};

	ziggeoEvents = Object.keys(ziggeoEmbedRecorderEventPropTypes).reduce((memo, propName) => {
		const eventName = propName.replace(/([A-Z])/g, '_$1').toLowerCase().slice(3)
									.replace(/(recorder_|player_)/g, '');
		memo[eventName] = (...args) => {
			this.props[propName](...args)
		};
		return memo;
	}, {});

	get ziggeoAttrs () {
		return Object.keys(this.props).filter(k => ziggeoRecorderAttrPropTypes[k]).reduce((props, k) => {
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
		const { apiKey } = this.props;
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

	// Delegate ziggeo attrs to the recorder
	get isRecording() { return this.recorder.isRecording() };
	get averageFrameRate() { return this.recorder.averageFrameRate() };
	get isFlash() { return this.recorder.isFlash() };
	get lightLevel() { return this.recorder.lightLevel() };
	get soundLevel() { return this.recorder.soundLevel() };
	get width() { return this.recorder.width() };
	get height() { return this.recorder.height() };
	get videoWidth() { return this.recorder.videoWidth() };
	get videoHeight() { return this.recorder.videoHeight() };

	// Delegate ziggeo methods to the recorder
	get = (...args) => this.recorder.get(...args);
	play = (...args) => this.recorder.play(...args);
	record = (...args) => this.recorder.record(...args);
	upload = (...args) => this.recorder.upload(...args);
	rerecord = (...args) => this.recorder.rerecord(...args);
	stop = (...args) => this.recorder.stop(...args);
	hidePopup = (...args) => this.recorder.hidePopup(...args);
	reset = (...args) => this.recorder.reset(...args);
	onStateChanged = (...args) => this.recorder.onStateChanged(...args);

	render () {
		return <div ref={e => { this.element = e ; }} {...this.elementProps} />;
	}
}
