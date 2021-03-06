/** @jsx React.DOM */
/* @jsx React.DOM */
window.LGI = {};

window.LGI.Carusel = React.createClass({displayName: 'Carusel',
    componentDidMount: function() {
        this.props.container.changeColor = this.changeColor.bind(this);
    },
    getInitialState: function() {
        return {
            color: '#000000'
        };
    },
    attributeChanged: function(name, oldValue, newValue) {
        console.log('Attribute ' + name + ' was changed from ' + oldValue + ' to ' + newValue);
    },
    render: function() {
        var rows = [];

        if (this.props.items === undefined) {
            return React.DOM.div(null);
        }

        this.props.items.forEach(function(item) {
            rows.push(React.DOM.li( {key:item.text}, item.text));
        });

        return React.DOM.div(null, "<my-reactive-element>",React.DOM.ul( {style:this.state}, rows),"</my-reactive-element>");
    },
    changeColor: function(color) {
        this.state.color = color;
        this.forceUpdate();
    }
});

document.registerReact('my-reactive-element', window.LGI.Carusel);