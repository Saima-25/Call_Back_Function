//syntax  function sum(add: ()=>void){}
function mainFunc(a) {
    console.log(2 + 2);
    a(); // callback
}
function callBack() {
    console.log(5 + 9);
}
mainFunc(callBack);
// another example
function country(city) {
    var name = "Pakistan";
    city(name);
}
country(function (name) {
    console.log("Salam" + " " + name);
});
// function city() {
//   console.log("Karachi");
// }
