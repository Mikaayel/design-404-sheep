import React from 'react';

let rocket = require('../images/rocket.png');

let Main = React.createClass({
    render: function() {
        return (
            <div id="rocket">
                <img src={rocket} />            
            </div>
        );
    }
});

module.exports = Main;