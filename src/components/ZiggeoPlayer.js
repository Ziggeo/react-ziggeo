import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ZiggeoPlayer extends Component {

    componentDidMount () {
        this.application  = ZiggeoApi.V2.Application.instanceByToken(this.props.apiKey);
    };

    render () {
        return (
            <ziggeoplayer ref={this.addZiggeoAttributes}></ziggeoplayer>
        );
    };

    addZiggeoAttributes = (node) => {
        const {apiKey, ...rest} = this.props;

        const options = {...rest};
        if(Object.keys(options).length > 0 && node)
            Object.keys(options).map((option) =>
                node.setAttribute(option, this.props[option])
            )
    };
}

ZiggeoPlayer.propTypes = {
    apiKey:             PropTypes.string.isRequired,
    "ziggeo-video":     PropTypes.string.isRequired,
    "ziggeo-theme":     PropTypes.string,
    "ziggeo-themecolor":PropTypes.string,
    "ziggeo-height":    PropTypes.number,
    "ziggeo-width":     PropTypes.number
};

ZiggeoPlayer.defaultProps = {
    "ziggeo-theme": 'default',
    "ziggeo-themecolor": 'default'
};

export default ZiggeoPlayer;
