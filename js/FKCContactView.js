define(function(require) {
  var Adapt = require("coreJS/adapt");
  var Backbone = require("backbone");

  var FKCContact = Backbone.View.extend({
    className: "FKCContact-container",

    initialize: function() {
      this.listenTo(Adapt, "remove", this.remove);
      this.listenTo(Adapt, "pageView:ready", this.onPageViewReady, this);
    },
    events: {
      "click .toggle-id-1": "toggleSlider1",
      "click .toggle-id-2": "toggleSlider2"
    },
    toggleSlider1: function(event) {
      console.log("toggleSlider1");
      $(".toggle-id-2").removeClass("SlidebarSlideIn");
      $(".slidebar-id-2").css("display", "none");

      if ($(".toggle-id-1").hasClass("SlidebarSlideIn")) {
        $(".toggle-id-1").removeClass("SlidebarSlideIn");
        $(".slidebar-id-1").css("display", "none");
      } else {
        $(".toggle-id-1").addClass("SlidebarSlideIn");
        $(".slidebar-id-1").css("display", "block");
      }
    },
    toggleSlider2: function(event) {
      console.log("toggleSlider2");
      $(".toggle-id-1").removeClass("SlidebarSlideIn");
      $(".slidebar-id-1").css("display", "none");

      if ($(".toggle-id-2").hasClass("SlidebarSlideIn")) {
        $(".toggle-id-2").removeClass("SlidebarSlideIn");
        $(".slidebar-id-2").css("display", "none");
      } else {
        $(".toggle-id-2").addClass("SlidebarSlideIn");
        $(".slidebar-id-2").css("display", "block");
      }
    },
    onPageViewReady: function() {
      this.render();
    },
    render: function() {
      var data = this.model.toJSON();
      var template = Handlebars.templates["FKCContact"];
      var FKCContact = this.model.get("_FKCContact");
      if (FKCContact && FKCContact._isEnabled) {
        this.$el.html(template(data));
      }
      return this;
    }
  });

  return FKCContact;
});
