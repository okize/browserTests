var className = {
  'true': 'pass',
  'false': 'fail'
};
var msg = {
  'true': 'This browser has native JSON support',
  'false': 'This browser DOES NOT have native JSON support'
};

// test function
var hasJson = function () {
  return !!window.JSON && !!JSON.parse;
};
var result = hasJson();

// display results
$('body').addClass( className[result] );
$('#testResult').text( msg[result] );