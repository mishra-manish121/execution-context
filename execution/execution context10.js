function a() {
  var ab = 2;
  console.log(ab);
  b();
  console.log(ab);
}
function b() {
  // var ab;
  console.log(ab);
}
var ab = 10;
a();
console.log(ab);
