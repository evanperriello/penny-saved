var React = require("react"),
    Form = require("Form"),
    Goals = require("Goals"),
    PrintButton = require("PrintButton"),
    Results = require("Results"),
    VisItems = require("VisItems");
    

var Game = React.createClass({
    render: function(props){
        return (
            <div>
                <VisItems/>
                <Form/>
                <Goals/>
                <Results/>
                <PrintButton/>
            </div>
            );
    }
    
});

module.exports = Game;