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
        window.addEventListener('resize', this.onWindowResized);
    },
    componentWillMount: function() {
        window.removeEventListener('resize', this.onWindowResized);
    },
    onWindowResized: function () {
        // Временный багфикс для решения проблемы с перерисовкой слайдера при ресайзе окна - см. https://github.com/akiran/react-slick/issues/67
        this.forceUpdate()
    },
    onLoad: function() {
        this.setState({
            slides: SliderStore.slides
        });
    },
    render: function () {
        var slides = SliderStore.slides;

        var slidesNodes = slides.map(function(slide) {
            var divStyle={
                backgroundImage: 'url('+slide.image+')',
                height: "350px"
            };
            return (
                <div key={'slide'+slide.id} style={divStyle}>
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
            autoplay: true,
            arrows: false,
            fade: true,
            infinite: true,
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