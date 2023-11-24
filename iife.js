////1.print odd number in an array
// var numbers1=[1,2,3,4,5,6,7,8,9,10];
//  (function(){
//   var oddnumbers=numbers1.filter((value)=> value%2!==0);
//     return oddnumbers; 
//  })();
//  
////3. sum of array

// var numbers1 = [1, 2, 3, 4, 5];
// (function () {
//     var initialvalue = 0;
//     var sum = numbers1.reduce((acc, value) => acc + value, initialvalue,);
//     return sum;
      console.log(sum);
// })();
// 4.prime numbers

(function () {
    var primeNum =[11,16,4,2,3]
    var primeNum= primeNum.filter(function (value) {
        for (var i = 2; i < value; i++) {
            if (value % i === 0)
                return false;
        }
        return value > 1;
    });
console.log(primeNum);
 })()