var React = require('react');
var SearchForm = require("jsx/components/search/SearchForm");

module.exports = React.createClass({displayName: 'Header',
    render: function () {
        return (
            <div>
                <SearchForm />
            </div>
        );
    }
});