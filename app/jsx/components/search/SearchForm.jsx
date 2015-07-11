var React = require('react');
var Reflux = require('reflux');
var SearchActions = require("jsx/actions/searchactions");

module.exports = React.createClass({displayName: 'SearchForm',
    getInitialState: function() {
        return {text:''};
    },
    onChangeText: function(e) {
        this.setState({text: e.target.value});
        SearchActions.search(1, e.target.value);
        return false;
    },
    render: function () {
        var text = this.state.text;
        return (
            <div className="search-form form-group">
                <input type="text" placeholder="Поиск" className="form-control" value={text} onChange={this.onChangeText} />
                <span className="icon-search"></span>
            </div>
        );
    }
});