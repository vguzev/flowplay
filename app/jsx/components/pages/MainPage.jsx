var React = require('react');
var BigSearchForm = require('jsx/components/search/BigSearchForm');
var SearchResultsList = require('jsx/components/search/SearchResultsList');
var CommentsBox = require('jsx/components/comments/CommentsBox');
var Slider = require('jsx/components/Slider');

module.exports = React.createClass({displayName: 'MainPage',
    render: function () {
        return (
            <div>
                <div className="page-header">
                    <h1>Все треки</h1>
                </div>
                <div className="container">
                    <BigSearchForm />
                    <SearchResultsList />
                    <CommentsBox />
                </div>
                <Slider />
            </div>
        )
    }
});