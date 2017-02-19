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
            selectedParsed: ""
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
    //parse the selected items into jsx components
    parseSelectedItems: function(items, goalAmount){
        var j = 0;
        return (
            items.map((item) => {
                var arr = [];
                var numItems = goalAmount/item.price;
                for (var i = 0; i < numItems; i++) {
                    arr.push(<img src={item.image} key={item.name + "img" + i}/>);
                }
                j++;
                return (
                    <div key={item.name + "div" + j}>
                        <h2>{item.name + " ($" + item.price + " each)"}</h2>
                        <div>{arr}</div>
                    </div>
                    );
            })
        );
    },
    handleSelected: function(selectedItem){
        //add or remove the clicked item from the array.
        var copiedArray = this.copyArray(this.state.selectedItems);
        if (copiedArray.indexOf(selectedItem) === -1){
               copiedArray.push(selectedItem);
        } else {
            copiedArray.splice(copiedArray.indexOf(selectedItem), 1);
        }
        var selectedParsed = this.parseSelectedItems(copiedArray, this.state.goalAmount);
        this.setState({ selectedItems: copiedArray, selectedParsed: selectedParsed});
    },
    
    render: function(props){
        var {goalAmount, selectedItems, selectedParsed} = this.state;
        return (
            <div>
                <VisItems onSelectItems={this.handleSelected}/>
                <Form onSetGoal={this.handleGoal}/>
                <Goals  goalAmount={goalAmount}/>
                <Results selectedParsed={selectedParsed}/>
                <PrintButton/>
            </div>
            );
    }
    
});

module.exports = Visualizer;