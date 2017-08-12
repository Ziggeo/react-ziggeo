import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PlayerPage from '../pages/PlayerPage';
import RecorderPage from '../pages/RecorderPage';

class MainContent extends Component {
    render() {
        return (
            <main className="App-intro container">
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/player" component={PlayerPage} />
                    <Route exact path="/recorder" component={RecorderPage} />
                </Switch>
            </main>
        );
    }
}

export default MainContent;
