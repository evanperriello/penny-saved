var React = require("react"),
    Form = require("Form"),
    Goals = require("Goals"),
    PrintButton = require("PrintButton"),
    Results = require("Results"),
    VisItems = require("VisItems");
    

var Visualizer = React.createClass({
    getInitialState: function(){
        return {
            goalAmount: 0,
        };
    },
    //take the goal amount from the form and store it in state here.
    handleGoal: function(goalAmount){
        this.setState({
            goalAmount: goalAmount
        });
    },
    
    render: function(props){
        var {goalAmount} = this.state;
        return (
            <div>
                <VisItems/>
                <Form onSetGoal={this.handleGoal}/>
                <Goals/>
                <Results goalAmount={goalAmount}/>
                <PrintButton/>
            </div>
            );
    }
    
});

module.exports = Visualizer;