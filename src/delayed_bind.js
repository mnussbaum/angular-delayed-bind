angular.module("delayed-bind", []).
  directive("delayedBind", ["$timeout", function($timeout) {
    return {
      restrict: "A",
      scope: true,
      compile: function(element) {
        element.text("{{delayedBind}}");

        return function(scope, element, attr) {
          scope.$watch(
            function() { return scope.$eval(attr.delayedBind); },
            function(newValue, oldValue) {
              if(newValue === oldValue) {
                scope.delayedBind = newValue;
              } else {
                $timeout(
                  function() { scope.delayedBind = newValue; },
                  scope.$eval(attr.delay) || 1000
                );
              }
            }
          );
        };
      }
    };
  }]);
