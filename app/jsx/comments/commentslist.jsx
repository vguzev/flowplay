var React = require('react');
var Reflux = require('reflux');
var CommentsActions = require("jsx/actions/commentactions");
var CommentsStore = require("jsx/stores/commentstore");
var Comment = require("jsx/comments/comment");
var Pager = require("jsx/comments/pager");
var settings = require("jsx/settings");

module.exports = React.createClass({displayName: 'CommentsList',
    mixins: [
        Reflux.listenTo(CommentsStore, "onLoad")
    ],
    getInitialState: function() {
        return {page:1, comments: [], found:0};
    },
    componentDidMount: function() {
        this.loadCommentsFromServer(this.state.page);
    },
    onLoad: function(data) {
        console.log('CommentsList.onLoad');
        console.log(CommentsStore.found);
        console.log(CommentsStore.comments);
        this.setState({
            page: CommentsStore.page,
            comments: CommentsStore.comments,
            found: CommentsStore.found
        });
    },
    loadCommentsFromServer: function(page) {
        CommentsActions.load(page);
    },

    render: function() {
        var comments = CommentsStore.comments;
        console.log('CommentsList.render');

        var commentNodes = comments.map(function (comment) {
            return (
                <Comment key={comment.comment_id} comment={comment} />
            );
        });
        console.log('CommentsList.render: this.state.count='+this.state.found);
        return (
            <div className="comment-list">
                <ul>
                    {commentNodes}
                </ul>
                <div className="comment-list-pager">
                    <span>Страницы:</span>
                    <Pager page={this.state.page} commentsPerPage={settings.commentsPerPage} count={this.state.found} />
                </div>
            </div>
        );
    }
});