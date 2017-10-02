import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ZiggeoRecorder extends Component {

    componentDidMount () {
        this.application = ZiggeoApi.V2.Application.instanceByToken(this.props.apiKey);
    };

    render() {
        return (
            <ziggeorecorder ref={this.addZiggeoAttributes}></ziggeorecorder>
        );
    };

    addZiggeoAttributes = (node) => {
        const {apiKey, ...rest} = this.props;

        const options = {...rest};
        if(Object.keys(options).length > 1 && node)
            Object.keys(options).map((option) =>
                node.setAttribute(option, this.props[option])
            )
    };
}

ZiggeoRecorder.propTypes = {
    apiKey: PropTypes.string.isRequired,
    "ziggeo-theme": PropTypes.string,
    "ziggeo-themecolor": PropTypes.string,
    "ziggeo-height": PropTypes.number,
    "ziggeo-width": PropTypes.number
};

ZiggeoRecorder.defaultProps = {
    "ziggeo-theme": "default",
    "ziggeo-themecolor": "default",
    "ziggeo-height": 300,
    "ziggeo-width": 420
};

export default ZiggeoRecorder;
