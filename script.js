// 1. a,print odd number in array of anonymous function 


var result = [];
var arr = function odd(arr){
    for(var i = 0;i<arr.length;i=i+1){
        if(arr[i]%2!==0){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(arr([1,2,3,4,5,6,7,8,9,10]));

// // b,.IIFE 
 
var result1 = [];
 (function odd(arr1){
    for(var i = 0;i<arr1.length;i=i+1){
        if(arr1[i]%2!==0){
            result1.push(arr1[i]);
        }
    }
    console.log(result1);
  })([1,2,3,4,5,6,7,8,9,10,11])

// //c.arrow

var result2 = [];
var odd = (arr2) => {
    for(var i = 0 ; i< arr2.length ; i=i+1){
         if(arr2[i]%2!==0){
              result2.push(arr2[i]);
            
         }
        }
    return result2;
         }  
         console.log(odd([11,12,13,14,15,16,17,18,19,20]));

  //2. a)Sum of all numbers in an array

//  anonymous :
 function example(array3){
  var sum = 0;
  for(var i = 0 ; i< array3.length ; i++){
     sum = sum + array3[i];
   }
   return sum;
}([1,2,3,4,5,6,7]);
 
//  //IIFE (Immediately Invoked Function Expression):

 var output1 = [];
var sum1 =0;
 
  (function(arr4) {
   
   for (var i = 0; i < arr4.length; i++) {
    sum1 =sum1 + arr4[i];
   }
   output1.push(sum1);
   console.log(output1);
 })([1,2,3,4,5,6,7,8,9,10,11,12]);

//  //Arrow Function:

primeNumber = (numArray) => {
  numArray = numArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });
  console.log(numArray);
}

//  //3. a,Retrun all the prime numbers in an array

//  //Anonymous Function:

const numbers = [2, 3, 5, 6, 7, 11, 12, 13, 17];
const primesAnonymous = function(arr) {
  const isPrime = function(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
    
  };

  return arr.filter(num => isPrime(num));
}(numbers);

// console.log(primesAnonymous);

// //IIFE (Immediately Invoked Function Expression):
const numbers0 = [2, 3, 5, 6, 7, 11, 12, 13, 17];
const primesIIFE = (function(arr) {
  const isPrime = function(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  };

  return arr.filter(num => isPrime(num));
})(numbers);

console.log(primesIIFE);

//Arrow Function:
const numbers1 = [2, 3, 5, 6, 7, 11, 12, 13, 17];
const isPrime = num => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  };
  
  const primesArrow = numbers.filter(num => isPrime(num));
  
  console.log(primesArrow);

//covert all the string title to caps
//anonymous

var result =[];
var arr= function (arr){
for(var i=0;i<arr.length;i++){
  var j =arr[i].charAt(0).toUpperCase() +arr[i].slice(1);
  result.push(j);
}
return  result;
};
console.log(arr(["hello","welcome","thankyou"]));

//f). return
// 
const arr1 = [1,3,5,7];
const arr2 = [2,4,6,8];

function findMedianOfTwoSortedArrays(arr1, arr2){
  let arr3 = [...arr1,...arr2];
  arr3.sort((a,b)=>a-b);
  let n =arr3.length;
  if(n%2===0){
  return((arr3[n/2]+arr3[n/2-1])/2)
}
else {
return arr3[Math.floor(n/2)]
}
}
console.log(findMedianOfTwoSortedArrays(arr1, arr2));

//e). rotate an array by k value

(function(arr,k){
  for(var i=0;i<k;i++){
    arr.push(arr[i])
  }
  for(var i=0;i<k;i++){
    arr.shift()
  }
  console.log(arr);
})([1,2,3,4,5,6],3);

//return all the palindromes in an array
//anonymous

function palindrome(arr){
  var result =[];
  for(var i =0;i<arr.length;i++){
    var data = arr[i].split("").reverse().join("");
    if(data===arr[i])
    return arr
  }
  return result;
}
console.log(palindrome(['mom','dad','data']));

//IIFE

(function palindrome(arr){
  var result =[];
  for(var i =0;i<arr.length;i++){
    var data = arr[i].split("").reverse().join("");
    if(data===arr[i])
    return arr
  }
  
})(['mam','dad']);