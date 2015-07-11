var React = require('react');
var settings = require('jsx/settings');
var CommentsActions = require("jsx/actions/commentactions");
var _ = require('underscore');

module.exports = React.createClass({displayName: 'Pager',
    openPage: function(page) {
        CommentsActions.load(page);
    },
    render: function() {
        var curPage = this.props.page;
        var commentsPerPage = this.props.commentsPerPage;
        var count = this.props.count;
        var pages = Math.ceil(count/commentsPerPage);
        var _this = this;

        var from = Math.max(curPage-2, 1);
        var to = Math.max(curPage+3, Math.min(pages+1, 6));
        var links = _.range(from, to).map(function(i) {
            if (i < 1 || i > pages) return '';
            return (
                <li key={i}><a href="#" className={i==curPage ? 'active' : ''} onClick={_this.openPage.bind(this, i)}>{i}</a></li>
            );
        }, this);

        return (
            <nav>
                <ul className="pagination">
                    {links}
                </ul>
            </nav>
        );
    }
});