var React = require("react");
//Arrow function instead of a nameless function
var About = (props) => {
    return (
        <div>
            <h1>A PennySaved is a Penny Earned</h1>
            <p>PennySaved helps you visualize budgeting to reach a goal:</p>
            <ol>
                <li>Select a goal and enter its cost.</li>
                <li>Choose how you want to visualize it (e.g., cups of coffee).</li>
                <li>Print out your visualization.</li>
                <li>Each time you pass up a cup of coffee, mark one off on your visualization.</li>
                <li>Achieve your saving goals.</li>
            </ol>
        </div>
    );
};

module.exports = About;