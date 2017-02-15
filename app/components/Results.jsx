var React = require("react");

var Results = React.createClass({
    render: function(){
        var goalAmount = this.props.goalAmount;
        var itemPrice = this.props.itemPrice;
        var selectedNames = this.props.selectedNames;
        return (
            <div>
                <h1>Divided into: {selectedNames}.</h1>
            </div>
        );
    }
    
});
module.exports = Results;