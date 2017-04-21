import React from 'react';
import ISVG from 'react-inlinesvg';

const imageSheep = require('../images/Sheep.svg');

// <img className="sheep--image" src={imageSheep} />

let Sheep = React.createClass({
    render: function() {
        return (
            <div id="sheep">
                <ISVG className="sheep--image" src={imageSheep}></ISVG>
            </div>
        );
    }
});

module.exports = Sheep;
