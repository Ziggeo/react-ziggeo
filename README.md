## Ziggeo's React component

Usage with ES6: 

- Recorder:
```$xslt
import React from 'react'
import {ZiggeoRecorder} from 'react-ziggeo'

...
    <ZiggeoRecorder apiKey={'your api key provided by ziggeo'}
    />
...
```

- Player:
```$xslt
import React from 'react'
import {ZiggeoPlayer} from 'react-ziggeo'

...
    <ZiggeoPlayer
      apiKey={'your api key provided by ziggeo'}
      ziggeo-video={'Video Token'}
      ziggeo-theme={'modern'}
      ziggeo-themecolor={'red'}
      ziggeo-skipinitial={false}
    />
...
```
    
- Embed Player:
```react2html   
import React from 'react'
import {ZiggeoEmbedPlayer} from 'react-ziggeo'
...
 
playing = () => {
    console.log('it\'s playing, your action here');
};

paused = () => {
    console.log('it\'s paused, your action when pause');
};

...

<ZiggeoEmbedPlayer
    apiKey={API_KEY}
    video={VIDEO_TOKEN}
    height={180}
    width={320}
    onPlayerPlaying={this.playing}
    onPlayerPaused={this.paused}
    ...
/>
```
##### Available `events` for player:
```react2html
   
   - onPlayerPlaying
   - onPlayerPaused
   - onPlayerAttached
   - onPlayerLoaded
   - onPlayerEnded
   - onPlayerError
   - onPlayerSeek 
```

- Embed Recorder:

```react2html
import React from 'react'
import {ZiggeoEmbedPlayer} from 'react-ziggeo'
...

recorderRecording = () => {
    console.log('Recorder onRecorderRecording');
};

recorderUploaded = () => {
    console.log('Recorder onRecorderUploaded');
};
...
<ZiggeoEmbedRecorder
    apiKey={API_KEY}
    video={VIDEO_TOKEN}
    height={180}
    width={320}
    onRecorderRecording={this.recorderRecording}
    onRecorderUploading={this.recorderUploading}
    ...
/>
``` 

##### Available `events` for recorder:

```react2html
   
   - onPlayerPlaying
   - onPlayerPaused
   - onPlayerAttached
   - onPlayerLoaded
   - onPlayerEnded
   - onPlayerSeek 
   - onRecorderError
   - onRecorderManuallySubmitted
   - onRecorderUploaded
   - onRecorderUploadSelected
   - onRecorderRecording
   - onRecorderUploading
   - onRecorderRerecord,
   - onRecorderCountdown,
   - onRecorderRecordingProgress,
   - onRecorderUploadProgress,
   - onRecorderAccessForbidden,
   - onRecorderAccessGranted,
   - onRecorderCameraUnresponsive,
   - onRecorderVerified,
   - onRecorderNoCamera,
   - onRecorderNoMicrophone
```

#### Additional Parameters

You can add all available all Ziggeo related options from below link:
- [Ziggeo Available Parameters](https://ziggeo.com/docs/sdks/javascript/browser-integration/parameters#javascript-revision=v1-stable&javascript-version=v2)
- [Ziggeo Available Embedding Events](https://ziggeo.com/docs/sdks/javascript/browser-interaction/events)


#### Working Demo:
- [react-live-demo](https://sambua.github.io/react-ziggeo-page)
- [react-ziggeo demo for local install](https://github.com/Ziggeo/react-ziggeo/tree/master/demo)
