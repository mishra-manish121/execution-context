function b() {
  console.log(myvar);

  myvar;
  console.log(myvar);
}
function a() {
  console.log(myvar);

  myvar = 2;
  console.log(myvar);

  b();
}
console.log(myvar);

var myvar = 1;
console.log(myvar);

a();
console.log(myvar);
