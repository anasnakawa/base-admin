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
     var sin = [],
          cos = [];
    
      for (var i = 0; i < 14; i += 0.5) {
          sin.push([i, Math.sin(i)]);
          cos.push([i, Math.cos(i)]);
      }
    
      var plot = $.plot("#placeholder", [
        { data: sin, label: "sin(x)"},
        { data: cos, label: "cos(x)"}
    ], {
        series: {
            lines: {
                show: true
            },
            points: {
                show: true
            }
        },
        grid: {
            hoverable: true,
            clickable: true
        },
        yaxis: {
            min: -1.2,
            max: 1.2
        }
    });
    
    function showTooltip(x, y, contents) {
        $("<div id='tooltip'>" + contents + "</div>").css({
            position: "absolute",
            display: "none",
            top: y + 5,
            left: x + 5,
            border: "1px solid #fdd",
            padding: "2px",
            "background-color": "#fee",
            opacity: 0.80
        }).appendTo("body").fadeIn(200);
    }
    
    var previousPoint = null;
    $("#placeholder").bind("plothover", function (event, pos, item) {
        
        // tooltip always enabled
        if (item) {
            if (previousPoint != item.dataIndex) {
    
                previousPoint = item.dataIndex;
    
                $("#tooltip").remove();
                var x = item.datapoint[0].toFixed(2),
                y = item.datapoint[1].toFixed(2);
    
                showTooltip(item.pageX, item.pageY,
                    item.series.label + " of " + x + " = " + y);
            }
        } else {
            $("#tooltip").remove();
            previousPoint = null;            
        }
    });
    
    // Chart.js
    // --------
    //Get context with jQuery - using jQuery's .get() method.
    var ctx = $("#lineChart").get(0).getContext("2d");
    //This will get the first returned node in the jQuery collection.
    var myNewChart = new Chart(ctx).Line({
      labels: ["January","February","March","April","May","June","July"],
      datasets: [
        {
          fillColor : "rgba(220,220,220,0.5)",
          strokeColor : "rgba(220,220,220,1)",
          pointColor : "rgba(220,220,220,1)",
          pointStrokeColor : "#fff",
          data : [65,59,90,81,56,55,40]
        },
        {
          fillColor : "rgba(151,187,205,0.5)",
          strokeColor : "rgba(151,187,205,1)",
          pointColor : "rgba(151,187,205,1)",
          pointStrokeColor : "#fff",
          data : [28,48,40,19,96,27,100]
        }
      ]
    });
  
  }); // end dom ready
})( jQuery );