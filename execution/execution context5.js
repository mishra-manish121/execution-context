function a() {
  ab = 2;
  console.log(ab);

  function b() {
    ab;
    console.log(ab);
  }
  b();
  console.log(ab);
}
var ab = 10;
a();
console.log(ab);
