/*!
 * ------------------------------
 * Common off canvas navigation
 * ------------------------------
 */

// ------------------------------
// table of content
// ------------------------------
// ------------------------------

(function( $ ) {
  
  // local vars
  var $win = $(window)
  , $nav = $('[data-off-canvas="nav"]')
  , $content = $('[data-off-canvas="content"]')
  , below = 'exitBreakpoint'
  , over = 'enterBreakpoint';
  
  console.log( $nav, $content );
  
  // initiate break points
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
  
})( jQuery );