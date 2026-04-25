import React, { Component } from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PlayerPage from '../pages/player/PlayerPage';
import RecorderPage from '../pages/recorder/RecorderPage';
import PlayerActionsPage from "../pages/player/PlayerActionsPage";
import RecorderActionsPage from "../pages/recorder/RecorderActionsPage";
import PlayerListPage from '../pages/player/PlayerListPage';

class MainContent extends Component {
    render() {
        return (
            <main className="App-intro container">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/player" element={<PlayerPage />} />
                    <Route path="/recorder" element={<RecorderPage />} />
                    <Route path="/player-actions" element={<PlayerActionsPage />} />
                    <Route path="/recorder-actions" element={<RecorderActionsPage />} />
                    <Route path="/player-list" element={<PlayerListPage />} />
                </Routes>
            </main>
        );
    }
}

export default MainContent;
