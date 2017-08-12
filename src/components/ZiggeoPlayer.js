import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'ziggeo-client-sdk/build/ziggeo.css';
import 'ziggeo-client-sdk/build/ziggeo.js';

class ZiggeoPlayer extends Component {

    static state = {application: null};

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

    componentDidMount () {
        this.setState({
            application: ZiggeoApi.V2.Application.instanceByToken(this.props.apiKey)
        });
    }

    componentWillUnmount () {}

    render () {
        return (
            <ziggeoplayer ref={this.addZiggeoAttributes}></ziggeoplayer>
        );
    }

    addZiggeoAttributes = (node) => {
        const {apiKey, ...rest} = this.props;

        const options = {...rest};
        if(Object.keys(options).length > 1 && node)
            Object.keys(options).map((option) =>
                node.setAttribute(option, this.props[option])
            )
    }
}

export default ZiggeoPlayer;
