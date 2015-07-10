var React = require('react');
var CommentsList = require("jsx/components/comments/commentslist");
var CommentForm = require("jsx/components/comments/commentform");

module.exports = React.createClass({displayName: 'CommentsBox',
    render: function() {
        return (
            <div className="commentsBox">
                <h2>Комментарии</h2>
                <CommentsList />
                <CommentForm />
            </div>
        );
    }});