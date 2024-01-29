//1.Write a function called arrayFor that takes an array as a parameter, loops through all the elements using For Loop and prints all elements of the array in the console using console.log
function arrayFor(array){
    for(i=0;i<array.length;i++)
    console.log (array[i])
}
//2.Write a function called arrayWhile that takes an array as a parameter, loops through all the elements using While Loop and prints all elements of the array in the console using console.log
function arrayFor(array){
    i=0
    while(i<array.lenght){
        console.log(array[i])
        i++
    }
}
//3.Write a function called sum that takes an array of numbers as a parameter and returns the sum of the numbers in the array
function sum(array){
    let sum=0
    for(i=0;i<array.length;i++){
        s=s+array[i]
    }
   return sum
}
//4.Write a function called sumEveryOther that takes an array of numbers as a parameter and returns the summation of every other number starting from the beginning of the array.
function sumEveryOther(array){
    let sum=0
    for(i=0;i<array.length;i+=2){
        s=s+array[i]
    }
    return sum
}
// 5.Write a function called sumStartAt that takes an array of numbers, and an index as parameters and returns the summation of every number starting from the inputted index, until the end of the array
function sumStartAt(array, index){
    function sumStartAt(arr, index) {
        let sum = 0;
        for (let i = index; i < arr.length; i++) {
          sum += arr[i];
        }
        return sum;
      }
}
//6.Write a function called sumUntil that takes an array of numbers, and an index as parameters and returns the summation of every number starting from the index 0, until the index parameter
function sumUntil(arr, index) {
    let sum = 0;
    for (let i = 0; i <=index; i++) {
      sum += arr[i];
    }
    return sum;
  }
//7.Write a function called subtractReverse that takes an array of numbers as a parameter and returns the subtraction of every number beginning at the last element of the input array and ending at the first element of the input array (in reverse).
function subtractReverse(array){
    let sub = 0;
    for (let i = 0; i <=index;i--) {
      sub=sub-array[i];
    }
    return sub;
}
//8.Write a function called product that takes an array as a parameter and returns the product of all the elements in the array.
function product(array){
    let product=1;
    for (let i = 0;i<=array.lenght;i++) {
      product=product*array[i];
    }
    return product;
}
// 9.Write a function called average that takes an array as a parameter and returns the average of all the elements in the array.
function average(array){
    let avg=0;
    for (let i = 0;i<=array.lenght;i++) {
      avg=avg/array.lenght;
    }
    return product;
}
// 10.Write a function called square that takes an array as a parameter and returns a new array where each element is the square of the element of the given array
function square(array){
    const result=[]
    for (let i = 0;i<=array.lenght;i++){
        result.push(array[i]*array[i])
    }
    return result
}
// 11.Write a function called isArray that takes one parameter and returns true if the input is array otherwise returns false.
function isArray(array){
    for (let i = 0;i<=array.lenght;i++){
        if (array[i]===(Number)){
            return true
        }
}
}
//hello sfectoeia
