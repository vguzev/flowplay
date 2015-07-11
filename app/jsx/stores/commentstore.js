var Reflux = require('reflux');
var request = require('superagent');
var CommentsActions = require("jsx/actions/commentactions");
var _ = require("underscore");
var settings = require("jsx/settings");

module.exports = Reflux.createStore({
    comments: [],
    found: 0,
    page: 1,
    listenables: [CommentsActions],
    onLoad: function(page) {
        this.page = page;
        var _this = this;
        request
            .get('http://vefire.ru/ibm/flowplay-api/ajax/comment/list/')
            .query({page: page, items_per_page: settings.commentsPerPage})
            .end(function(err, res){
                if (res.ok) {
                    _this.comments = res.body.results;
                    _this.found = res.body.found;
                    _this.trigger(_this);
                }
                return res.body;
            });
    },
    onCreate: function(text) {
        var _this = this;
        request
            .post('http://vefire.ru/ibm/flowplay-api/ajax/comment/create/')
            .send({user_id: 1, text: text})
            .end(function(err, res){
                if (res.ok) {
                    _this.trigger(_this);
                    _this.onLoad(1);
                }
                return res.body;
            });
    },
    onDelete: function(commentId) {
        var _this = this;
        request
            .del('http://vefire.ru/ibm/flowplay-api/ajax/comment/delete/')
            .send({comment_id: commentId})
            .end(function(err, res){
                if (res.ok) {
                    _this.trigger(_this);
                    _this.onLoad(_this.page);
                }
                return res.body;
            });

    }
});