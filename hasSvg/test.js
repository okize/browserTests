var className = {
  'true': 'pass',
  'false': 'fail'
};
var msg = {
  'true': 'This browser supports SVG elements',
  'false': 'This browser DOES NOT support SVG elements'
};

var displayResults = function (result) {

  // display results
  $('body').addClass( className[result] );
  $('#testResult').text( msg[result] );

};

// test function
var hasSvg = function () {

  var result = false,
      img = new Image();

  img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjwvc3ZnPg==';

  img.onload = function () {

    if (img.width === 1 && img.height === 1) {
      result = true;
    }

    displayResults(result);

  };

  displayResults(result);

};

hasSvg();

