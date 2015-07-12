var Reflux = require('reflux');
var request = require('superagent');
var SearchActions = require("jsx/actions/searchactions");
var settings = require("jsx/settings");
var _ = require("underscore");

module.exports = Reflux.createStore({
    cache: {},
    page: 1,
    results: [],
    found: 0,
    query: '',
    listenables: [SearchActions],
    onSearch: function(page, query) {
        var key = JSON.stringify({page:page, query:query});
        if (_.has(this.cache, key)) {
            this.page = this.cache[key].page;
            this.results = this.cache[key].results;
            this.found = this.cache[key].found;
            this.query = this.cache[key].query;
            this.trigger(this);
        }
        else {
            var _this = this;
            request
                .get('http://vefire.ru/ibm/flowplay-api/ajax/object/search/')
                .query({page: page, q: query, items_per_page: settings.searchItemsPerPage})
                .end(function(err, res){
                    if (res.ok) {
                        _this.page = res.body.page;
                        _this.results = res.body.results;
                        _this.found = res.body.found;
                        _this.query = res.body.q;
                        _this.cache[JSON.stringify({page:page, query:query})] = {
                            page: _this.page, results: _this.results, found: _this.found, query: _this.query
                        };
                        _this.trigger(_this);
                    }
                    return res.body;
                });
        }
    }
});