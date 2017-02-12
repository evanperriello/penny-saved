var React = require("react");

var Puzzle = React.createClass({
    model: {
        numberSwitches: 10,
        switches: []
    },
    populateSwitchGame: function(){
        for (var i = 0; i < this.model.numberSwitches; i++){
            this.model.switches.push(<div className='switches'></div>);
        }
        return this.model.switches;
    },
    render: function(){
        return (
            <div>
                <h1>Light the switches in the correct order.</h1>
                    <div id="switchGame">
                        <div className="switches" onClick={this.populateSwitchGame}></div>
                        {this.model.switches.forEach}                    
                    </div>
            </div>
            );
    }
    
});
module.exports = Puzzle;