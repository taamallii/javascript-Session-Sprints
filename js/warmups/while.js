//1.Write a function called sumOfN that takes a number as a parameter and returns the sum of that number and all the numbers before it.
function sumofn(n){
    let result=0;
    let i=0;
    while(i<=n){
        result=result+i;
        i++
    }
    return result 
}
//2.Write a function called factorialOfN that takes a whole number as a parameter and returns the factorial of that number.
function  factorialOfN(n){
    let result=1;
    let i=1;
    while(i<=n){
        result=result*i;
        i++
    }
    return result 
}
//3.Write a function called repeatString that takes two parameters, as string and a number, and returns that string the number of times specified in the second parameter.
function repeatString(string, num){
    let result=0;
    let i=1;
    while(i<=num){
        result=result+string;
        i++
    }
    return result
}
//4.Write a function called countMinMax that takes two numbers as parameters and returns the range.
function countMinMax(min, max){
    let i=0;
    while(min<max){
        i++;
        min++
    }
    return i
}
function countMinMax(min, max){
    for(let i=0;min<max;i++){
        min++;
    }
    return min ;
}
//5.Write a function called sumMinToMax that takes two numbers as parameters and returns the sum between the two integers beginning at the num1 and excluding num2.
function sumMinToMax(min, max){
    let result=0;
    let i=min;
    while(i<max){
        result=result+i;
        i++
    }
return result
}
// with for
function sumMinToMax(min, max){
    let s=0
    for(let i=min;i<max;i++){
        s=s+i
    }
    return s;

}
//6.Write a function called productMinToMax that takes two numbers as parameters and returns the product between the two integers beginning at the num1 and excluding num2.
function productMinToMax(min, max){
    let result=1;
    let i=min;
    while(i<max){
        result=result*i;
        i++
    }
return result
}
// with for
function productMinToMax(min, max){
    let s=1;
    for(let i=min;i<max;i++){
        s=s*i
    }
    return s;
}
//7.Write a function called multiplyBy10NTimes that takes two numbers as parameters and returns the first number multiplied by 10 the amount of times indicated by the second number.
// function multiplyBy10NTimes(num, n){
//     let i=1;
//     while(i<=n){
//         num=num*10
//         i++
//     }
//     return num;
// }
// with boucle for
function multiplyBy10NTimes(num, n){
    for(let i=1;i<=n;i++){
        num=mum*10
    }
    return num;
}
//8.Write a function called countCharAtIndex that takes three parameters, a string, an index, and another string. This function should use the index to find the corresponding character in the first string and loop through the second string and count how many times that character occurs.
function countCharAtIndex(string1, index, string2){
    let count =0;
    let i=0;
    while(i<string2.length){
        if()
    }
}
//EXTENTED
//1.Write a function called reverseString that takes a string as an input and returns that string in reverse.
function reverseString(string){
    let string=""
    for(let i=string.length-1;i<=0;i--){
          string= string +string[i]
    }
    return string;
  }
  // with boucle while 
  function reverseString(string){
    let string=""
    let i=string.length-1
    while(i<=0){
        i--
    }
    return string
  }
  //2.Write a function called getIndexOf that takes two parameters, a string, and a character, and returns the first position of the character in that string.
  //with boucle for
  function getIndexOf(string, char){
    for(let i=0;i<=string.length;i++){
        if(string[i]===char){
            return i;
        }
    }
    return -1;
  }
  // with boucle while
  function getIndexOf(string, char){
    let i=0;
    while (i<=string.length){
        if(string[i]===char){
            return i++
        }
    }
    return -1
  }
  //IMMERSIVE
  //1.Write a function called sumEven that takes two numbers as parameters and returns the sum of all even numbers starting from num1 and excluding num2.
  function sumEven(number1, number2){
    if number1 %2 !==0{
        number1++
    }
    let sum=0;
    for(let i=number1;i<number2;i+=2 ){
        sum =sum+i
    }
    return i
  }
  //with boucle while
  function sumEven(number1, number2){
    if number1 (%2!==0){
        number1++ ;
    }
    let sum=0;
    while(i<number2){
        sum =sum+i
        i+=2 
    }
    return i
  }
