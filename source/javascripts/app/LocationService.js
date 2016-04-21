fiftyTerms.service('LocationService', ['$location', function($location) {
  this.getLocation = function() {
    return $location.path();
  }

  this.setLocation = function(term) {
    $location.path('/' + term.slug).replace();
  }
}])