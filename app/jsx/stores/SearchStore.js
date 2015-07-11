var Reflux = require('reflux');
var request = require('superagent');
var SearchActions = require("jsx/actions/searchactions");
var settings = require("jsx/settings");

module.exports = Reflux.createStore({
    page: 1,
    results: [],
    found: 0,
    query: '',
    listenables: [SearchActions],
    onSearch: function(page, query) {
        console.log('SearchStore.onSearch()');
        var _this = this;
        request
            .get('http://vefire.ru/ibm/flowplay-api/ajax/object/search/')
            .query({page: page, q: query, items_per_page: settings.searchItemsPerPage})
            .end(function(err, res){
                console.log('onSearch->end()');
                if (res.ok) {
                    _this.results = res.body.results;
                    _this.found = res.body.found;
                    _this.query = res.body.q;
                    _this.trigger(_this);
                }
                return res.body;
            });
    }
});