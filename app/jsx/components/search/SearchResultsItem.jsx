var React = require('react');
var marked = require('react-marked');
var moment = require('moment');
var SearchResultsItemTrack = require("jsx/components/search/SearchResultsItemTrack");
var SearchResultsItemPost = require("jsx/components/search/SearchResultsItemPost");
var SearchResultsItemUser = require("jsx/components/search/SearchResultsItemUser");

module.exports = React.createClass({displayName: 'SearchResultsItem',
    render: function() {
        var object = this.props.object;
        if (object.type_id == 1) {
            // Композиция
            return (
                <SearchResultsItemTrack object={object} />
            );
        }
        else if (object.type_id == 2) {
            // Пост
            return (
                <SearchResultsItemPost object={object} />
            );
        }
        else if (object.type_id == 3) {
            // Персона
            return (
                <SearchResultsItemUser object={object} />
            );
        }
    }
});
