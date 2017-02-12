var React = require("react");

var Clock = React.createClass({
    getInitialState: function() {
        return {
          secondsRemaining: 10
        };
    },
    tick: function(){
      this.setState({secondsRemaining: this.state.secondsRemaining - 1});
      if (this.state.secondsRemaining <= 0){
          clearInterval(this.interval);
          alert("buzz");
          this.setState({secondsRemaining: 10});
      }
    },
    startClock: function(){
        this.interval = setInterval(this.tick, 1000);
    },
    render: function(){
        
        return (
            <div>
                <h1>{this.state.secondsRemaining}</h1>
                <button onClick={this.startClock}>Start</button>
            </div>
            );
    }
    
});
module.exports = Clock;