var React = require('react');
var Reflux = require('reflux');
var SearchActions = require("jsx/actions/searchactions");
var SearchStore = require("jsx/stores/SearchStore");

module.exports = React.createClass({displayName: 'BigSearchForm',
    render: function () {
        return (
            <div className="big-search-form fixcontent">
                Big search form
            </div>
        );
    }
});