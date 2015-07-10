var Reflux = require('reflux');
var request = require('superagent');
var SliderActions = require("jsx/actions/slideractions");

module.exports = Reflux.createStore({
    slides: [],
    listenables: [SliderActions],
    onLoad: function() {
        console.log('SliderStore.onLoad()');
        var _this = this;
        request
            .get('http://vefire.ru/ibm/flowplay-api/ajax/slide/list/')
            .end(function(err, res){
                console.log('onLoad->end()');
                if (res.ok) {
                    _this.slides = res.body.results;
                    _this.trigger(_this);
                }
                return res.body;
            });
    }
});