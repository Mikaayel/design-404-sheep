import React from 'react';

const rocket = require('../images/rocket.png');

let Rocket = React.createClass({
     render: function() {
        return (
            <div id="rocket">
                <img src={rocket} />
            </div>
        );
    }
});

module.exports = Rocket;