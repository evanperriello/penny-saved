var React = require("react");

var Results = React.createClass({
    render: function(){
        var goalAmount = this.props.goalAmount;
        return (
            <div>
                <h1>${goalAmount} is your goal.</h1>
            </div>
        );
    }
    
});
module.exports = Results;