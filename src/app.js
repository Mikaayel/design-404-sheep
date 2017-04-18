import React from 'react';
import ReactDOM from 'react-dom';

import css from './scss/app.scss';

import Navigation from 'navigation';
import Main from 'main';
import Rocket from 'rocket';

ReactDOM.render(
    <div>
        <Navigation/>
        <Main/>
        <Rocket/>
    </div>,
    document.getElementById('root')
);