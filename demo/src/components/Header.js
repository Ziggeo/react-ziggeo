import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';

class Header extends Component {
    render() {
        return (
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>React Ziggeo Application</h2>
                <nav>
                    <ul className="list-inline">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/player">Player</Link></li>
                        <li><Link to="/recorder">Recorder</Link></li>
                        <li><Link to="/embed-player">Embed Player</Link></li>
                        <li><Link to="/embed-recorder">Embed Recorder</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;
