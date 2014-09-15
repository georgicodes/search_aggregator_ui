;(function(exports) {
	"use strict";

	var Search = function() {
	};	

	Search.prototype = {
		performSearch: function(searchTerm, searchResultsDiv) {
			console.log('Searching for ' + searchTerm);
			$.ajax({
				type: "GET",
				url: "http://localhost:4567/search",
				data: "q=" + searchTerm,
				dataType: "json",
				async: true,
				cache: false,
				success: function(ret){
	     	// TODO: refactor and move this to own method
	     	ret.results.forEach(function(result) {
	     		var h4 = "<h4>" + result.title + "</h4>";
	     		var url = result.url;
	     		var link = "<a href='" + url + "''>" + url + "</a>";
	     		searchResultsDiv.append(h4);
	     		searchResultsDiv.append(link);
	     	});
	     },
	     error: function(x,e){
	     	console.log("error with search");
	     } 
	   });
		}	
	};

  // exports objects to global scope
  exports.Search = Search;

})(this);