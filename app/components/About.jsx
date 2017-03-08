var React = require("react");
//Arrow function instead of a nameless function
var About = (props) => {
    return (
        <div id="about">
            <h1>A Penny Saved is a Penny Earned</h1>
            <p>Penny Saved helps you visualize budgeting</p>
            <ul>
                <li>Set a saving goal</li>
                <li>Choose how you want to visualize it (e.g., in cups of coffee)</li>
                <li>Adjust the price of the item, if needed</li>
            </ul>
        </div>
    );
};

module.exports = About;