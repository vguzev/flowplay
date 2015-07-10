var React = require('react');
var Slider = require('react-slick');
var Reflux = require('reflux');
var SliderActions = require("jsx/actions/slideractions");
var SliderStore = require("jsx/stores/SliderStore");
var _ = require("underscore");

module.exports = React.createClass({displayName: 'Slider',
    mixins: [
        Reflux.listenTo(SliderStore, "onLoad")
    ],
    getInitialState: function() {
        return {slides: []};
    },
    componentDidMount: function() {
        SliderActions.load();
    },
    onLoad: function() {
        console.log('SliderList.onLoad');
        console.log(SliderStore.slides);
        this.setState({
            slides: SliderStore.slides
        });
    },
    render: function () {
        var slides = SliderStore.slides;
        console.log('Slider.render');
        console.log(slides);

        var slidesNodes = _.mapObject(slides, function (slide) {
            var divStyle={
                backgroundImage: 'url('+slide.image+')',
                height: "350px"
            };
            return (
                <div key={slide.id} style={divStyle}>
                    <div className="slider-caption">
                        <h1>{slide.header}</h1>
                        <p>{slide.description}</p>
                        <h2>{slide.link}</h2>
                    </div>
                </div>
            );
        });
        var settings = {
            dots: true,
            autoplay: false,
            arrows: false,
            fade: true,
            infinite: false,
            speed: 1000,
            swipe: false,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings}>
                {slidesNodes}
            </Slider>
        );
    }
});