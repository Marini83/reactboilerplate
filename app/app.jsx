var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load foundation 
$(document).foundation();
// require('style!css!foundation-sites/dist/foundation.min.css');
//app css
require('style!css!sass!applicationStyles');





ReactDOM.render(
		<p>Boiler plate 3 project</p>,
		document.getElementById('app')
		);

