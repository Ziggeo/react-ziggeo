## Ziggeo's React component

Usage with ES6: 

- Recorder:
```$xslt
import React from 'react'
import {ZiggeoRecorder} from 'react-ziggeo'

...
    <ZiggeoRecorder apiKey={'your api key provided by ziggeo'}/>
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

####You can add all available all Ziggeo related options from below link:
[Ziggeo Available Parameters](https://ziggeo.com/docs/sdks/javascript/browser-integration/parameters#javascript-revision=v1-stable&javascript-version=v2)