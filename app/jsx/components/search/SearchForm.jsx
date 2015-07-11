var React = require('react');
var Reflux = require('reflux');
var SearchActions = require("jsx/actions/searchactions");
var SearchStore = require("jsx/stores/SearchStore");

module.exports = React.createClass({displayName: 'SearchForm',
    getInitialState: function() {
        return {text:''};
    },
    onSubmit: function() {
        SearchActions.search(this.state.text);
        return false;
    },
    onChangeText: function(e) {
        this.setState({text: e.target.value});
        SearchActions.search(1, e.target.value);
        return false;
    },
    render: function () {
        var text = this.state.text;
        return (
            <div className="search-form">
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Поиск" value={text} onChange={this.onChangeText} />
                </form>
            </div>
        );
    }
});