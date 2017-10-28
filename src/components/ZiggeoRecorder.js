import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { string, bool, arrayOf, func } from 'prop-types';
import { ziggeoRecorderAttributesPropTypes, ziggeoRecorderEmbeddingEventsPropTypes } from '../constants';

class ZiggeoRecorder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uploadedFile: null
        }
    }

    static propTypes = {
        apiKey: PropTypes.string.isRequired,
        ...ziggeoRecorderAttributesPropTypes,
        ...ziggeoRecorderEmbeddingEventsPropTypes
    };

    // _handleUploadFileEvent = (file) => {
    //     this.application.on("upload_selected", function (file) {
    //         ReactDOM.findDOMNode("ziggeorecorder").addEventListener("upload_selected", file);
    //     });
    // };

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

        ...Object.keys(ziggeoRecorderEmbeddingEventsPropTypes).reduce((defaults, event) => {
            defaults[event] = () => {};
            return defaults;
        }, {})

    };

    // Ziggeo Predefined evens lit
    ziggeoEvents = Object.keys(ziggeoRecorderEmbeddingEventsPropTypes).reduce((memo, propName) => {
        const eventName = propName.replace(/([A-Z])/g, '_$1').toLowerCase().slice(3)
                                    .replace(/(recorder_|player_)/g, '');
        memo[eventName] = (...args) => {
            this.props[propName](...args)
        };
        return memo;
    });

    // Get user defined ziggeo attributes from props
    get ziggeoAttributes () {
        return Object.keys(this.props).filter(k => ziggeoRecorderAttributesPropTypes[k]).reduce((props, k) => {
            props[k] = this.props[k];
            return props;
        });
    }

    // Get user defined ziggeo events from props
    get elementProps () {
        const regexp = new RegExp(/(ziggeo-)/g);
        Object.keys(this.props).filter(value => regexp.test(value)).reduce((props, k) => {
            props[k] = this.props[k];
            console.log('==', k, 'props:', props);
            return props;
        });


        // return Object.keys(this.props).filter(value => regexp.test(value)).reduce((props, k) => {
        //     props[k] = this.props[k];
        //     return props;
        // });
    }

    componentWillMount () {
        this.application = ZiggeoApi.V2.Application.instanceByToken(this.props.apiKey);
    };

    componentDidMount () {
        this.application.on("ready", function () {
            Object.entries(this.ziggeoEvents).forEach(([event, func]) => {
                this.application.embed_events.on(event, func);
            });
        }, this);
    };

    addZiggeoAttributes = (node) => {
        // const {apiKey, ...rest} = this.props;
        // const options = {...rest};

        const options = this.elementProps;

        if(Object.keys(options).length > 1 && node)
            Object.keys(options).map((option) =>
                node.setAttribute(option, this.props[option])
            );
    };

    render() {
        return (
            <ziggeorecorder ref={this.addZiggeoAttributes} ></ziggeorecorder>
        );
    };
}

export default ZiggeoRecorder;
