/* globals ZiggeoApi */
import React, { useEffect, useRef } from 'react';
import {
    reactCustomOptions, ziggeoRecorderAttributesPropTypes,
    ziggeoRecorderEmbeddingEventsPropTypes, ziggeoCommonEmbeddingEventsPropTypes, ziggeoRecorderApplicationOptions
} from '../constants';
import { string  } from 'prop-types';

const ZiggeoRecorder = ({ apiKey, locale, flashUrl, ...props }) =>  {

  let recorder = null;

    useEffect(() => {
        try {
            initApplication(function(app) {
                const application = app;
            });
        } catch (e) {
            console.warn(e);
        }

        if (recorder)
            recorder.destroy();

        // Don't include Application initialization, will get this context issue
        _buildRecorder();

        return () => {
            // Never call this.application.destroy() !!!
            // Will receive error 'Cannot read property 'urls' of undefined'
            useRef(undefined);

            recorder.destroy();
        }

    }, []);

    // Trigger when state is changes
    // shouldComponentUpdate (nextProps, nextState) {
    //     const { preventReRenderOnUpdate } = nextProps || true;
    //     return !preventReRenderOnUpdate;
    // }

     const _ziggeoEvents = Object.keys(Object.assign(ziggeoRecorderEmbeddingEventsPropTypes, ziggeoCommonEmbeddingEventsPropTypes)).reduce((memo, propName) => {
        const eventName = propName.replace(/([A-Z])/g, '_$1').toLowerCase().slice(3)
            .replace(/(recorder_|player_)/g, '');
        memo[eventName] = (...args) => {
            this.props[propName](...args)
        };
        return memo;
    }, {});


    const initApplication = (callback, context) => {
        // Set locale
        if (typeof locale !== "undefined")
            ZiggeoApi.V2.Locale.setLocale(locale);

        // Set external flash player
        if (typeof flashUrl !== "undefined")
            ZiggeoApi.V2.Config.set("flash", flashUrl);

        let application = ZiggeoApi.V2.Application.instanceByToken(apiKey, _applicationOptions);
        if (application)
            callback(application, context);
        else
            throw new Error("Can't initialize application");
    };

    const ziggeoAttributes = () => {
        return Object.keys(props).filter(k => ziggeoRecorderAttributesPropTypes[k]).reduce((props, k) => {
            props[k] = props[k];
            return props;
        }, {});
    };

    // Props which are not related to Ziggeo
    const _elementProps = () => {
        return Object.keys(props).filter(k => !this.constructor.propTypes[k]).reduce((props, k) => {
            props[k] = props[k];
            return props;
        }, {});
    };

    const _applicationOptions = () => {
        return Object.keys(props)
            .filter(k => ziggeoRecorderApplicationOptions[k]).reduce((props, k) => {
                props[k] = props[k];
                return props;
            }, {});
    };

    const _buildRecorder = () => {
        recorder = new ZiggeoApi.V2.Recorder({
            element: this.element,
            attrs: this.ziggeoAttributes
        });
        recorder.activate();

        Object.entries(this._ziggeoEvents).forEach(([event, func]) => {
            recorder.on(event, func.bind(this, this.recorder.get()));
        });

        props.onRef(this);
    };

    const recorderInstance = () => recorder;

    return (<div ref={e => { this.element = e ; }} {...this._elementProps} />);
};

ZiggeoRecorder.propTypes = {
  apiKey:	string.isRequired,
  ...ziggeoRecorderAttributesPropTypes,
  ...ziggeoRecorderEmbeddingEventsPropTypes,
  ...ziggeoCommonEmbeddingEventsPropTypes,
  ...ziggeoRecorderApplicationOptions,
  ...reactCustomOptions
};

ZiggeoRecorder.defaultProps = {
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

  // only react related options
  'preventReRenderOnUpdate': true,

  'display-timer': true,
  'rtmpstreamtype': 'mp4',
  'rtmpmicrophonecodec': 'speex',

  'multistreamreversable': true,
  'multistreamdraggable': true,
  'addstreamproportional': true,
  'addstreampositionx': 5,
  'addstreampositiony': 5,
  'addstreampositionwidth': 120,
  'addstreampositionheight': 95,
  'addstreamminwidth': 120,
  'addstreamminheight': 95,

  // application settings
  webrtc_streaming: false,
  webrtc_streaming_if_necessary: false,
  webrtc_on_mobile: false,
  auth: false,
  debug: false,
  testing_application: false,

  // screen configuration for Ziggeo extension
  "allowscreen": false,
  chrome_extension_id: "meoefjkcilgjlkibnjjlfdgphacbeglk",
  chrome_extension_install_link: "https://chrome.google.com/webstore/detail/meoefjkcilgjlkibnjjlfdgphacbeglk",
  opera_extension_id: "dnnolmnenehhgplebjhbcmfdbaabkepm",
  opera_extension_install_link: "https://addons.opera.com/en/extensions/details/3d46d4c36fefe97e76622c54b2eb6ea1d5406767",

  // Default events to no-op
  ...Object.keys(Object.assign(ziggeoRecorderEmbeddingEventsPropTypes, ziggeoCommonEmbeddingEventsPropTypes)).reduce((defaults, event) => {
    defaults[event] = () => {};
    return defaults;
  }, {})
};

export default ZiggeoRecorder;

