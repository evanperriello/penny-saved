var React = require("react");

var VisItems = React.createClass({

    selectItem: function(e){
        var clickedItem = e.target.id;
        var selectedObject = this.props.getItem(this.props.items, clickedItem).theObject;
        return this.props.onSelectItems(selectedObject);
    },
    //populate an array with all the visItems as jsx list items
    listItems: function(items){
        return (
            items.map((item) => {
                return (
                    <li className="item" id={item.name} key={item.name} onClick={this.selectItem}>
                        {item.name} - $
                        <input name={item.name} onChange={this.props.onChangePrice} className="itemPrice" type="text" defaultValue={item.price}/>
                    </li>
                    );
            })
        );
    },
    //render the listed items.
    renderItems: function(arr){
        var allItems = this.listItems(arr);
        return <ul id="itemsList">{allItems}</ul>;
    },
    render: function(){
        return (
            <div>
                {this.renderItems(this.props.items)}
            </div>
            );
    }
    
});
module.exports = VisItems;