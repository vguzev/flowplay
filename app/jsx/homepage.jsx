var React = require('react');
var Toolbar = require('jsx/components/header');
var CommentsBox = require('jsx/components/comments/commentsbox');
var Slider = require('jsx/components/slider');
React.render(
    <div>
        <CommentsBox />
        <Slider />
    </div>,
    document.getElementById('content')
);