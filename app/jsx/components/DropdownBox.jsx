var React = require('react');
var _ = require('underscore');

module.exports = React.createClass({displayName: 'DropdownBox',
    mixins: [
        require('react-onclickoutside')
    ],
    handleClickOutside: function(evt) {
        this.setState({open:false});
    },
    getInitialState: function() {
        return {open: false};
    },
    toggle: function() {
        this.setState({open:!this.state.open});
    },
    render: function() {
        var title = this.props.title;
        var items = this.props.items;
        var renderedItems = items.map(function(val, index) {
            return (
                <li key={'li'+index}><label><input type="checkbox" value={val.id} />{val.title}</label></li>
            );
        });
        return (
            <div className={"btn-group"+(this.state.open?' open':'')}>
                <button type="button" className="btn btn-default dropdown-toggle" onClick={this.toggle} dropdown-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {title} <span className="caret"></span>
                </button>
                <ul className="dropdown-menu" role="menu">
                    {renderedItems}
                </ul>
            </div>
        );
    }
});
