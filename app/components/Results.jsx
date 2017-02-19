var React = require("react");

var Results = React.createClass({
    render: function(){
        var selectedParsed = this.props.selectedParsed;
        return (
            <div>
                <h1>Divided into:</h1>
                {selectedParsed}
            </div>
        );
    }
    
});
module.exports = Results;