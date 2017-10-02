import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = () => {
    return (
        <section className="home-page">
            <h1 className="page-header">Home page of mini app</h1>
            <p>Please be sure that you've entered API key and Video token in constants file</p>
            <p>After you can switch between links below to see Ziggeo in action:</p>
            <ul className="list-unstyled">
                <li>1) <Link to="/player">Player</Link></li>
                <li>2) <Link to="/recorder">Recorder</Link></li>
                <li>3) <Link to="/embed-player">Embed Player</Link></li>
                <li>4) <Link to="/embed-recorder">Embed Recorder</Link></li>
            </ul>
        </section>
    );
}

export default HomePage;