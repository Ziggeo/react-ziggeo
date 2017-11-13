import React, { Component } from 'react';
import {
    ziggeoPlayerAttributesPropTypes, ziggeoPlayerEmbeddingEventsPropTypes
} from '../constants';
import { string, bool, arrayOf, func  } from 'prop-types';

class ZiggeoEmbedPlayer extends Component {

    static propTypes = {
        apiKey:	string.isRequired,
        ...ziggeoPlayerAttributesPropTypes,
        ...ziggeoPlayerEmbeddingEventsPropTypes
    };

    static defaultProps = {
        // Presentational parameters
        'width': 640,
        'height': 480,
        'picksnapshots': true,
        'theme': 'default',
        'themecolor': 'default',

        // Default events to no-op
        ...Object.keys(ziggeoPlayerEmbeddingEventsPropTypes).reduce((defaults, event) => {
            defaults[event] = () => {};
            return defaults;
        }, {})
    };

    // ZiggeoApi.V2.Player requires an existing DOM element to attach to
    // So why we can't use it in componentWillMount
    componentDidMount() {
        this.props.onRef(this);

        const { apiKey } = this.props;
        this.application = ZiggeoApi.V2.Application.instanceByToken(apiKey);

        this._buildPlayer();
    };

    componentWillUpdate (nextState) {
        this.embedding = ZiggeoApi.V2.Player.findByElement(this.element);
    }

    componentDidUpdate (prevState) {
        this._buildPlayer();
    }

    componentWillUnmount () {
        // Never add this.application.destroy() !!!
        // Will receive error 'Cannot read property 'urls' of undefined'
        this.props.onRef(undefined);
    }

    render() {
        return <div ref={e => { this.element = e ; }} {...this._elementProps}></div>;
    };

    _buildPlayer = () => {
        this.player = new ZiggeoApi.V2.Player({
            element: this.element,
            attrs: this._ziggeoAttrs
        });
        this.player.activate();

        Object.entries(this._ziggeoEvents).forEach(([event, func]) => {
            this.player.on(event, func);
        });
    }

    _ziggeoEvents = Object.keys(ziggeoPlayerEmbeddingEventsPropTypes).reduce((memo, propName) => {
        const eventName = propName.replace(/([A-Z])/g, '_$1').toLowerCase().slice(3)
            .replace(/(recorder_|player_)/g, '');
        memo[eventName] = (...args) => {
            this.props[propName](...args)
        };
        return memo;
    }, {});

    get _ziggeoAttrs () {
        return Object.keys(this.props).filter(k => ziggeoPlayerAttributesPropTypes[k]).reduce((props, k) => {
            props[k] = this.props[k];
            return props;
        }, {});
    }

    // Props which are not related to Ziggeo
    get _elementProps () {
        return Object.keys(this.props).filter(k => !this.constructor.propTypes[k]).reduce((props, k) => {
            props[k] = this.props[k];
            return props;
        }, {});
    }

    // Delegate ziggeo attrs to the player
    playerEmbedding = () => this.player;

    // Delegate ziggeo methods to the player
    // play = () => this.player.play();
    // pause = () => this.player.pause();
    // stop = () => this.player.stop();
    // seek = (...args) => this.player.seek(...args);
    // set_volume = (...args) => this.player.set_volume(...args);
}

export default ZiggeoEmbedPlayer;
