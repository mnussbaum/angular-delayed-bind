"use strict";

describe("delayedBind", function() {
  var scope,
      element,
      $compile,
      compiled,
      $timeout;

  beforeEach(module("delayed-bind"));
  beforeEach(inject(function(_$compile_, $rootScope, _$timeout_) {
    $compile = _$compile_;
    scope = $rootScope.$new();
    $timeout = _$timeout_;
  }));

  it("evals the passed in string in the current scope, sets element text to the result", function() {
      scope.woo = "test";
      compiled = $compile("<div delayed-bind='woo'></div>");
      element = compiled(scope);
      scope.$digest();

      expect(element.text()).toBe("test");
  });

  it("updates the value after a timeout", function() {
      scope.woo = "test";
      compiled = $compile("<div delayed-bind='woo' delay='3000'></div>");
      element = compiled(scope);
      scope.$digest();
      scope.woo = "fubar";
      scope.$digest();
      $timeout.flush();
      expect(element.text()).toBe("fubar");
      $timeout.verifyNoPendingTasks();
  });
});
