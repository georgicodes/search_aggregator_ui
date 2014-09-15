;(function(exports) {
	"use strict";

	var App = function() {
	 	this.search = new Search();
	  this.initEventListeners();
	};	

	App.prototype = {
	  performSearch: function() {
			var searchQuery = $('#search-term').val();
			var searchResultsDiv = $('#search-results');

			this.search.performSearch(searchQuery, searchResultsDiv);
	  },
		initEventListeners: function() {
      var searchForm = $('#search-form');
      var self = this;

			$('#search-form').submit(function(event) {
				self.performSearch();
				return false;
			});
	  }	
	};

  // exports objects to global scope
  exports.App = App;

})(this);

// When the DOM is ready, create (and start) the app.
$(document).ready(function(){
  var app = new App();
});