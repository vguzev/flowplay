var React = require('react');
var Header = require('jsx/components/Header');
var HeaderMenu = require('jsx/components/HeaderMenu');
var FlowplayRouter = require('jsx/FlowplayRouter');
var ReactRouter = require("react-router");
var RouteHandler = ReactRouter.RouteHandler;

module.exports = React.createClass({displayName: 'MasterPage',
    render: function () {
        return (
            <div>
                <Header />
                <div className="content">
                    <HeaderMenu />
                    <RouteHandler />
                </div>
            </div>
        );
    }
});
