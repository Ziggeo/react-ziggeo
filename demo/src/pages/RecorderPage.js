import React from 'react';
import {API_KEY} from '../constants';
import {ZiggeoRecorder} from 'react-ziggeo';


const RecorderPage = (props) => {
    return (
        <section className="">
            <h1 className="page-header">Recorder Page</h1>
            <p className="alert alert-warning">
                <strong>Note: </strong>
                It's demonstrative view, recording and uploading set to not allowed, you can register <a href="https://ziggeo.com">Ziggeo</a>. After getting key, use all awesome features
            </p>
            <ZiggeoRecorder apiKey={API_KEY}
                ziggeo-allowrecord={false}
                ziggeo-allowedextensions={['no.type']}
            />

            <h5 className="text-center"> ES6 Code Sample </h5>
            <div className="text-left">
                <pre>
                    {"import React from 'react';"} <br/>
                    {"import { ZiggeoRecorder } from 'react-ziggeo';"} <br/>
                    {"import { API_KEY } from '../constants';"} <br/>

                    <br/><br/>
                    ...
                    <br/><br/>
                    <code>
                        {"<ZiggeoRecorder \n\t apiKey={'Ziggeo API key'} " +
                        "\n\t ziggeo-allowedextensions={['no.type']} \n\t ziggeo-allowrecord={false} \n/>"}
                    </code>
                    <br/><br/>
                    ...
                </pre>
            </div>
        </section>
    );
};

export default RecorderPage;