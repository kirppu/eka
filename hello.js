var c = 0;

function hello() {
  c += 1;
  var even = (c % 2 === 0);
  $("p")
    .css("color", even ? "red" : "green")
    .clearQueue()
    .animate ({"padding-left": even ? 0 : 100}, 500);
}
