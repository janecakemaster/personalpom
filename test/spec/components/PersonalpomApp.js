'use strict';

describe('PersonalpomApp', function () {
  var React = require('react/addons');
  var PersonalpomApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    PersonalpomApp = require('components/PersonalpomApp.js');
    component = React.createElement(PersonalpomApp);
  });

  it('should create a new instance of PersonalpomApp', function () {
    expect(component).toBeDefined();
  });
});
