var React = require('react');
var $ = require('jquery');

module.exports = React.createClass({displayName: 'CommentsBox',
    loadCommentsFromServer: function() {
        $.ajax({
            url: 'http://vefire.ru/ibm/flowplay-api/ajax/comment/list/',
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    handleCommentSubmit: function(comment) {
        var comments = this.state.data;
        var newComments = comments.concat([comment]);
        this.setState({data: newComments});
        $.ajax({
            url: 'http://vefire.ru/ibm/flowplay-api/ajax/comment/create/',
            dataType: 'json',
            type: 'PUT',
            data: comment,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount: function() {
        this.loadCommentsFromServer();
    },
    render: function() {
        return (
            <div className="commentsBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
            </div>
        );
    }
});

var data = [
    {author: "Pete Hunt", text: "This is one comment"},
    {author: "Jordan Walke", text: "This is *another* comment"}
];

var CommentList = React.createClass({
    render: function() {
        var commentNodes = this.props.data.map(function (comment) {
            return (
                <Comment user_name={comment.user_name}>
                    {comment.text}
                </Comment>
            );
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
});

var Comment = React.createClass({
    render: function() {
        var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.user_name}
                </h2>
                <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
            </div>
        );
    }
});

var CommentForm = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        var userId = React.findDOMNode(this.refs.user_id).value.trim();
        var userName = React.findDOMNode(this.refs.user_name).value.trim();
        var text = React.findDOMNode(this.refs.text).value.trim();
        if (!text || !author) {
            return;
        }
        this.props.onCommentSubmit({user_id: userId, user_name: userName, text: text});
        React.findDOMNode(this.refs.text).value = '';
        return false;
    },
    render: function() {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input type="hidden" ref="user_id" />
                <input type="hidden" ref="user_name" />
                <input type="text" placeholder="Ваш комментарий..." ref="text" />
                <input type="submit" value="Post" />
            </form>
        );
    }
});