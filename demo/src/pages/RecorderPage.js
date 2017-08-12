import React from 'react';
import {API_KEY} from '../constants';
import {ZiggeoRecorder} from 'react-ziggeo';


const RecorderPage = (props) => {
    return (
        <section className="">
            <h1 className="page-header">Recorder Page</h1>
            <ZiggeoRecorder apiKey={API_KEY} />
        </section>
    );
};

export default RecorderPage;