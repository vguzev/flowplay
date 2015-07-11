var React = require('react');
var Header = require('jsx/components/Header');
var BigSearchForm = require('jsx/components/search/BigSearchForm');
var SearchResultsList = require('jsx/components/search/SearchResultsList');
var CommentsBox = require('jsx/components/comments/CommentsBox');
var Slider = require('jsx/components/Slider');

React.render(
    <div>
        <Header />
        <div className="content">
            <BigSearchForm />
            <SearchResultsList />
            <CommentsBox />
        </div>
        <Slider />
    </div>,
    document.getElementById('content')
);