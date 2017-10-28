import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {ziggeoPlayerAttributesPropTypes} from "../constants";

class ZiggeoPlayer extends Component {

    static propTypes = {
        apiKey:             PropTypes.string.isRequired,
        "ziggeo-video":     PropTypes.string.isRequired,
        "ziggeo-theme":     PropTypes.string,
        "ziggeo-themecolor":PropTypes.string,
        "ziggeo-height":    PropTypes.number,
        "ziggeo-width":     PropTypes.number
    };

    static defaultProps = {
        "ziggeo-theme": 'default',
        "ziggeo-themecolor": 'default'
    };

    componentWillMount () {
        this.application  = ZiggeoApi.V2.Application.instanceByToken(this.props.apiKey);
        this.options = this._ziggeoAttributes;
    }

    componentDidMount () {
        // return undefined, find element based on DOM
        //_self.embedding =  ZiggeoApi.V2.Player.findByElement( ReactDOM.findDOMNode(this) );

        this.application.on("ready", function () {
            this.application.embed_events.on("playing", function () {
                //Your code goes here
                console.log('playing single');
            });
        }, this);
    };

    componentWillUnmount () {}

    render () {
        return (
            <ziggeoplayer ref={this.addZiggeoAttributes}></ziggeoplayer>
        );
    };

    addZiggeoAttributes = (node) => {

        // Inject node with provided ziggeo options
        if (node) {
            const regexp = new RegExp(/(ziggeo-)/g);
            Object.keys(this.props)
                .filter(value => regexp.test(value)).reduce((props, value) => {
                    let verifier = value.replace(regexp, '');
                    if (!ziggeoPlayerAttributesPropTypes[verifier]) {
                        console.warn('Please be sure there\'re no typo in ' + value + ' option');
                    }
                    node.setAttribute(value, this.props[value])
            }, {});
        }
    };
}

export default ZiggeoPlayer;
