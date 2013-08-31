var className = {
  'true': 'pass',
  'false': 'fail'
};
var msg = {
  'true': 'This browser supports the Canvas element',
  'false': 'This browser DOES NOT support the Canvas element'
};

// test function
var hasCanvas = function () {
  return !!document.createElement('canvas').getContext;
};
var result = hasCanvas();

// display results
$('body').addClass( className[result] );
$('#testResult').text( msg[result] );