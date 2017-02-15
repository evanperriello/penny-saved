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
            selectedItems: [],
            selectedNamesPrices: ""
        };
    },
    copyArray: function(arr){
        return arr.slice();
    },
    //take the goal amount from the form and store it in state
    handleGoal: function(goalAmount){
        this.setState({
            goalAmount: goalAmount
        });
    },
    //parse the selected items into a name (price) string
    parseSelectedItems: function(selectedItems){
        var itemInfo = "";
        selectedItems.forEach(function(item){
            itemInfo += item.name + " ($" + item.price + "), "; 
        });
        return itemInfo;
    },
    handleSelected: function(selectedItem){
        //add or remove the clicked item from the array.
        var copiedArray = this.copyArray(this.state.selectedItems);
        if (copiedArray.indexOf(selectedItem) === -1){
               copiedArray.push(selectedItem);
        } else {
            copiedArray.splice(copiedArray.indexOf(selectedItem), 1);
        }
        var selectedNamesPrices = this.parseSelectedItems(copiedArray);
        this.setState({ selectedItems: copiedArray, selectedNamesPrices: selectedNamesPrices});
    },
    
    render: function(props){
        var {goalAmount, selectedItems, selectedNamesPrices} = this.state;
        return (
            <div>
                <VisItems onSelectItems={this.handleSelected}/>
                <Form onSetGoal={this.handleGoal}/>
                <Goals  goalAmount={goalAmount}/>
                <Results selectedItems={selectedItems} selectedNames={selectedNamesPrices} itemPrice={selectedItems.price}/>
                <PrintButton/>
            </div>
            );
    }
    
});

module.exports = Visualizer;