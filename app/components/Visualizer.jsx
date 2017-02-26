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
            selectedParsed: "",
            items: [
                {name: "Coffees", price: 4, image: "./images/coffee.png", selected: false},
                {name: "Dinners Out", price: 20, image: "../images/dinner.png", selected: false},
                {name: "Lunches Out", price: 10, image: "/images/lunch.png", selected: false},
                {name: "Movie Tickets", price: 15, image: "images/movie.png", selected: false},
                {name: "Packs of Cigarettes", price: 10, image: "images/cigarettes.png", selected: false},
                {name: "Six-Packs of Beer", price: 10, image: "images/beer.png", selected: false},
                {name: "Bottles of Wine", price: 10, image: "images/wine.png", selected: false},
                {name: "Drinks at a Bar", price: 7, image: "images/cocktail.png", selected: false},
            ],
        };
    },
    copyArray: function(arr){
        return arr.slice();
    },
    //take the goal amount from the form and store it in state
    handleGoal: function(goalAmount){
        var selectedParsed = this.parseSelectedItems(this.state.selectedItems, goalAmount);
        this.setState({
            goalAmount: goalAmount,
            selectedParsed: selectedParsed
        });
        
    },
    //grab an item from array
    getItemByName : function(arr, itemName){
        for (var i=0; i < arr.length ; i++) {
            if (arr[i].name == itemName) {
            return (
                {theObject: arr[i], objIndex: i}
                );
                
            }
        }
    },
    //parse the selected items into jsx components
    parseSelectedItems: function(items, goalAmount){
        //variable to distinguish keys of generated divs.
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
                        <h2>{Math.ceil(numItems) + " " + item.name + " ($" + item.price + " each)"}</h2>
                        <div>{arr}</div>
                    </div>
                    );
            })
        );
    },
    handlePriceChange: function(e){
        var itemName = e.target.name;
        var newPrice = Number(e.target.value);
        if (newPrice > 0 ) {
            var itemToChange = this.getItemByName(this.state.items, itemName);
            var changedItem = itemToChange.theObject;
            changedItem.price = newPrice;
            var newItemArray = this.copyArray(this.state.items);
            newItemArray[itemToChange.objIndex] = changedItem;
            var selectedParsed = this.parseSelectedItems(this.state.selectedItems, this.state.goalAmount);
            this.setState({ items: newItemArray, selectedParsed: selectedParsed });
        }
    },
    toggleSelected: function(selectedItem){
        selectedItem.selected = !selectedItem.selected;
        return selectedItem;
    },
    //gather only the selected items into a new array
    gatherSelected: function(arr){
        var newArr = [];
        for (var i=0; i < arr.length ; i++) {
            if (arr[i].selected) {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    },
    handleSelected: function(selectedItem){
        //change "selected" attr of clicked item
        this.toggleSelected(selectedItem);
        //gather an array of the items with selected=true
        var allSelected = this.gatherSelected(this.state.items);
        var selectedParsed = this.parseSelectedItems(allSelected, this.state.goalAmount);
        this.setState({ selectedItems: allSelected, selectedParsed: selectedParsed});
    },
    
    render: function(props){
        var {items, goalAmount, selectedParsed} = this.state;
        return (
            //add printbutton component when it's done
            <div>
                <Form onSetGoal={this.handleGoal}/>
                <VisItems getItem={this.getItemByName} items={items} onChangePrice={this.handlePriceChange} onSelectItems={this.handleSelected}/>
                <Goals  goalAmount={goalAmount}/>
                <Results selectedParsed={selectedParsed}/>
            </div>
            );
    }
    
});

module.exports = Visualizer;