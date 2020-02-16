import React, { useState, useEffect } from 'react';
import {ziggeoApplicationEvents, ziggeoRecorderApplicationOptions} from "../constants";
import { string } from "prop-types";

const withZiggeoApplication = WrappedComponent => {
  return ({apiKey, flashUrl, locale, ...restProps}) => {

    const [app, setApp] = useState(null);

    useEffect(() => {
      try {
        if (!app) initApplication();
      } catch (e) {
        console.error(e);
      }

      return () => {
        // NOTE: DON'T DESTROY APPLICATION ITSELF
        // Will receive error 'Cannot read property 'urls' of undefined'
        // if (app) app.destroy();
      }
    }, [app]);

    const initApplication = () => {
      // Set locale
      if (typeof locale !== "undefined")
        ZiggeoApi.V2.Locale.setLocale(locale);

      // Set external flash player
      if (typeof flashUrl !== "undefined")
        ZiggeoApi.V2.Config.set("flash", flashUrl);

      setApp(ZiggeoApi.V2.Application.instanceByToken(apiKey, applicationOptions));
    };

    const applicationOptions = () => {
      return Object.keys(restProps)
        .filter(k => ziggeoRecorderApplicationOptions[k]).reduce((props, k) => {
          props[k] = props[k];
          return props;
        }, {});
    };

    return (<WrappedComponent {...restProps} app={app} />);
  };
};

withZiggeoApplication.prototype = {
  apiKey: string.isRequired,
};

export default withZiggeoApplication;
