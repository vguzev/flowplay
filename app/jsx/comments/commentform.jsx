var React = require('react');
var Reflux = require('reflux');
var CommentsActions = require("jsx/actions/commentactions");
var CommentsStore = require("jsx/stores/commentstore");

module.exports = React.createClass({displayName: 'CommentForm',
    getInitialState: function() {
        return {text:''};
    },
    onSubmit: function() {
        CommentsActions.create(this.state.text);
        this.setState({text: ''});
        return false;
    },
    onChangeComment: function(e) {
        this.setState({text: e.target.value});
        return false;
    },
    render: function() {
        var text = this.state.text;
        return (
            <div className="comment-form">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group row">
                        <div className="col-xs-10">
                            <input type="text" className="form-control" placeholder="Ваш комментарий..." value={text} onChange={this.onChangeComment} />
                        </div>
                        <div className="col-xs-2">
                            <input type="submit" className="btn btn-default" value="Добавить" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
});