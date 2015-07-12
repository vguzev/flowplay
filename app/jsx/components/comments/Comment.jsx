var React = require('react');
var marked = require('react-marked');
var moment = require('moment');
var CommentsActions = require("jsx/actions/commentactions");

module.exports = React.createClass({displayName: 'Comment',
    deleteComment: function(commentId) {
        CommentsActions.delete(commentId);
        return false;
    },
    render: function() {
        var comment = this.props.comment;
//        var rawMarkup = marked(comment.text.toString(), {sanitize: true});
        return (
            <li className="comment">
                <div className="comment--date">{moment(comment.create_date).format('DD.MM.YYYY')}</div>
                <div className="comment--img">
                    <img className="img-rounded" src={'/app/img/users/'+comment.user_id+'.jpg'}/>
                </div>
                <div className="comment--content">
                    <b>{comment.user_name}</b>
                    <div className="comment--icons">
                        <a href="#" className="icon-link"><span className="icon icon-comment"></span> Ответить</a>
                        <a href="#" className="icon-link" onClick={this.deleteComment.bind(this, comment.comment_id)}><span className="icon icon-close"></span> Удалить</a>
                        <a href="#" className="icon-link">Devel</a>
                    </div>
                    <div className="comment--text">
                        {marked(comment.text.toString())}
                        <a href="#" className="comment--like">{comment.likes}<span className="icon icon-heart"></span></a>
                    </div>
                </div>
            </li>
        );
    }
});
