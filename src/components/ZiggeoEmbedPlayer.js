import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class ZiggeoEmbedPlayer extends Component {

    componentDidMount() {
        const _self = this;
        const { apiKey, onPlayerPlaying, onPlayerPaused, onPlayerAttached,
            onPlayerLoaded, onPlayerEnded, onPlayerError, onPlayerSeek, ...rest} = this.props;
        const options = {...rest};

        this.application = ZiggeoApi.V2.Application.instanceByToken(apiKey);
        this.player = new ZiggeoApi.V2.Player({
            element: ReactDOM.findDOMNode(_self),
            attrs: options
        });

        this.player.activate();

        this.player.on("playing", function () {
            if (onPlayerPlaying) this.props.onPlayerPlaying();
        }, this);

        this.player.on("paused", function () {
            if (onPlayerPaused) onPlayerPaused.call();
        }, this);

        this.player.on("attached", function () {
            if (onPlayerAttached) onPlayerAttached.call();
        }, this);

        this.player.on("loaded", function () {
            if (onPlayerLoaded) onPlayerLoaded.call();
        }, this);

        this.player.on("ended", function () {
            if (onPlayerEnded) onPlayerEnded.call();
        }, this);

        this.player.on("error", function () {
            if (onPlayerError) onPlayerError.call();
        }, this);

        this.player.on("seek", function () {
            if (onPlayerSeek) onPlayerSeek.call();
        }, this);
    };

    componentWillUnmount() {
        this.player.destroy();
    };

    render() {
        return <div></div>;
    };
}

ZiggeoEmbedPlayer.propTypes = {
    apiKey:             PropTypes.string.isRequired,
    "video":            PropTypes.string.isRequired,
    "stream":           PropTypes.string,
    "theme":            PropTypes.string,
    "themecolor":       PropTypes.string,
    "height":           PropTypes.number,
    "width":            PropTypes.number,
    "stretch":          PropTypes.bool,
    "skipinitial":      PropTypes.bool,
    "effect-profile":   PropTypes.array,

    "autoplay":         PropTypes.bool,
    "responsive":       PropTypes.bool,
    "stream-width":     PropTypes.number,
    "stream-height":    PropTypes.number,
    "nofullscreen":     PropTypes.bool,
    "sharevideo":       PropTypes.bool,
    "source":           PropTypes.string,

    onPlayerPlaying:    PropTypes.func,
    onPlayerPaused:     PropTypes.func,
    onPlayerAttached:   PropTypes.func,
    onPlayerLoaded:     PropTypes.func,
    onPlayerEnded:      PropTypes.func,
    onPlayerError:      PropTypes.func,
    onPlayerSeek:       PropTypes.func
};

ZiggeoEmbedPlayer.defaultProps = {
    "theme": 'default',
    "themecolor": 'default',
    "width": 320,
    "height": 180
};

export default ZiggeoEmbedPlayer;
