var React = require('react');
var marked = require('react-marked');
var moment = require('moment');

module.exports = React.createClass({displayName: 'SearchResultsItemTrack',
    // Конвертирует число в время
    getTime: function (duration) {
        var sec_num = parseInt(duration, 10);
        var hours = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);

        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (hours > 0)
            return hours + ':' + minutes + ':' + seconds;
        else
            return minutes + ':' + seconds;
    },

    render: function() {
        var object = this.props.object;
        var time = this.getTime(object.duration);
        var imageSrc = "/app/img/albums/"+object.id+".jpg";
        return (
            <li key={object.id} className="search-result">
                <div className="search-result--track">
                    <div className="clearfix">
                        <div className="search-result--track-img">
                            <div className="search-result--track-duration">{time}</div>
                            <img src={imageSrc} className="img-circle" />
                        </div>
                        <div className="search-result--track-info">
                            <div className="search-result--track-category">{object.category}</div>
                            <h3>{object.title}</h3>
                            <span className="search-result--track-id">TR-1</span>
                            <div className="search-result--icons">
                                <a href="#" className="icon-link"><span className="icon icon-heart"></span> {object.likes}</a>
                                <a href="#" className="icon-link"><span className="icon icon-plus"></span> {object.added}</a>
                                <a href="#" className="icon-link"><span className="icon icon-comment"></span> {object.comments}</a>
                                <a href="#" className="icon-link"><span className="icon icon-reply"></span> {object.reposts}</a>
                            </div>
                        </div>
                        <div className="search-result--track-ainfo">
                            <div className="search-result--date">{moment(object.create_date).format('DD.MM.YYYY')}</div>
                            <div className="search-result--user">
                                <img src="/app/img/users/1.jpg" className="img-rounded pull-right" />
                                <b>{object.user_name}</b><br /><span>{object.user_title}</span>
                            </div>
                            <a href="#" className="search-result--btn-play"><span></span></a>
                        </div>
                    </div>
                    <div className="search-result--icons text-right show">
                        <a href="#" className="icon-link">Devel</a>
                        <a href="#" className="icon-link"><span className="icon icon-gear"></span> Редактировать</a>
                        <a href="#" className="icon-link"><span className="icon icon-close"></span> Удалить трек</a>
                        <a href="#" className="icon-link"><span className="icon icon-minus"></span> Убрать из плей-листа</a>
                    </div>
                </div>
            </li>
        );
    }
});