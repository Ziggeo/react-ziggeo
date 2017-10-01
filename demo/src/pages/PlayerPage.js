import React from 'react';
import { ZiggeoPlayer } from 'react-ziggeo';
import { API_KEY, VIDEO_TOKEN } from '../constants';

const PlayerPage = (props) => {
    return (
        <section className="player-page">
            <h1 className="page-header">Player Page</h1>
            <ZiggeoPlayer apiKey={API_KEY} ziggeo-video={VIDEO_TOKEN} />

            <div className="text-left">
                <h5 className="text-center"> ES6 Code Sample </h5>
                <pre>
                    {"import React from 'react';"} <br/>
                    {"import { ZiggeoPlayer } from 'react-ziggeo';"}<br/>
                    {"import { API_KEY, VIDEO_TOKEN } from '../constants';"}
                    <br/><br/>
                    ...
                    <br/><br/>
                    {'<ZiggeoPlayer \n\t apiKey="Ziggeo provided key" \n\t ziggeo-video="your video token" \n/>'}
                    <br/>
                    ...
                </pre>
            </div>
        </section>
    );
};

export default PlayerPage;