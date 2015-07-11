var React = require('react');

module.exports = React.createClass({displayName: 'FavoritesPage',
    render: function () {
        return (
            <div>
                <div className="page-header">
                    <h1>Избранные треки</h1>
                </div>
                <div className="container">
                    Здесь идет контент с избранными треками
                </div>
            </div>
        )
    }
});