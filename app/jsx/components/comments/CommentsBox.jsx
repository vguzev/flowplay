var React = require('react');
var CommentsList = require("jsx/components/comments/CommentsList");
var CommentForm = require("jsx/components/comments/CommentForm");

module.exports = React.createClass({displayName: 'CommentsBox',
    render: function() {
        return (
            <div className="comments-box fixcontent">
                <h2>Комментарии</h2>
                <CommentsList />
                <CommentForm />
            </div>
        );
    }
});