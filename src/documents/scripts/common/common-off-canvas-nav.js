/*!
 * ------------------------------
 * Common off canvas navigation
 * ------------------------------
 */

// ------------------------------
// table of content
// ------------------------------
// ------------------------------

// ------------------------------
// Notes
// ------------------------------
// we do not need any break point scripts, we just need to bind an event
// on the navbar button (which will only appear on tablets and below)
// then handle the off canvas layout by toggleing a class on html / body or whatever..
// ------------------------------

(function( $, _ ) {
  
  // local vars
  var $win = $(window)
  , breakPoint = {
      width: 1200
    , over: 'over'
    , below: 'below'
  }
  , breakPointChanged = function( breakPoint ) {
    return $(window).width()
  }
  , $nav = $('[data-off-canvas="nav"]')
  , $content = $('[data-off-canvas="content"]')
  , below = 'exitBreakpoint'
  , over = 'enterBreakpoint';
  
  console.log( $nav, $content );
  
  // caching current break point
  $win.data('breakpoint', $win.width >= breakPoint.width ? breakPoint.over : breakPoint.below);
  
  // since resize method will be fired much more than we need
  // throttle (from underscore.js) makes sure that resize handler
  // will be fired no more than once in every 200 miliseconds
  $win.resize( _.throttle(function() {
    
    
    
  }, 200) );
  
  /* initiate break points
  $win.setBreakpoints({
      // use only largest available vs use all available
      distinct: true, 
      // array of widths in pixels where breakpoints
      // should be triggered
      breakpoints: [
          320,
          480,
          768,
          980,
          1200
      ] 
  });
  // */
  $win.bind( below + '980 ' + over + '980', function(e) {
    $('html').toggleClass('')
  });
  
  // where should off canvas nav hidden
  $win.bind(below + '980', function() {
    // hide navigation
    $nav.hide();
    
    // stretch content
    $content.css('width', '100%');
    
  });
  
  $win.bind(over + '980', function() {
    $nav.show();
    $content.css('width', null);
  });
  
  
  
})( jQuery, _ );