var Reflux = require('reflux');
var request = require('superagent');
var CommentsActions = require("jsx/actions/commentactions");
var _ = require("lodash");
var settings = require("jsx/settings");

module.exports = Reflux.createStore({
    cache: {},
    comments: [],
    found: 0,
    page: 1,
    listenables: [CommentsActions],
    onLoad: function(page) {
        this.page = page;
        var _this = this;
        if (_.has(this.cache, page)) {
            // Страница уже закеширована - возвращаем из кеша
            this.comments = this.cache[page].comments;
            this.found = this.cache[page].found;
            this.trigger(this);
        }
        else {
            // Страницы нет в кеше - запрашиваем у сервера
            var numberOfComments = settings.commentsPerPage;
            var startFrom = settings.commentsPerPage * (page - 1);
            // При запросе второй страницы - запрашиваем данные сразу на 5 ближайших страниц,
            // т.к. если пользователь запросил вторую страницу, то наверняка он будет смотреть и последующие страницы
            if (page > 1) numberOfComments = settings.commentsPerPage * 5;
            request
                .get('http://vefire.ru/ibm/flowplay-api/ajax/comment/list/')
                .query({start_from: startFrom, number_of_comments: numberOfComments})
                .end(function (err, res) {
                    if (res.ok) {
                        // Первую страницу никогда не кешируем
                        if (page > 1) {
                            // Кешируем данные
                            var chunks = _.chunk(res.body.results, settings.commentsPerPage);
                            chunks.forEach(function(comments, index, arr) {
                                _this.cache[page+index] = {comments: comments, found: res.body.found};
                            });
                            _this.comments = _this.cache[page].comments;
                            _this.found = _this.cache[page].found;
                        }
                        else {
                            _this.comments = res.body.results;
                            _this.found = res.body.found;
                        }
                        _this.trigger(_this);
                    }
                    return res.body;
                });
        }
    },
    onCreate: function(text) {
        // Сбрасываем кеш
        this.cache = {};
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
        // Сбрасываем кеш
        this.cache = {};
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