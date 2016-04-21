fiftyTerms.factory('TermFromJSONFactory', ['TermFactory', function(TermFactory) {
  this.termFromJSON = function(json) {
    return new TermFactory(json.index, json.title, json.misconception, json.reality, json.slug);
  };

  return this.termFromJSON;
}]);