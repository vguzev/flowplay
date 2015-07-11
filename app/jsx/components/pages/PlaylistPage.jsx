var React = require('react');

module.exports = React.createClass({displayName: 'PlaylistPage',
    render: function () {
        return (
            <div>
                <div className="page-header">
                    <h1>Мой плейлист</h1>
                </div>
                <div className="container">
                    Здесь идет контент с плейлистом
                </div>
            </div>
        )
    }
});