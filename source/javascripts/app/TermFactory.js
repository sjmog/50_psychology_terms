fiftyTerms.factory('TermFactory', function() {
  var Term = function(index, title, misconception, reality, slug) {
    this.index = index;
    this.title = title;
    this.misconception = misconception;
    this.reality = reality;
    this.slug = slug;
  }

  return Term;
});