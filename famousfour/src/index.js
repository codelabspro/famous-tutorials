'use strict';

// Famous dependencies
var DOMElement = require('famous/dom-renderables/DOMElement');
var FamousEngine = require('famous/core/FamousEngine');
var CustomNode = require('./CustomNode');
var MovingNode = require('./MovingNode');
var KeyCodes = require('famous/utilities/KeyCodes');
var Position = require('famous/components/Position');
// Boilerplate code to make your life easier
FamousEngine.init();

var scene = FamousEngine.createScene('body');
var rootNode = scene.addChild();
var farBuildings = rootNode.addChild(new CustomNode('url(images/parallax_far_buildings.png)', '#B3E5FC', 0, 0, 1800, 500));
var plane = rootNode.addChild(new MovingNode('url(images/plane_100x100.png)', '#B3E5FC', 200, 200, 100, 100));



window.addEventListener('keydown', function(e) {
  console.log('keydown occured');
  if (e.keyCode === KeyCodes.RIGHT_ARROW) {
    console.log('Right arrow was pressed');
    var positionComponent = new Position(plane);
    positionComponent.set(1000, 200, 0, { duration: 1000, curve: 'outQuad' });
  }
}.bind(this));
