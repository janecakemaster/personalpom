'use strict';

var PersonalpomApp = require('./PersonalpomApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={PersonalpomApp}>
    <Route name="/" handler={PersonalpomApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
