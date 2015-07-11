var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({displayName: 'HeaderMenu',
    render: function () {
        return (
            <div className="header-menu">
                <div className="container">
                    <ul>
                        <li><Link to="main">Все треки</Link><span>7342</span></li>
                        <li><Link to="favorites">Избранные треки</Link><span>23 (+9)</span></li>
                        <li><Link to="playlist">Мой плейлист</Link><span>42</span></li>
                    </ul>
                </div>
            </div>
        );
    }
});