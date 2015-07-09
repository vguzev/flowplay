var Reflux = require('reflux');
var request = require('superagent');
var CommentsActions = require("jsx/actions/commentactions");

module.exports = Reflux.createStore({
    comments: null,
    listenables: [CommentsActions],
    load: function(page) {
        var _this = this;
        request
            .get('http://vefire.ru/ibm/flowplay-api/ajax/comment/list/')
            .send({page: page})
            .set('Accept', 'application/json')
            .end(function(err, res){
                _this.comments = res;
                _this.trigger();
            });
    },
    onLoad: function(page) {
        this.load(page);
    }
});