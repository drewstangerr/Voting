$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

if (age >= 18) {
  $('#Over-18') .show();
} else {
  $('#Under-18').show();
}
});
