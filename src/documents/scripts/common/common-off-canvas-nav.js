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
  var $btnOffCanvas     = $('.btn-off-canvas')
    , $contentOffCanvas = $('.content-off-canvas')
    , $navOffCanvas     = $('.nav-off-canvas')
    , states = {
        EXPANDED  : 'off_canvas_expanded'
      , COLLAPSED : 'off_canvas_collapsed'
      , ATTR      : 'state'
    };
    
  
  $btnOffCanvas.on('click', function() {
    
    // first time
    if( typeof $btnOffCanvas.data( states.ATTR ) === 'undefined' ) {
      $btnOffCanvas.data( states.ATTR, states.COLLAPSED );
    }
    
    switch( $btnOffCanvas.data( states.ATTR ) ) {
      
      case states.EXPANDED:
        $btnOffCanvas.data( states.ATTR, states.COLLAPSED );
        break;
      case states.COLLAPSED:
        $btnOffCanvas.data( states.ATTR, states.EXPANDED );
        break;
      
    }
    
    // trigger custom event
    $btnOffCanvas.trigger( $btnOffCanvas.data( states.ATTR ) );
    
  });
  
  $btnOffCanvas.on( states.EXPANDED, function() {
    $('html').addClass( states.EXPANDED.replace(/_/g, '-') ).removeClass( states.COLLAPSED.replace(/_/g, '-') );
    
    $contentOffCanvas.css('margin-left', $navOffCanvas.width() );
  } );
  
  $btnOffCanvas.on( states.COLLAPSED, function() {
    $('html').addClass( states.COLLAPSED.replace(/_/g, '-') ).removeClass( states.EXPANDED.replace(/_/g, '-') );
    
    $contentOffCanvas.css('margin-left', '');
  } );
  
  
  
})( jQuery, _ );