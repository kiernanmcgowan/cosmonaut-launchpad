// launchpad.js

var browserify = require('browserify');
var bundle = browserify({cache: false, watch: false});

var fs = require('fs');
var path = require('path');

module.exports.package = function(loc) {
  // read in the scripts at that location
  bundle.addEntry(loc);
  return bundle;
};
