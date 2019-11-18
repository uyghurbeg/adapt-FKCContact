define(function(require) {
  var Adapt = require("coreJS/adapt");
  var FKCContactView = require("extensions/adapt-FKCContact/js/FKCContactView");

  function setupFKCContactView(page) {
    page.$el.append(new FKCContactView({ model: page.model }).$el);
  }

  Adapt.on("pageView:postRender", function(page) {
    if (!Adapt.course.get("_FKCContact") ||!Adapt.course.get("_FKCContact")._isEnabled) return;
    setupFKCContactView(page);
  });
});
