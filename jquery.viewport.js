/*
 * Viewport - jQuery selectors for finding elements in viewport
 *
 * Copyright (c) 2008-2009 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *  http://www.appelsiini.net/projects/viewport
 *
 * Forked 2014
 *
 * Copyright (c) 2014 Joe Crespo
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *  https://github.com/clutterjoe/jquery_viewport
 */
(function($) {

  $.viewport = {
    belowfold: function(element, settings) {
      var fold = $(window).height() + $(window).scrollTop();
      return fold <= $(element).offset().top - settings.threshold;
    },
    abovefold: function(element, settings) {
      var top = $(window).scrollTop();
      return top >= $(element).offset().top + $(element).outerHeight() - settings.threshold;
    },
    overlapsfold: function(element, settings) {
      var fold = $(window).height() + $(window).scrollTop();
      return (fold <= $(element).offset().top + $(element).outerHeight()) && (fold >= $(element).offset().top - settings.threshold);
    },
    intersecttop: function(element, settings) {
      var top = $(window).scrollTop();
      return (top >= $(element).offset().top) && (top <= $(element).offset().top + $(element).outerHeight() - settings.threshold);
    },
    intersectright: function(element, settings) {
      var right = $(window).width() + $(window).scrollLeft();
      return (right >= $(element).offset().left) && (right <= $(element).offset().left + $(element).outerWidth() - settings.threshold);
    },
    intersectbottom: function(element, settings) {
      var fold = $(window).height() + $(window).scrollTop();
      return (fold >= $(element).offset().top) && (fold <= $(element).offset().top + $(element).outerHeight() - settings.threshold);
    },
    intersectleft: function(element, settings) {
      var left = $(window).scrollLeft();
      return (left >= $(element).offset().left) && (left <= $(element).offset().left + $(element).outerHeight() - settings.threshold);
    },
    rightofviewport: function(element, settings) {
      var fold = $(window).width() + $(window).scrollLeft();
      return fold <= $(element).offset().left - settings.threshold;
    },
    leftofviewport: function(element, settings) {
      var left = $(window).scrollLeft();
      return left >= $(element).offset().left + $(element).outerWidth() - settings.threshold;
    },
    inviewportpartial: function(element, settings) {
      return !this.rightofviewport(element, settings) && !this.leftofviewport(element, settings) && !this.belowfold(element, settings) && !this.abovefold(element, settings);
    },
    inviewporttotal: function(element, settings) {
      return this.inviewportpartial(element, settings) && !this.intersecttop(element, settings) && !this.intersectright(element, settings) && !this.intersectbottom(element, settings) && !this.intersectleft(element, settings);
    }
  };



  ;


  $.extend($.expr[':'], {

    // Any part of the element is visible.
    "in-viewport-partial": function(a, i, m) {
      return $.viewport.inviewportpartial(a, {threshold : 0});
    },
    // All parts of the element are visible.
    "in-viewport-total": function(a, i, m) {
      return $.viewport.inviewporttotal(a, {threshold : 0});
    },
    // The top of the element intersects with the edge of the viewport.
    "intersect-viewport-top": function(a, i, m) {
      return $.viewport.intersecttop(a, {threshold : 0});
    },
    // The right of the element intersects with the edge of the viewport.
    "intersect-viewport-right": function(a, i, m) {
      return $.viewport.intersectright(a, {threshold : 0});
    },
    // The bottom of the element intersects with the edge of the viewport.
    "intersect-viewport-bottom": function(a, i, m) {
      return $.viewport.intersectbottom(a, {threshold : 0});
    },
    // The left of the element intersects with the edge of the viewport.
    "intersect-viewport-left": function(a, i, m) {
      return $.viewport.intersectleft(a, {threshold : 0});
    },

    // Any part of the element is NOT inside of the viewport.
    "out-viewport-partial": function(a, i, m) {
      return !$.viewport.inviewporttotal(a, {threshold : 0});
    },
    // All parts of the element are NOT inside of the viewport.
    "out-viewport-total": function(a, i, m) {
      return !$.viewport.inviewportpartial(a, {threshold : 0});
    },
    // The element is completely above the viewport.
    "above-viewport": function(a, i, m) {
      return $.viewport.abovefold(a, {threshold : 0});
    },
    // The element is completely to the right of the viewport.
    "right-of-viewport": function(a, i, m) {
      return $.viewport.rightofviewport(a, {threshold : 0});
    },
    // The element is completely below the viewport.
    "below-viewport": function(a, i, m) {
      return $.viewport.belowfold(a, {threshold : 0});
    },
    // The element is completely to the left of the viewport.
    "left-of-viewport": function(a, i, m) {
      return $.viewport.leftofviewport(a, {threshold : 0});
    },

    // Legacy pseudoclasses.
    "below-the-fold": function(a, i, m) {
      return $.viewport.belowfold(a, {threshold : 0});
    },
    "overlaps-fold": function(a, i, m) {
      return $.viewport.overlapsfold(a, {threshold : 0});
    },
    "above-the-top": function(a, i, m) {
      return $.viewport.abovefold(a, {threshold : 0});
    },
    "overlaps-top": function(a, i, m) {
      return $.viewport.intersecttop(a, {threshold : 0});
    },
    "left-of-screen": function(a, i, m) {
      return $.viewport.leftofviewport(a, {threshold : 0});
    },
    "right-of-screen": function(a, i, m) {
      return $.viewport.rightofviewport(a, {threshold : 0});
    },
    "in-viewport": function(a, i, m) {
      return $.viewport.inviewportpartial(a, {threshold : 0});
    }
  });


})(jQuery);
