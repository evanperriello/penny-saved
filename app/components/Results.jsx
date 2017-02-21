var React = require("react");

var Results = React.createClass({
    render: function(){
        var selectedParsed = this.props.selectedParsed;
        return (
            <div id="results">
                <h1>In</h1>
                {selectedParsed}
            </div>
        );
    }
    
});
module.exports = Results;