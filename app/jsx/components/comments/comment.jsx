var React = require('react');
var marked = require('react-marked');
var moment = require('moment');
var CommentsActions = require("jsx/actions/commentactions");

module.exports = React.createClass({displayName: 'Comment',
    deleteComment: function(commentId) {
        CommentsActions.delete(commentId);
    },
    render: function() {
        console.log('Comment.render()');
        var comment = this.props.comment;
        var rawMarkup = marked(comment.text.toString(), {sanitize: true});
        return (
            <li className="comment">
                <div className="comment-list-date">{moment(comment.create_date).format('DD.MM.YYYY')}</div>
                <div className="comment-list-img">
                    <img className="img-rounded" src={'/app/img/users/'+comment.user_id+'.jpg'}/>
                </div>
                <div className="comment-list-content">
                    <b>{comment.user_name}</b>
                    <div className="comment-list-icons">
                        <a href="#" className="icon-link"><span className="icon icon-comment"></span> Ответить</a>
                        <a href="#" className="icon-link" onClick={this.deleteComment.bind(this, comment.comment_id)}><span className="icon icon-close"></span> Удалить</a>
                        <a href="#" className="icon-link">Devel</a>
                    </div>
                    <div className="comment-list-text">
                        {rawMarkup}
                        <a href="#" className="comment-list-like">{comment.likes}<span className="icon icon-heart"></span></a>
                    </div>
                </div>
            </li>
        );
    }
});
