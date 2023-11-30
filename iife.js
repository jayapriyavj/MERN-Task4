//a.print odd number in an array
// var numbers1=[1,2,3,4,5,6,7,8,9,10];
//  var oddnumbers=function(){
//   var oddnumbers=numbers1.filter((value)=> value%2!==0);
//     console.log("oddnumbers:" + oddnumbers); 
//  }
//  oddnumbers()

// //b. convert title cap in a string array
// var str = "hello world";
// var titlecap = function () {
//     var arr = str.toLowerCase().replace(/\b(\w)/g, (value) => value.toUpperCase());
//     console.log(arr);
// }
// titlecap() 

//c. sum of array
// var numbers1 = [1, 2, 3, 4, 5];
// var sum = function () {
//     var initialvalue = 0;

//     var sum = numbers1.reduce((acc, value) => acc + value, initialvalue,);
//     console.log("sum:" + sum);
// }
// sum()

//d.prime numbers
// var primeNum = function (arr) {
//     return arr.filter(function (value) {
//         for (var i = 2; i < value; i++) {
//             if (value % i === 0)
//                 return false;
//         }
//         return value > 1;
//     });

// };
// console.log(primeNum([11,16,4,2,1,3]));

// // e.palindrome
// var arr = ["madam", "pen", "malayalam"]
// var isPalindrome = function () {
//     var arrpalindrome = arr.filter(function (a, b) {
//         var palindrome = a.split('').reverse().join('');
//         if (a == palindrome) {
//             console.log(arr[b]);
//         }

//     });

// }
// isPalindrome()

// // f.median of two sorted array

// var median=function(){
//   var c=[...a,...b].sort((a,b)=>a-b);
//   var half=c.length/2 | 0;
//    if (c.length%2){git 
//     return(c[half]);
//    }else{
//     return(c[half]+c[half-1]/2);
//    }
//    }
//    var a=[2,4,6,9] ;
//     var b=[1,3,5,7];
//     console.log(median(a,b));


 // // g.remove duplicates

//  var arr=[1,2,3,2,5,5];
//  var duplicates=function(){
//     var number1=arr.filter((value,index)=>index!==arr.indexOf(value));
//     console.log(number1);
//  };
//  duplicates()


// //h.rotates k time in an array
// var rotate=function(A,K){
//     if(A.length===K || K===0){
//         return A;
//     }
//     K=K%A.length;
//     //console.log(K)
//     for(var i=0; i<K; i++){
//         A.unshift(A.pop());
//     }
//     console.log(A)
//   }
//   rotate([1,2,3,4,5],2);






