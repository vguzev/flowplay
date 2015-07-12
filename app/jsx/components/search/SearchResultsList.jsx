var React = require('react');
var Reflux = require('reflux');
var SearchActions = require("jsx/actions/searchactions");
var SearchStore = require("jsx/stores/SearchStore");
var SearchResultsItem = require("jsx/components/search/SearchResultsItem");
var settings = require("jsx/settings");

module.exports = React.createClass({displayName: 'SearchResultsList',
    mixins: [
        Reflux.listenTo(SearchStore, "onSearch")
    ],
    getInitialState: function() {
        return {page:1, results: [], found:0};
    },
    componentDidMount: function() {
        SearchActions.search(this.state.page, '');
    },
    onSearch: function(data) {
        this.setState({
            page: SearchStore.page,
            results: SearchStore.results,
            found: SearchStore.found
        });
    },
    render: function () {
        var results = SearchStore.results;
        var resultsNodes = results.map(function (object) {
            return (
                <SearchResultsItem key={object.object_id} object={object}/>
            );
        });
        if (results.length == 0) {
            return (
                <div className="alert alert-info"><i className="fa fa-exclamation-circle icon-alert-info"></i> Ничего не найдено</div>
            );
        }
        return (
            <div className="search-results">
                <ul className="">
                    {resultsNodes}
                </ul>
            </div>
        );
    }
});