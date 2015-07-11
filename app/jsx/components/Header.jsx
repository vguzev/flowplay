var React = require('react');
var SearchForm = require("jsx/components/search/SearchForm");

module.exports = React.createClass({displayName: 'Header',
    render: function () {
        return (
            <nav className="navbar-fixed-top hidden-print top" role="navigation">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-8 player">
                            <span className="player-btn player-btn-backward"></span>
                            <span className="player-btn player-btn-forward"></span>
                            <span className="player-btn player-btn-play"></span>
                            <div className="progress">
                                <div className="progress-bar progress-bar-success" style={{width: "35%"}}>
                                    <span className="sr-only">35% Complete (played)</span>
                                </div>
                                <div className="progress-bar" style={{width: "55%"}}>
                                    <span className="sr-only">55% Complete (buffered)</span>
                                </div>
                            </div>
                            <span className="player-btn player-btn-repeat"></span>
                            <span className="player-btn player-btn-shuffle"></span>
                            <span className="player-btn player-btn-volume"></span>
                        </div>
                        <div className="col-xs-4 top-search">
                            <SearchForm />
                        </div>
                    </div>
                    <a className="logo" href="#"></a>
                    <div className="top-playlist">
                        <img src="/app/img/albums/1.jpg" className="img-circle" />
                        <div className="top-playlist--content">
                            <div>(I’m Not Your) Stepping Stone, (I’m Not Your) Stepping Stone, (I’m Not Your) Stepping Stone</div>
                            <div>
                                <a href="#" className="icon-link"><span className="icon icon-heart"></span> 11</a>
                                <a href="#" className="icon-link"><span className="icon icon-plus"></span> 22</a>
                                <a href="#" className="icon-link"><span className="icon icon-comment"></span> 99999</a>
                                <a href="#" className="icon-link"><span className="icon icon-reply"></span> 12</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
});