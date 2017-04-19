import React from 'react';
import ReactDOM from 'react-dom';

import css from './scss/app.scss';

import Main from 'main';
import Sheep from 'sheep';

ReactDOM.render(
    <div>
        <Main/>
        <Sheep/>
    </div>,
    document.getElementById('root')
);
