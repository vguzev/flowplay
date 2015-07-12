var React = require('react');
var Reflux = require('reflux');
var SearchActions = require("jsx/actions/searchactions");
var SearchStore = require("jsx/stores/SearchStore");
var DropdownBox = require("jsx/components/DropdownBox");
var _ = require("underscore");

module.exports = React.createClass({displayName: 'BigSearchForm',
    render: function () {
        var genres = [
            {id:1, title:'Рок'},
            {id:2, title:'Металл'},
            {id:3, title:'Электронная'},
            {id:4, title: 'Классика'},
            {id:5, title:'Эстрада'}
        ];
        var artists = [
            {id:1, title:'Мужчина'},
            {id:2, title:'Женщина'},
            {id:3, title:'Группа'},
            {id:4, title:'Оркестр'}
        ];
        var instruments = [
            {id:1, title:'Гитара'},
            {id:2, title:'Ударные'},
            {id:3, title:'Фортепиано'},
            {id:4, title:'Бас'}
        ];
        var languages = [
            {id:1, title:'Русский'},
            {id:2, title:'Английский'},
            {id:3, title:'Французский'},
            {id:4, title:'Немецкий'}
        ];
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