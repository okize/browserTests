var className = {
  'true': 'pass',
  'false': 'fail'
};
var msg = {
  'true': 'This browser supports <FOO>',
  'false': 'This browser DOES NOT support <FOO>'
};

// test function
var hasFoo = function () {
  return true || false;
};
var result = hasFoo();

// display results
$('body').addClass( className[result] );
$('#testResult').text( msg[result] );