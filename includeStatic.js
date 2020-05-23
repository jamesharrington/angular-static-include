angular.module("static-include", []).directive('staticInclude', function($templateRequest, $compile) {
  return {
    restrict: 'E',
    transclude: 'element',
    replace: true,
    link: function(scope, element, attrs) {
      var templatePath = attrs.src || attrs.staticInclude;

      $templateRequest(templatePath)
        .then(function(response) {
          var contents = element.html(response).contents();
          $compile(contents)(scope.$new(false, scope.$parent));
        });
    }
  };
});
