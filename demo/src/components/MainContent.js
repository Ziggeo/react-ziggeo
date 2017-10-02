import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PlayerPage from '../pages/PlayerPage';
import RecorderPage from '../pages/RecorderPage';
import EmbedPlayerPage from '../pages/EmbedPlayerPage';
import EmbedRecorderPage from '../pages/EmbedRecorderPage';

class MainContent extends Component {
    render() {
        return (
            <main className="App-intro container">
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/player" component={PlayerPage} />
                    <Route exact path="/recorder" component={RecorderPage} />
                    <Route exact path="/embed-player" component={EmbedPlayerPage} />
                    <Route exact path="/embed-recorder" component={EmbedRecorderPage} />
                </Switch>
            </main>
        );
    }
}

export default MainContent;
