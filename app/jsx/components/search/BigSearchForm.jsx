var React = require('react');
var Reflux = require('reflux');
var SearchActions = require("jsx/actions/searchactions");
var SearchStore = require("jsx/stores/SearchStore");
var DropdownBox = require("jsx/components/DropdownBox");
var _ = require("underscore");

module.exports = React.createClass({displayName: 'BigSearchForm',
    render: function () {
        var genres = {1:'Рок', 2:'Металл', 3:'Электронная', 4:'Классика', 5:'Эстрада'};
        var artists = {1:'Мужчина', 2:'Женщина', 3:'Группа', 4:'Оркестр'};
        var instruments = {1:'Гитара', 2:'Ударные', 3:'Фортепиано', 4:'Бас'};
        var languages = {1:'Русский', 2:'Английский', 3:'Французский', 4:'Немецкий'};
        return (
            <div className="big-search">
                <div className="green-block">
                    <div className="row">
                        <div className="col-xs-3">
                            <DropdownBox title="Жанры" items={genres} />
                        </div>
                        <div className="col-xs-3">
                            <DropdownBox title="Исполнители" items={artists} />
                        </div>
                        <div className="col-xs-3">
                            <DropdownBox title="Инструменты" items={instruments} />
                        </div>
                        <div className="col-xs-3">
                            <DropdownBox title="Языки" items={languages} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 form-group">
                            <input placeholder="Поиск" className="form-control show" type="text" />
                            <span className="icon-search"></span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});