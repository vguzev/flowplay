var React = require('react');
var Reflux = require('reflux');
var SearchActions = require("jsx/actions/searchactions");
var SearchStore = require("jsx/stores/SearchStore");

module.exports = React.createClass({displayName: 'SearchForm',
    mixins: [
        Reflux.listenTo(SearchStore, "onSearch")
    ],
    getInitialState: function() {
        return {text:'', results: [], found:0};
    },
    onChangeText: function(e) {
        this.setState({text: e.target.value, results:this.state.results, found: this.state.found});
        if (e.target.value.trim().length>0 || e.target.value == '') {
            SearchActions.search(1, e.target.value);
        }
        return false;
    },
    onSearch: function(data) {
        console.log('SearchForm.onSearch');
        console.log(SearchStore.found);
        console.log(SearchStore.results);
        this.setState({
            text: SearchStore.query,
            results: SearchStore.results,
            found: SearchStore.found
        });
    },
    render: function () {
        var text = this.state.text;
        var foundItems = this.state.results.map(function(object) {
            if (object.type_id == 1) {
                // Композиция
                return (
                    <li><a href=""><span className="icon icon-b-track"></span>{object.title}</a></li>
                );
            }
            else if (object.type_id == 2) {
                // Пост
                return (
                    <li><a href=""><span className="icon icon-b-post"></span>{object.title}</a></li>
                );
            }
            else if (object.type_id == 3) {
                // Персона
                return (
                    <li><a href=""><span className="icon icon-b-user"></span>{object.title}</a></li>
                );
            }
        });
        var resultItems = '';
        if (text.trim().length!=0) {
            resultItems = (
                <div className="open">
                    <ul className="dropdown-menu" role="menu">
                        <div>Всего найдено <span>{this.state.found}</span></div>
                        {foundItems}
                    </ul>
                </div>
            );
        }
        return (
            <div>
                <div className="search-form form-group">
                    <input type="text" placeholder="Поиск" className="form-control" value={text} onChange={this.onChangeText} />
                    <span className="icon-search"></span>
                </div>
                {resultItems}
            </div>
        );
    }
});