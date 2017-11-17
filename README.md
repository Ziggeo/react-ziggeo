## Ziggeo's React component v2
[Documentation related to v1](https://github.com/Ziggeo/react-ziggeo/tree/master/docs/v1)

Usage with ES6:
You can also clone [Demo](https://github.com/Ziggeo/react-ziggeo/tree/master/demo)

## Recorder:
Ziggeo recorder

```$xslt
import React from 'react'
import {ZiggeoRecorder} from 'react-ziggeo'
...
 
    recorderRecording = () => {
        console.log('Recorder onRecorderRecording');
    };

    recorderUploaded = () => {
        console.log('Recorder onRecorderUploaded');
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
[All Build-in Recorder Events](https://github.com/Ziggeo/react-ziggeo/#available-events-for-recorder)

##### Available `event listeners` for recorder:

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
   - onRerecord,
   - onCountdown,
   - onRecordingProgress,
   - onUploadProgress,
   - onAccessForbidden,
   - onAccessGranted,
   - onCameraUnresponsive,
   - onVerified,
   - onNoCamera,
   - onNoMicrophone
```


## Player:

Ziggeo player:

```$xslt
import React from 'react'
import {ZiggeoPlayer} from 'react-ziggeo'
 
...
 
playing = () => {
    console.log('it\'s playing, your action here');
};
 
paused = () => {
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
[All Build-in Player Events](https://github.com/Ziggeo/react-ziggeo/#available-events-for-player)

##### Available `events listeners` for player:
```react2html
   
   - onPlaying
   - onPaused
   - onAttached
   - onLoaded
   - onEnded
   - onError
   - onSeek 
```

#### Some available build-in methods and not only. You can extend it based on your requirements.

##### Get Recorder Instance and related `methods`
Add attribute `onRef={ref => (this.child = ref)}` to get access to player instance and related methods.

```javascript
    <ZiggeoRecorder
        apiKey={apiToken}
        onRef={ref => (this.child = ref)}
    />
```
Now you can get build-in methods:
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
Also you can get player instance:
```
    let recorderInstance = this.child.recorderInstance();
    // you can call above functions also example: playerInstance.play();
    let properties = this.playerInstance.get('propertyName');
```
Working example you can find in current repo [Demo](https://github.com/Ziggeo/react-ziggeo/tree/master/demo) folder

##### Get Player Instance and related `methods`
Add attribute `onRef={ref => (this.child = ref)}` to get access to player instance and related methods.

```javascript
    <ZiggeoPlayer
        apiKey={apiToken}
        video={videoToken}
        onRef={ref => (this.child = ref)}
    />
```
Now you can get build-in methods:
```javascript
    this.child.play();
    this.child.pause();
    this.child.stop();
    this.child.seek(seconds);
    this.child.set_volume(volume_level_1_to_100);
```
Also you can get player instance:
```
    let playerInstance = this.child.playerInstance();
    // you can call above functions also example: playerInstance.play();
    let properties = this.playerInstance.get('propertyName');
```
Working example you can find in current repo [Demo](https://github.com/Ziggeo/react-ziggeo/tree/master/demo) folder


#### Additional Parameters

You can add all available all Ziggeo related options from below link:
- [Ziggeo Available Parameters](https://ziggeo.com/docs/sdks/javascript/browser-integration/parameters#javascript-revision=v1-stable&javascript-version=v2)
- [Ziggeo Available Embedding Events](https://ziggeo.com/docs/sdks/javascript/browser-interaction/events)


#### Working Demo:
- [react-live-demo](https://sambua.github.io/react-ziggeo-page)
- [react-ziggeo demo for local install](https://github.com/Ziggeo/react-ziggeo/tree/master/demo)
