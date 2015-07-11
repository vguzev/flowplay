var React = require('react');
var Reflux = require('reflux');
var SearchActions = require("jsx/actions/searchactions");
var SearchStore = require("jsx/stores/SearchStore");
var _ = require("underscore");

module.exports = React.createClass({displayName: 'BigSearchForm',
    render: function () {
        var genres = {1:'Рок', 2:'Металл', 3:'Электронная', 4:'Классика', 5:'Эстрада'};
        var artists = {1:'Мужчина', 2:'Женщина', 3:'Группа', 4:'Оркестр'};
        var instruments = {1:'Гитара', 2:'Ударные', 3:'Фортепиано', 4:'Бас'};
        var languages = {1:'Русский', 2:'Английский', 3:'Французский', 4:'Немецкий'};
        var genresItems = _.mapObject(genres, function(val, key) {
            return (
                <li><label><input type="checkbox" value={key} />{val}</label></li>
            );
        });
        var artistsItems = _.mapObject(artists, function(val, key) {
            return (
                <li><label><input type="checkbox" value={key} />{val}</label></li>
            );
        });
        var instrumentsItems = _.mapObject(instruments, function(val, key) {
            return (
                <li><label><input type="checkbox" value={key} />{val}</label></li>
            );
        });
        var languagesItems = _.mapObject(languages, function(val, key) {
            return (
                <li><label><input type="checkbox" value={key} />{val}</label></li>
            );
        });
        return (
            <div className="big-search">
                <div className="green-block">
                    <div className="btn-group">
                        <button type="button" className="btn btn-default dropdown-toggle" dropdown-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Жанры <span className="caret"></span>
                        </button>
                        <ul className="dropdown-menu" role="menu">
                            {genresItems}
                        </ul>
                    </div>
                    <div className="btn-group">
                        <button type="button" className="btn btn-default dropdown-toggle" dropdown-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Исполнители <span className="caret"></span>
                        </button>
                        <ul className="dropdown-menu" role="menu">
                            {artistsItems}
                        </ul>
                    </div>
                    <div className="btn-group">
                        <button type="button" className="btn btn-default dropdown-toggle" dropdown-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Инструменты <span className="caret"></span>
                        </button>
                        <ul className="dropdown-menu" role="menu">
                            {instrumentsItems}
                        </ul>
                    </div>
                    <div className="btn-group">
                        <button type="button" className="btn btn-default dropdown-toggle" dropdown-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Языки <span className="caret"></span>
                        </button>
                        <ul className="dropdown-menu" role="menu">
                            {languagesItems}
                        </ul>
                    </div>
                    <div className="form-group">
                        <input placeholder="Поиск" className="form-control show" type="text" />
                        <span className="icon-search"></span>
                    </div>
                </div>
            </div>
        );
    }
});