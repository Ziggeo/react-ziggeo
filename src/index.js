import 'ziggeo-client-sdk/build/ziggeo.css';
import 'ziggeo-client-sdk/build/ziggeo.js';

if (!Object.entries)
    Object.entries = function( obj ) {
        var ownProps = Object.keys( obj ),
            i = ownProps.length,
            resArray = new Array(i); // preallocate the Array
        while (i--)
            resArray[i] = [ownProps[i], obj[ownProps[i]]];

        return resArray;
    };

export ZiggeoPlayer from "./components/ZiggeoPlayer";
export ZiggeoRecorder from "./components/ZiggeoRecorder";