'use strict';

// Famous dependencies
var DOMElement = require('famous/dom-renderables/DOMElement');
var FamousEngine = require('famous/core/FamousEngine');
var CustomNode = require('./CustomNode');

// Boilerplate code to make your life easier
FamousEngine.init();

var scene = FamousEngine.createScene('body');
var rootNode = scene.addChild();
var farBuildings = rootNode.addChild(new CustomNode('url(images/parallax_far_buildings.png)', '#B3E5FC', 0, 0, 1800, 500));
