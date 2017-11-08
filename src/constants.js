import { string, number, bool, arrayOf, func, array, object, oneOfType } from 'prop-types';

// ####################### Application Events #############################
// application.embed_event.on..
export const ziggeoApplicationEvents = {
    onError: func,
    onReady: func
};


// ####################### Player/Recorder Attributes #############################
// When using HTML embed methods, all parameters should be prefixed with ziggeo-
// https://ziggeo.com/docs/sdks/javascript/browser-integration/parameters#javascript-revision=v1-r29&javascript-version=v2
export const ziggeoRecorderAttributesPropTypes = {
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

export const ziggeoPlayerAttributesPropTypes = {
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
    'localplayback': bool,
    'theme': string,
    'themecolor': string,
    'sharevideo':	arrayOf(string),

    // Security parameters
    'server-auth': string,
    'client-auth': string,

    // Video management parameters
    'video': string.isRequired,
    'stream':	string,
    'effect-profile': array,
    'video-profile': string,
    'noaudio': bool,
    'source':	string,
    'framerate': number,
    'videobitrate': oneOfType([number, string]),
    'audiobitrate': oneOfType([number, string]),

    // Data parameters
    'tags': arrayOf(string),
    'custom-data':	object,
    'title':	string,
    'description': string,

    // Operational parameters
    'autoplay': bool,
    'application':	string,
    'flashincognitosupport': bool,
    'forceflash': bool,
    'noflash': bool,
    'initialseek': number,
    'playfullscreenonmobile': bool,

    // Form and HTML parameters
    'input-bind': string,
    'form-accept': string
};

// converted based on above attributes
export const ziggeoPlayerConvertedAttributes = Object.keys(ziggeoPlayerAttributesPropTypes).reduce((collector, attribute) => {
    const attributeName = "ziggeo-" + attribute;
    collector[attributeName] = ziggeoPlayerAttributesPropTypes[attribute];
    return collector;
}, {});

export const ziggeoRecorderConvertedAttributes = Object.keys(ziggeoRecorderAttributesPropTypes).reduce((collector, attribute) => {
    const attributeName = "ziggeo-" + attribute;
    collector[attributeName] = ziggeoRecorderAttributesPropTypes[attribute];
    return collector;
}, {});


// #######################  DEFAULTS  ##################################


// #######################  EMBEDDING EVENTS #############################
// Javascript Embed Recorder Events
// https://ziggeo.com/docs/sdks/javascript/browser-interaction/application-embedding-events#javascript-revision=v1-r29
// application.embed_event.on..
export const ziggeoRecorderEmbeddingEventsPropTypes = {
    onPlayerAttached: func,
    onPlayerLoaded: func,
    onPlayerPlaying: func,
    onPlayerPaused: func,
    onPlayerEnded: func,
    onPlayerSeek: func,
    onRecorderError: func,
    onRecorderManuallySubmitted: func,
    onRecorderRecordingProgress: func,
    onRecorderUploaded: func,
    onRecorderUploadSelected: func,
    onRecorderRecording: func,
    onRecorderUploading: func,
    onRecorderSeek: func,
    onRecorderRerecord: func,
    onRecorderCountdown: func,
    onRecordingProgress: func,
    onRecorderUploadProgress: func,
    onRecorderProcessing: func,
    onRecorderProcessed: func,
    onRecorderAccessForbidden: func,
    onRecorderAccessGranted: func,
    onRecorderCameraUnresponsive: func,
    onRecorderVerified: func,
    onRecorderNoCamera: func,
    onRecorderNoMicrophone: func
};

export const ziggeoPlayerEmbeddingEventsPropTypes = {
    onPlayerAttached: func,
    onPlayerLoaded: func,
    onPlayerPlaying: func,
    onPlayerPaused: func,
    onPlayerEnded: func,
    onPlayerError: func,
    onPlayerSeek: func
};

// #######################  ZIGGEO METHODS  ##############################
// Methods
// https://ziggeo.com/docs/sdks/javascript/browser-interaction/methods#javascript-revision=v1-r29&javascript-version=v2
export const ziggeoMethods = {
    callPlay: func,
    callRecord: func,
    callUpload: func,
    callRerecord: func,
    callStop: func,
    callStopRecord: func,
    callHidePopup: func,
    callReset: func,
    callToggleUploader: func,
    callToggleRecorder: func,
    callActivate: func,
    callRightLevel: func,
    callAverageFrameRate: func,
    callIsRecording: func,
    callHide: func,
    callWidth: func,
    callHeight: func,
    callDestroy: func
};


// #######################    ##############################
// Common Events
// https://ziggeo.com/docs/sdks/javascript/browser-interaction/events#javascript-revision=v1-r29&javascript-version=v2
export const ziggeoApiEventsPropTypes = {
    onPlay: func,
    onPause: func,
    onStop: func,
    onErrorPlayer: func,
    onSubmitted: func,
    onPlayerSeek: func,
    onManuallySubmitted: func,
    onUploaded: func,
    onUploadSelected: func,
    onRecording: func,
    onUploading: func,
    onFinished: func,
    onDiscarded: func,
    onErrorRecorder: func,
    onCountdown: func,
    onElapsed: func,
    onUploadProgress: func,
    onProcessingProgress: func,
    onReadyToRecord: func,
    onReadyToPlay: func,
    onAccessForbidden: func,
    onAccessGranted: func,
    onAccessRevoked: func,
    onRecorderProcessed: func
};