var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var DefaultRoute = ReactRouter.DefaultRoute;

var MasterPage = require('jsx/MasterPage');
var MainPage = require('jsx/components/pages/MainPage');
var FavoritesPage = require('jsx/components/pages/FavoritesPage');
var PlaylistPage = require('jsx/components/pages/PlaylistPage');

var routes = (
    <Route path="/" name="app" handler={MasterPage}>
        <DefaultRoute name="main" handler={MainPage}/>
        <Route path="favorites" name="favorites" handler={FavoritesPage}/>
        <Route path="playlist" name="playlist" handler={PlaylistPage} />
    </Route>
);

window.onload = function() {
    ReactRouter.run(routes, function(Handler) {
        React.render(<Handler />, document.body);
    })
};