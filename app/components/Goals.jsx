var React = require("react");
var Goals = (props) => {
    return (
        <div>
            <h1>Your Goal: ${props.goalAmount}</h1>
        </div>
    );
};

module.exports = Goals;