import React, {Component as ReactComponent} from 'react';

export default (Component) => class CheckCredentials extends ReactComponent {
    static state = {
        didWarningAboutApiKey: false
    };

    warnAboutApiKey = () => {
        if(this.state.didWarningAboutApiKey) return;

        this.setState({didWarningAboutApiKey: true});

        console.warn('Please provide api key for further actions');
    };

    render () {
        return <Component {...this.props} {...this.state} warnAboutApiKey={this.warnAboutApiKey}/>
    };
}
