import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'ziggeo-client-sdk/build/ziggeo.css';
import 'ziggeo-client-sdk/build/ziggeo.js';

class ZiggeoRecorder extends Component {

    static propTypes = {
        apiKey: PropTypes.string.isRequired,
        "ziggeo-theme": PropTypes.string,
        "ziggeo-themecolor": PropTypes.string,
        "ziggeo-height": PropTypes.number,
        "ziggeo-width": PropTypes.number
    };

    static defaultProps = {
        "ziggeo-theme": "default",
        "ziggeo-themecolor": "default",
        "ziggeo-height": 300,
        "ziggeo-width": 420
    };

    componentDidMount () {
        const application = new ZiggeoApi.V2.Application({token: this.props.apiKey});
    }

    render() {
        return (
            <ziggeorecorder ref={this.addZiggeoAttributes}></ziggeorecorder>
        );
    }

    addZiggeoAttributes = (node) => {
        const {apiKey, ...rest} = this.props;
        const options = {...rest};
        Object.keys(options).map((option) =>
            node.setAttribute(option, this.props[option])
        )
    }
}

export default ZiggeoRecorder;