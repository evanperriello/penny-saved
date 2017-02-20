var React = require("react");

var Form = React.createClass({
    
    onFormSubmit: function(e){
        e.preventDefault();
        //set the goalAmount var equal to the component with the ref attribute of goalAmount
        var goalAmount = this.refs.goalAmount.value;
        //make sure that there is something there
        if (goalAmount.length > 0 ){
            //empty the search box
            this.refs.goalAmount.value = "";
            //call the onSubmit function with the goalAmount.
            this.props.onSetGoal(goalAmount);
        }
    },
    render: function(){
        return (
            //on submission of the form, call the onFormSubmit function
            <div>
                <form  id="goalForm" onSubmit={this.onFormSubmit}>
                    <input id="goalInput" type="text" ref="goalAmount"/>
                    <button id="goalButton" type="submit">Set Your Goal</button>
                </form>
            </div>
            );
    }
});

module.exports = Form;