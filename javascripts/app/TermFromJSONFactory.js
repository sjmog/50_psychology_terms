fiftyTerms.factory("TermFromJSONFactory",["TermFactory",function(r){return this.termFromJSON=function(t){return new r(t.index,t.title,t.misconception,t.reality,t.slug)},this.termFromJSON}]);