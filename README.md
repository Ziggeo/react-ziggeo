## Ziggeo's React component v2
(For documentation on v1, see [here](https://github.com/Ziggeo/react-ziggeo/tree/master/docs/v1))

We have a demo project [here](https://github.com/Ziggeo/react-ziggeo/tree/master/demo) for you to clone.

## Video Recorder

```$xslt
import React from 'react'
import {ZiggeoRecorder} from 'react-ziggeo'
...
    // after react-ziggeo 3.3.0 version embedding argument also accessible
    recorderRecording = (embedding /* only starting from react-ziggeo 3.3.0 */) => {
        console.log('Recorder onRecording');
    };

    recorderUploading = (embedding /* only starting from react-ziggeo 3.3.0 */) => {
        console.log('Recorder uploading');
    };
 
...
 
    <ZiggeoRecorder
        apiKey={API_KEY}
        video={VIDEO_TOKEN}
        height={180}
        width={320}
        onRecording={this.recorderRecording}
        onUploading={this.recorderUploading}
    />
 
...
```
[All Built-in Recorder Events](https://github.com/Ziggeo/react-ziggeo/#available-events-for-recorder)

##### Available `event listeners` for Recorder

```react2html
   
  - onPlaying
  - onPaused
  - onAttached
  - onLoaded
  - onEnded
  - onSeek 
  - onError
  - onManuallySubmitted
  - onUploaded
  - onUploadSelected
  - onRecording
  - onUploading
  - onRerecord
  - onCountdown
  - onProcessing
  - onProcessed
  - onRecordingProgress
  - onUploadProgress
  - onAccessForbidden
  - onAccessGranted
  - onCameraUnresponsive
  - onVerified
  - onNoCamera
  - onNoMicrophone
  - onRef
```
### Recorder option Screen Recorder
Screen Capture is currently supported by Firefox, Chrome and Opera.
- Firefox: Direct support -- no extensions or plugins required
- Chrome + Opera: use extension builder located in your application manager

Note: By default Ziggeo Chrome/Opera extension will be set.
[For more info](https://ziggeo.com/features/screen-recording), in this url you also can find how to set your own extensions

```
    <ZiggeoRecorder
        apiKey={API_KEY}
        allowscreen={true}
        allowrecord={false} // Optional you can even set it to true
        allowupload={false} // Optional you can even set it to true
        chrome_extension_id={YOUR_CHROME_EXTENSION_ID}
        chrome_extension_install_link={YOUR_CHROME_EXTENSION_INSTALLATION_LINK}
        opera_extension_id={YOUR_OPERA_EXTENSION_ID}
        opera_extension_install_link={YOUR_OPERA_EXTENSION_INSTALLATION_LINK}
        ...
    />

## Video Player

```$xslt
import React from 'react'
import {ZiggeoPlayer} from 'react-ziggeo'
 
...
 
    // after react-ziggeo 3.3.0 version embedding argument also accessible
    playing = (embedding /* only starting from react-ziggeo 3.3.0 */) => {
        console.log('it\'s playing, your action here');
    };
 
    paused = (embedding /* only starting from react-ziggeo 3.3.0 */) => {
        console.log('it\'s paused, your action when pause');
    };
 
...
    <ZiggeoPlayer
      apiKey={'your api key provided by ziggeo'}
      video={'Video Token'}
      theme={'modern'}
      themecolor={'red'}
      skipinitial={false}
      onPlaying={this.playing}
      onPaused={this.paused}
      ...
    />
...
```
[All Built-in Player Events](https://github.com/Ziggeo/react-ziggeo/#available-events-for-player)

##### Available `events listeners` for Player
```react2html
   
   - onPlaying
   - onPaused
   - onAttached
   - onLoaded
   - onEnded
   - onError
   - onSeek 
   - onRef
```

#### Extensions

##### Get Recorder Instance and invoke `methods`
Add attribute `onRef={ref => (this.child = ref)}` to obtain access to recorder instances and their methods.

```javascript
    <ZiggeoRecorder
        apiKey={apiToken}
        onRef={ref => (this.child = ref)}
    />
```
Now you can call built-in methods:
```javascript
    this.child.get(args);
    this.child.play();
    this.child.record();
    this.child.upload();
    this.child.rerecord();
    this.child.stop();
    this.child.hidePopup();
    this.child.reset();
```
Also you can also obtain an instance:
```
    let recorderInstance = this.child.recorderInstance();
    // e.g. call: playerInstance.play();
    let properties = this.playerInstance.get('propertyName');
```

##### Get Player Instance and invoke `methods`
Add attribute `onRef={ref => (this.child = ref)}` to obtain access to player instances and their methods.

```javascript
    <ZiggeoPlayer
        apiKey={apiToken}
        video={videoToken}
        onRef={ref => (this.child = ref)}
    />
```
Now you can call built-in methods:
```javascript
    this.child.play();
    this.child.pause();
    this.child.stop();
    this.child.seek(seconds);
    this.child.set_volume(volume_level_1_to_100);
```
Also you can also obtain an instance:
```
    let playerInstance = this.child.playerInstance();
    // e.g. call: playerInstance.play();
    let properties = this.playerInstance.get('propertyName');
```

## Component Options
```javascript
    preventReRenderOnUpdate={boolean} // default is true
```

## Notes
By default, components prevent re-rendering the UI with the option `preventReRenderOnUpdate`, to overwrite this.
```javascript
    <ZiggeoRecorder
        preventReRenderOnUpdate={false}
    />
```
There are some issues with when being called right after initialization.


#### Additional Parameters

React SDK supports all of the following events and parameters:
- [Ziggeo Available Parameters](https://ziggeo.com/docs/sdks/javascript/browser-integration/parameters)
- [Ziggeo Available Embedding Events](https://ziggeo.com/docs/sdks/javascript/browser-interaction/events)
- [Application-wide Embedding Events](https://ziggeo.com/docs/sdks/javascript/browser-interaction/application-embedding-events#javascript-revision=stable)

#### Changelog:
- v2.4.0 added application option manageability `webrtc_streaming`, by default `false` <br/>

- v3.0.0 Upgraded to Ziggeo R31 stable version
    -- Added locale support. Example: `locale={'de'}`
    -- Added auth support `auth={true}`
    -- Added possibility to set out `flashUrl={'flash-url'}`

- v3.1.0 Added `ready_to_play` embedding event to Player and made minor structure changes
- v3.1.1
Fixed webpack/babel polyfill issue, 'Also fixed Identifier 'e' has already been declared' related bug
- v3.2.0 Upgraded ziggeo-client SDK to `2.32.7` pre-release version, to fix `FF >62` `TypeError: Argument 1 is not valid for any of the 1-argument overloads of URL.createObjectURL`
- v3.3.0 Added `embedding` argument for each event [Application-wide Embedding Events](https://ziggeo.com/docs/sdks/javascript/browser-interaction/application-embedding-events#javascript-revision=stable)
