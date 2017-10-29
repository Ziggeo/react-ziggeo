import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import { routes } from '../routes';

class Header extends Component {
    render() {
        const currentPath = window.location.hash;
        return (
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>React Ziggeo Application</h2>
                <nav>
                    <ul className="list-inline">
                        {
                            routes.map(({path, title}, i) =>
                                <li key={i}>
                                    <Link
                                        to={`/${path}`}
                                        replace = { path === currentPath }>
                                        {title}
                                    </Link>
                                </li>
                            )
                        }
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;
