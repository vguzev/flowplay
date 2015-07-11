var React = require('react');
var marked = require('react-marked');
var moment = require('moment');

module.exports = React.createClass({displayName: 'SearchResultsItemPost',
    render: function() {
        var object = this.props.object;
        var imgUrl = '';
        if (object.img != '') imgUrl = '/app/img/posts/'+object.img;
        var img = '';
        if (imgUrl != '') {
            img = (
                <img src={imgUrl} className="img-rounded search-result--post-img" />
            );
        }
        return (
            <li key={object.id} className="search-result">
                <div className="search-result--post">
                    <span className="search-result--date pull-right">{moment(object.create_date).format('DD.MM.YYYY')}</span>
                    <h3>{object.title}</h3>
                    <span className="search-result--post-id">PR-{object.id}</span>
                    <div className="search-result--user">
                        <img className="img-rounded pull-left" src="/app/img/users/1.jpg" />
                        <b>{object.user_name}</b><br/><span>{object.user_title}</span>
                    </div>
                    <div className="search-result--post-text">{object.text}<a href="#obj_id=3">Далее</a></div>
                    {img}
                    <div className="search-result--icons">
                        <a href="#" className="icon-link"><span className="icon icon-heart"></span> {object.likes}</a>
                        <a href="#" className="icon-link"><span className="icon icon-comment"></span> {object.comments}</a>
                        <a href="#" className="icon-link"><span className="icon icon-reply"></span> {object.reposts}</a>
                    </div>
                    <div className="search-result--icons text-right show">
                        <a href="#" className="icon-link">Devel</a>
                        <a href="#" className="icon-link"><span className="icon icon-gear"></span> Редактировать</a>
                        <a href="#" className="icon-link"><span className="icon icon-close"></span> Удалить</a>
                    </div>
                </div>
            </li>
        );
    }
});