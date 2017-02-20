var React = require("react");

var VisItems = React.createClass({
    model: {
        items: [
            {name: "Coffees", price: 4, image: "./images/coffeeCup.jpg"},
            {name: "Dinners Out", price: 20, image: "../images/coffeeCup.jpg"},
            {name: "Lunches Out", price: 10, image: "/images/coffeeCup.jpg"},
            {name: "Movie Tickets", price: 15, image: "images/coffeeCup.jpg"},
            {name: "Packs of Cigarettes", price: 10, image: "images/coffeeCup.jpg"},
            {name: "Six-Packs of Beer", price: 10, image: "images/coffeeCup.jpg"},
            {name: "Bottles of Wine", price: 10, image: "images/coffeeCup.jpg"},
            {name: "Drinks at a Bar", price: 7, image: "images/coffeeCup.jpg"},
            {name: "Other", price: 1, image: "images/coffeeCup.jpg"},
        ],
        
    },
    //grab an item from array
    getItemByName : function(arr, itemName){
        for (var i=0; i < arr.length ; i++) {
            if (arr[i].name == itemName) return arr[i];
        }
    },
    //change the price of the array item.
    changePrice: function(e){
        var itemName = e.target.name;
        var newPrice = Number(e.target.value);
        var changedItem = this.getItemByName(this.model.items, itemName);
        changedItem.price = newPrice;
    },
    selectItem: function(e){
        var clickedItem = e.target.id;
        var selectedObject = this.getItemByName(this.model.items, clickedItem);
        return this.props.onSelectItems(selectedObject);
    },
    //populate an array with all the visItems as jsx list items
    listItems: function(items){
        return (
            items.map((item) => {
                return (
                    <li className="item" id={item.name} key={item.name} onClick={this.selectItem}>
                        {item.name} - $
                        <input name={item.name} onChange={this.changePrice} className="itemPrice" type="text" defaultValue={item.price}/>
                    </li>
                    );
            })
        );
    },
    //render the listed items.
    renderItems: function(arr){
        var allItems = this.listItems(arr);
        return <ul>{allItems}</ul>;
    },
    render: function(){
        return (
            <div>
                {this.renderItems(this.model.items)}
            </div>
            );
    }
    
});
module.exports = VisItems;