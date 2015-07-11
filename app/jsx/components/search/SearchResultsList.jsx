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
        console.log('SearchResultsList.onSearch');
        console.log(SearchStore.found);
        console.log(SearchStore.results);
        this.setState({
            page: SearchStore.page,
            comments: SearchStore.results,
            found: SearchStore.found
        });
    },
    render: function () {
        var results = SearchStore.results;
        var resultsNodes = results.map(function (object) {
            return (
                <SearchResultsItem key={object.object_id} object={object} />
            );
        });
        return (
            <div className="fixcontent search-results">
                <ul className="">
                    {resultsNodes}
                </ul>
            </div>
        );
    }
});