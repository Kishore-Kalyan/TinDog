var arr = new Array(5)
var a = 0, b = 1;
var i = 0;
while (i < 5) {
    arr.push(a);
    var sum = a+b;
    b = a;
    a = sum;
    i++;
}
console.log(arr)