var React = require('react');
module.exports = React.createClass({displayName: 'Toolbar',
    render: function () {
        return (
            <div>
                <button>Hello world</button>
                <i className="fa fa-gear"></i>
                <img src="app/img/main.png" width="100" />
            </div>
        );
    }
});