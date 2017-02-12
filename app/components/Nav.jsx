var React = require("react");
var {Link, IndexLink} = require("react-router");

var Nav = React.createClass({
    render: function(){
        return (
            <nav>
                <ul>
                    <li><h2>PennySaved</h2></li>
                    <li><IndexLink to="/" activeStyle={{fontWeight: "bold"}}>Save</IndexLink></li>
                    <li><Link to ="/about">About</Link></li>
                </ul>
            </nav>
            );
    }
    
});
module.exports = Nav;