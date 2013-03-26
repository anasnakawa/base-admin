/*!
 * ------------------------------
 * charts page
 * ------------------------------
 */

// ------------------------------
// table of content
// ------------------------------
// Morris.js
// Flot
// ------------------------------

(function( $ ) {
  
  $(function() {
  
    // strict mode
    'use strict';
    
    // charts configurations
    var sin = []
    , cos = []
    , configs = {}
    , plot;
    
    // initializing sin / cos arrays
    for( var i = 0; i < 14; i += 0.5 ) {
      sin.push( [ i, Math.sin( i ) ] );
      cos.push( [ i, Math.cos( i ) ] );
    }
    
    // plot configs
    configs.plot = {
      data: [
        {
            data: sin
          , label: 'sin(x)'
        }, {
            data: cos
          , label: 'cos(x)'
        }
      ]
      , options: {
        series: {
            lines: { show: true }
          , points: { show: true }
        }
        , grid: { hovertable: true, clickable: true }
        , yaxis: { min: -1.2, max: 1.2 }
      }
    }
    
    // Morris.js
    // ----------------
    Morris.Line({
      element: 'jsMorrisChart',
      data: [
        { y: '2006', a: 50, b: 40 },
        { y: '2007', a: 75,  b: 65 },
        { y: '2008', a: 50,  b: 40 },
        { y: '2009', a: 75,  b: 65 },
        { y: '2010', a: 50,  b: 40 },
        { y: '2011', a: 75,  b: 65 },
        { y: '2012', a: 50, b: 40 }
      ],
      xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['Series A', 'Series B'],
      lineColors: ['#2BA6CB', '#222222']
    });
    
    // Flot
    // ----------------
    $('.js-plot').plot( configs.plot.data, configs.plot.options );
      
    function showTooltips(x, y, contents) {
        $('<div class="tui-tooltip">' + contents + '</div>').css( {
            position: 'absolute',
            display: 'none',
            top: y + 5,
            left: x + 5,
        }).appendTo("body").fadeIn(200);
    }
    
    function showTooltip(x, y, contents) {
        debugger;
        $('<div class="tui-tooltip">' + contents + '</div>').css( {
            position: 'absolute',
            display: 'none',
            top: y + 5,
            left: x + 5,
            'background-color': 'red',
            color: 'white'
        }).appendTo("body").fadeIn(200);
    }
    
    $('.js-plot').on('plothover', function(e, pos, item) {
      debugger;
      var $self = $(this)
      , previousPoint = $self.data('prev');
      
      if( item ) {
        if( previousPoint !== item.dataIndex ) {
          previousPoint = item.dataIndex;
          
          $('.tui-tooltip').remove();
          var x = item.datapoint[0].toFixed(2)
          , y = item.datapoint[1].toFixed(2);
          
          showTooltip( item.pageX, item.pageY, item.series.label + ' of ' + x + ' = ' + y );
        }
      } else {
        $('.tui-tooltip').remove();
        previousPoint = undefined;
      }
      $self.data('prev', previousPoint);
    });
  
  }); // end dom ready
})( jQuery );