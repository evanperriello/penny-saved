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
            itemPrice: 0,
            selectedItems: []
        };
    },
    //take the goal amount from the form and store it in state
    handleGoal: function(goalAmount){
        this.setState({
            goalAmount: goalAmount
        });
    },
    //CREATE FUNCTIONS TO PARSE THE DATA PASSED BY HANDLESELECTED AND PASS IT TO RESULTS
    
    //REFACTOR THIS FUNCTION NEXT
    handleSelected: function(selectedItem){
        //create a new array copied from the state array
        var changedArray = this.state.selectedItems.slice();
        //if the new array does not already contain the selected item, add it
        if (changedArray.indexOf(selectedItem) === -1){
               changedArray.push(selectedItem);
        //if it does contain it, then remove the clicked object
        } else {
            changedArray.splice(changedArray.indexOf(selectedItem), 1);
        }
        console.log(changedArray);
        this.setState({ selectedItems: changedArray});
    },
    
    render: function(props){
        var {goalAmount, selectedItems} = this.state;
        return (
            <div>
                <VisItems onSelectItems={this.handleSelected}/>
                <Form onSetGoal={this.handleGoal}/>
                <Goals/>
                <Results selectedItems={selectedItems} goalAmount={goalAmount} itemPrice={selectedItems.price}/>
                <PrintButton/>
            </div>
            );
    }
    
});

module.exports = Visualizer;