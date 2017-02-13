var React = require("react");

var VisItems = React.createClass({
    model: {
        items: [
            {name: "Coffee", price: 4, image: "imagesource.jpg"},
            {name: "Dinner Out", price: 20, image: "imagesource.jpg"},
            {name: "Lunch Out", price: 10, image: "imagesource.jpg"},
            {name: "Movie Ticket", price: 15, image: "imagesource.jpg"},
            {name: "Pack of Cigarettes", price: 10, image: "imagesource.jpg"},
            {name: "6 pack of Beer", price: 10, image: "imagesource.jpg"},
            {name: "Bottle of Wine", price: 10, image: "imagesource.jpg"},
            {name: "Beer/Wine Out", price: 7, image: "imagesource.jpg"},
            {name: "Other", price: 1, image: "imagesource.jpg"},
        ],
        
    },
    getItemToChange : function(itemName){
        for (var i=0; i< this.model.items.length ; i++) {
            if (this.model.items[i].name == itemName) return this.model.items[i];
        }
    },
    changePrice: function(e){
        var itemName = e.target.name;
        var newPrice = Number(e.target.value);
        var changedItem = this.getItemToChange(itemName);
        changedItem.price = newPrice;
    },
    renderItems: function(){
        var items = this.model.items;
        var allItems = items.map((item) => {
            return <li className="item" key={item.name}>{item.name} - $<input name={item.name} onChange={this.changePrice} className="itemPrice" type="text" defaultValue={item.price}/></li>;
        });
        return <ul>{allItems}</ul>;
    },
    render: function(){
        return (
            <div>
                <h1>VisItems</h1>
                {this.renderItems()}
            </div>
            );
    }
    
});
module.exports = VisItems;