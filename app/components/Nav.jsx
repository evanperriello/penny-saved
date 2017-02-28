var React = require("react");
var {Link, IndexLink} = require("react-router");

var Nav = React.createClass({
    render: function(){
        return (
            <nav>
                <h1 id="siteTitle"><img id="pig" src="images/pigistration.svg"/>Penny Saved</h1>
                <ul id="navLinkList">
                    <li className="navLink"><IndexLink to="/" activeClassName="active">Save Some Pennies</IndexLink></li>
                    <li className="navLink"><Link to ="/about" activeClassName="active">About</Link></li>
                </ul>
            </nav>
            );
    }
    
});
module.exports = Nav;