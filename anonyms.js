//1.print odd number in an array
// var numbers1=[1,2,3,4,5,6,7,8,9,10];
//  var oddnumbers=function(){
//   var oddnumbers=numbers1.filter((value)=> value%2!==0);
//     console.log("oddnumbers:" + oddnumbers); 
//  }
//  oddnumbers()
//3. sum of array

// var numbers1 = [1, 2, 3, 4, 5];
// var sum = function () {
//     var initialvalue = 0;

//     var sum = numbers1.reduce((acc, value) => acc + value, initialvalue,);
//     console.log("sum:" + sum);
// }
// sum()
//2. convert title cap in a string array


// var str = "hello world";
// var titlecap = function () {
//     var arr = str.toLowerCase().replace((stri) => stri.toUppercase());
//     console.log(arr);
// }
// titlecap()

// // 4.median of two sorted array
//      var a=[2,4,6,9] ;
//      var b=[]
//prime numbers
//4.prime
var primeNum = function (arr) {
    return arr.filter(function (value) {
        for (var i = 2; i < value; i++) {
            if (value % i === 0)
                return false;
        }
        return value > 1;
    });

};
console.log(primeNum([11,16,4,2,1,3]));






