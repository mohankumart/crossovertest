/**
 * filters
 */

var filters = angular.module('utApp.filters', []);

filters.filter('capital', function() {
  return function(text) {
	  return text.charAt(0).toUpperCase() + text.slice(1);
  }
});

