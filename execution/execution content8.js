var a = 0; // global
function doStuff() {
  var a = 10; // local
  console.log(a);
  console.log(this.a)(function b() {
    var a = 20; // even more local
    console.log(a);
    console.log(this.a);
  })();
}
console.log(a);
doStuff();
console.log(a);
