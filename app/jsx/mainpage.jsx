var React = require('react');
var Toolbar = require('jsx/header');
var CommentsBox = require('jsx/comments/commentsbox');
React.render(
    <CommentsBox />,
    document.getElementById('content')
);