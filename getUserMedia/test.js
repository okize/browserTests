var className = {
  'true': 'pass',
  'false': 'fail'
};
var msg = {
  'true': 'This browser supports the getUserMedia API',
  'false': 'This browser DOES NOT support the getUserMedia API'
};

// test function
// Normalize the various vendor prefixed versions of getUserMedia.
navigator.getUserMedia = (navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia ||
                         navigator.msGetUserMedia);
var result = typeof navigator.getUserMedia === 'function' ? true : false;

// display results
$('body').addClass( className[result] );
$('#testResult').text( msg[result] );