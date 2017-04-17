import React from 'react';
import ReactDOM from 'react-dom';

import css from './scss/app.scss';

import Navigation from 'navigation';
import Main from 'main';

ReactDOM.render(
    <div>
        <h1>Page Not Found</h1>
        <h2>We couldn't find what you were looking for.</h2>
        <Navigation/>
        <Main/>
    </div>,
    document.getElementById('root')
);
