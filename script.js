// a,print odd number in array of anonymous function 

var arr = [1,2,3,4,5,6,7,8,9,10];
var result = [];
var a = function (arr){
    for(var i = 0;i<arr.length;i=i+1){
        if(arr[i]%2!==0){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(a(arr));

// b,.IIFE 

var arr = [1,2,3,4,5,6,7,8,9,10];
var result = [];
(function (arr){
    for(var i = 0;i<arr.length;i=i+1){
        if(arr[i]%2!==0){
            result.push(arr[i]);
        }
    }
    console.log(result)

//c.arrow

var arr = [11,12,13,14,15,16,17,18,19]
oddNumbers = (array) => {
    for(var i = 0 ; i< array.length ; i++){
         if(array[i]%2!=0){
            console.log(array[i])
         } 
    }
         }     
 //  3)Sum of all numbers in an array

//anonymous  :  

 function(arr){  
var sum = 0;
 for(var i = 0 ; i< array.length ; i++){
sum = sum + array[i];
 }
     return sum;
  }
  
// IIFE :  

   (function(array){
             var sum = 0;
                  for(var i = 0 ; i< array.length ; i++){
                     sum = sum + array[i];
                   }
                   return sum;
             })([1,2,3,4])
// Arrow:

sum = (array)=>{
             var sum = 0;
                  for(var i = 0 ; i< array.length ; i++){
                     sum = sum + array[i];
                   }
                   return sum;
                   }