var React = require("react");
var Nav = require("Nav");
var Tips = require("Tips");

var Main = (props) => {
    return ( 
        <div>
            <Nav/>
            <Tips/>
            <div>
                <div id="mainBody">
                    {props.children}
                </div>
            </div>
        </div>
            );
};

module.exports = Main;