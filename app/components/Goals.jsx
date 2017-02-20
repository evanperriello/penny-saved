var React = require("react");
var Goals = (props) => {
    return (
        <div>
            <h1 id="currentGoal">${props.goalAmount}</h1>
        </div>
    );
};

module.exports = Goals;