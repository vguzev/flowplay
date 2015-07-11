var React = require('react');
var marked = require('react-marked');
var moment = require('moment');

module.exports = React.createClass({displayName: 'SearchResultsItemUser',
    render: function() {
        var object = this.props.object;
        return (
            <li key={object.id}>
                <div className="search-result--usr clearfix">
                    <div className="search-result--usr-img">
                        <img src={"/app/img/users/"+object.user_id+".jpg"} className="img-rounded" />
                    </div>
                    <div className="search-result--usr-info">
                        <h3>{object.title}</h3>
                        <span className="search-result--usr-id"> UR-{object.id}</span>
                        <div className="search-result--usr-cat">{object.category}</div>
                        <div className="search-result--usr-following">
                            {object.following != 1 ? (<a className="btn btn-default"><span className="icon icon-user-w"></span> Следовать</a>) : ''}
                        </div>
                    </div>
                    <div className="search-result--usr-ainfo">
                        <b>{object.city}</b>
                        <div>{object.user_category} {object.starred == 1 ? (<i className="icon icon-star"></i>): ''}</div>
                        <span>Треков: {object.tracks} Следуют: {object.followers}</span>
                    </div>

                </div>
            </li>
        );
    }
});