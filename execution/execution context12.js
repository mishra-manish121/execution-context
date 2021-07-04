function a() {
  var ab = 2;
  console.log(ab);
  b();
  function c() {
    console.log("c: " + ab);
  }
  c();
  console.log(ab);
}
function b() {
  // var ab;
  c();
  console.log(ab);
}

function c() {
  console.log(ab);
}
c();
var ab = 10;
a();
c();
console.log(ab);
