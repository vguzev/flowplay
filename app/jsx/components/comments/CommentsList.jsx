var React = require('react');
var Reflux = require('reflux');
var CommentsActions = require("jsx/actions/commentactions");
var CommentsStore = require("jsx/stores/CommentStore");
var Comment = require("jsx/components/comments/Comment");
var Pager = require("jsx/components/comments/Pager");
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
        var commentNodes = comments.map(function (comment) {
            return (
                <Comment key={comment.comment_id} comment={comment} />
            );
        });
        return (
            <div className="comments-list">
                <ul>
                    {commentNodes}
                </ul>
                <div className="comments-list--pager">
                    <span>Страницы:</span>
                    <Pager page={this.state.page} commentsPerPage={settings.commentsPerPage} count={this.state.found} />
                </div>
            </div>
        );
    }
});