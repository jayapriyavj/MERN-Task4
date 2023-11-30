// //a.print odd number in an array

// var numbers1=[1,2,3,4,5,6,7,8,9,10];
//   var oddnumbers=numbers1.filter((value)=>  { return value %2!==0})
//      console.log(oddnumbers); 

// //b. convert title cap in a string array

// var str = "hello world";
//    var arr=str.toLowerCase().replace(/\b(\w)/g, (value) => value.toUpperCase());
//  console.log(arr);

// //c. sum of array

// var numbers1 = [1, 2, 3, 4, 5];
//     var initialvalue = 0;
//     var sum = numbers1.reduce((acc, value) => acc + value, initialvalue,);
//     console.log(sum);

// // d.prime numbers

//     var primeNum =[11,16,4,2,3]
//     var primeNum= primeNum.filter((value) =>{
//         for (var i = 2; i < value; i++) {
//             if (value % i === 0)
//                 return false;
//         }
//         return value > 1;
//     });
// console.log(primeNum);

// // e. palindrome in a array

var arr = ["madam", "pen", "malayalam"]
    var arrpalindrome = arr.filter((a, b)=> {
        var palindrome = a.split('').reverse().join('');
        if (a == palindrome) {
            console.log(arr[b]);
        }

    });









