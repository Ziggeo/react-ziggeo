import React from 'react';
import {ZiggeoPlayer} from 'react-ziggeo';
import {API_KEY} from '../constants';
import {VIDEO_TOKEN} from '../constants';

const PlayerPage = (props) => {
    return (
        <section className="player-page">
            <h1 className="page-header">Player Page</h1>
            <p>Video token: {VIDEO_TOKEN}</p>
            <ZiggeoPlayer apiKey={API_KEY} ziggeo-video={VIDEO_TOKEN} />
        </section>
    );
};

export default PlayerPage;