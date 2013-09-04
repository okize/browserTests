var className = {
  'true': 'pass',
  'false': 'fail'
};
var msg = {
  'true': 'This browser supports HTML5 File Uploading',
  'false': 'This browser DOES NOT support HTML5 File Uploading'
};

// test function
var hasFormData = function () {
  return (typeof window.FormData === 'undefined') ? false : true;
};
var result = hasFormData();

// display results
$('body').addClass( className[result] );
$('#testResult').text( msg[result] );