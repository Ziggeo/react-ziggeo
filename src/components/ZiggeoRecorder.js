import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { string, bool, arrayOf, func } from 'prop-types';
import {
    ziggeoRecorderEmbeddingEventsPropTypes, ziggeoRecorderConvertedAttributes
} from "../constants";

class ZiggeoRecorder extends Component {

    static propTypes = {
        apiKey: PropTypes.string.isRequired,
        ...ziggeoRecorderConvertedAttributes,
        ...ziggeoRecorderEmbeddingEventsPropTypes
    };

    static defaultProps = {
        // Presentational parameters
        'ziggeo-width': 640,
        'ziggeo-height': 480,
        'ziggeo-picksnapshots': true,
        'ziggeo-countdown': 3,
        'ziggeo-snapshotmax': 15,
        'ziggeo-gallerysnapshots': 3,
        'ziggeo-theme': 'default',
        'ziggeo-themecolor': 'default',
        'ziggeo-primaryrecord': true,

        // Video management parameters
        'ziggeo-recordingwidth': 640,
        'ziggeo-recordingheight': 480,
        'ziggeo-framerate': 25,
        'ziggeo-videobitrate': 'auto',
        'ziggeo-audiobitrate': 'auto',
        'ziggeo-microphone-volume': 1,

        // Operational parameters
        'ziggeo-allowupload': true,
        'ziggeo-allowrecord':	true,
        'ziggeo-force-overwrite':	true,
        'ziggeo-allowcustomupload': true,
        'ziggeo-recordermode': true,

        // Events
        ...Object.keys(ziggeoRecorderEmbeddingEventsPropTypes).reduce((defaults, event) => {
            defaults[event] = () => {};
            return defaults;
        }, {})
    };

    // before render() will apply to DOM
    componentWillMount () {
        this.application = ZiggeoApi.V2.Application.instanceByToken(this.props.apiKey);

        this.application.on("ready", function () {
            Object.entries(this._ziggeoEvents).forEach(([event, func]) => {
                this.application.embed_events.on(event, func);
            });
            this.embedding = ZiggeoApi.V2.Recorder.findByElement(this.recorderElement);
        }, this);

        this.application.on("error", function () {
            // in case if we have any application level error
        });

    };

    // After render() will apply to DOM
    componentDidMount () {
        this.props.onRef(this);
    };

    // run when state changes
    // shouldComponentUpdate (nextProps, nextState) { return false; }

    // run shouldComponentUpdate will return true
    componentWillUpdate (nextProps, nextState) {}

    // run after Component render()
    componentDidUpdate (prevProps, prevState) {}


    // run before element will be removed from DOM
    componentWillUnmount () {
        // Never call this.application.destroy() !!!
        // Will receive error 'Cannot read property 'urls' of undefined'
        this.props.onRef(undefined);

        // TODO: checkout why it runs only once, and embedding is empty
        if (this.embedding) this.embedding.reset();
    }

    render() {
        return (
            <ziggeorecorder ref={this._addZiggeoAttributes} {...this._elementProps} ></ziggeorecorder>
        );
    };

    // Ziggeo Predefined evens lit
    _ziggeoEvents = Object.keys(ziggeoRecorderEmbeddingEventsPropTypes).reduce((memo, propName) => {
        const eventName = propName.replace(/([A-Z])/g, '_$1').toLowerCase().slice(3).replace(/(recorder_|player_)/g, '');

        memo[eventName] = (...args) => {
            this.props[propName](...args)
        };
        return memo;
    }, {});

    // Will attach to node with ref
    _addZiggeoAttributes = (node) => {

        if (!this.recorderElement && node) this.recorderElement = node;

        // Inject node with provided ziggeo options
        if (node) {
            const regexp = new RegExp(/(ziggeo-)/g);
            Object.keys(this.props).filter(value => regexp.test(value)).reduce((props, value) => {
                // Check if prop type existing
                if (!ziggeoRecorderConvertedAttributes[value])
                    console.warn('Please be sure there\'re no typo in ' + value + ' option');

                node.setAttribute(value, this.props[value])
            }, {});
        }
    };

    // Props which are not related to Ziggeo
    get _elementProps () {
        return Object.keys(this.props).filter(k => !this.constructor.propTypes[k]).reduce((props, k) => {
            props[k] = this.props[k];
            return props;
        }, {});
    }

    // Get Recorder Instance
    recorderEmbedding = () => this.embedding;
}

export default ZiggeoRecorder;
