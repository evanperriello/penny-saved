var React = require("react");

var Results = React.createClass({
    render: function(){
        var goalAmount = this.props.goalAmount;
        var itemPrice = this.props.itemPrice;
        var selectedItems = this.props.selectedItems;
        return (
            <div>
                <h1>${goalAmount} divided by parse items and put them here! at ${itemPrice} each.</h1>
            </div>
        );
    }
    
});
module.exports = Results;