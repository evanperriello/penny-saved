var React  = require("react"),
    ReactDOM = require("react-dom"),
    {Route, Router, IndexRoute, hashHistory} = require("react-router"),
    Main = require("Main"),
    About = require("About"),
    Visualizer = require("Visualizer");
    
//Render components to the app dom element.
//.render takes two items, a jsx element and a dom element to latch onto

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="/about" component={About}/>
            <IndexRoute component={Visualizer}/>
        </Route>
    </Router>,
    
    document.getElementById("app")
);
