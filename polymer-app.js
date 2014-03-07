window.addEventListener('polymer-ready', function(e) {
  var btn = document.querySelector('.test');
  var dialog = document.querySelector('#dialog');
  btn.addEventListener('activated', function() {
    dialog.show();
  });

  document.querySelector('.options inf-button').addEventListener('activated', function() {
    dialog.hide();
  });
});