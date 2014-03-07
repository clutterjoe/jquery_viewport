##jquery_viewport
===============
Check if an element is entirely in the viewport, partially in the viewport, 
entirely out of the viewport; if is above, below, left, or right of the 
viewport; or if top, bottom, left or right intersects the viewport.

This plugin creates a series of pseudoclasses you can add to your jQuery 
selectors.

**For example $("img:below-the-fold").something()**

Any part of the element is visible.
:in-viewport-partial

All parts of the element are visible.
:in-viewport-total

The top of the element intersects with the edge of the viewport.
:intersect-viewport-top

The right of the element intersects with the edge of the viewport.
:intersect-viewport-right

The bottom of the element intersects with the edge of the viewport.
:intersect-viewport-bottom

The left of the element intersects with the edge of the viewport.
:intersect-viewport-left

Any part of the element is NOT inside of the viewport.
:out-viewport-partial

All parts of the element are NOT inside of the viewport.
:out-viewport-total

The element is completely above the viewport.
:above-viewport

The element is completely to the right of the viewport.
:right-of-viewport

The element is completely below the viewport.
:below-viewport

The element is completely to the left of the viewport.
:left-of-viewport

