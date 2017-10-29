import React from 'react';
import {Link} from 'react-router-dom';
import { routes } from '../routes';

const HomePage = () => {
    const currentPath = window.location.hash;
    return (
        <section className="home-page">
            <h1 className="page-header">Home page of mini app</h1>
            <p>Please be sure that you've entered API key and Video token in constants file</p>
            <p>After you can switch between links below to see Ziggeo in action:</p>
            <ul className="list-unstyled">
                {
                    routes.map(({path, title}, i) =>
                        i !==0 &&
                        <li key={i}>
                            <Link
                                to={`/${path}`}
                                replace = { path === currentPath } >
                                {i}) {title}
                            </Link>
                        </li>
                    )
                }
            </ul>
        </section>
    );
}

export default HomePage;