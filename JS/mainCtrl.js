var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, quoteService){
	$scope.quotes = quoteService.getQuotes();

	$scope.addQuotes = function(text, author){
		quoteService.addQuotes(text, author);
	}
	$scope.removeQuotes = function(){
		quoteService.removeQuotes($scope.remove);
	}
});