// this is nour 
// 1  Evaluate the following statements in the console and compare the results:
function opposite(boolean) {
    return !boolean
}
//2.Evaluate the following statements in the console and compare the results:
function evaluateExpressions(){
    console.log(true&&true);
    console.log(true&&false);
    console.log(false&&true);
    console.log(false&&false); 
}
evaluateExpressions();
//3.Evaluate the following statements in the console and compare the results:
function evaluateExpressions(){
    console.log(true||true);
    console.log(true||false);
    console.log(false||true);
    console.log(false||false); 
}
evaluateExpressions();
//4.Evaluate the following statements in the console and compare the results:
function oper(){
    console.log(3>4);
    console.log(4>3);
    console.log (!(4>3));
    console.log(4<=4 && 5<6);
    console.log(3 < 4 && 8 < 12 )
    console.log(3 === 3 || 4 === 4)
    console.log(3 === 2 || 4 === 4)
}
oper()
//5.Evaluate the following statements in the console and compare the results:
function bol(){
console.log (true && (true || false) )
console.log(false && (true && true) )
console.log(true || false) && (true || false) 
console.log (3 > 2 || (false && true))
console.log (4 > 5 || (2 < 3 || 3 > 5))
}
bol()
//6.Write a function called opposite that takes a boolean as parameter and returns the opposite.
function opposite(boolean) {
    
 }  
 opposite(boolean)
 //9.Write a function called largerThan5AndLessThan20 that takes a number as a parameter and returns true if it is larger than five and less than 20 and false if otherwise.
 function largerThan5AndLessThan20(number){
    if(a>5 && a<20){
        return ture
    }else{
            return false
        }
    }
//10.Write a function called not6AndLessThan10 that takes a number as a parameter and returns true if the number is not equal to 6 and less than 10 and false if otherwise.
function not6AndLessThan10(number){
    if(a>6 && a<10){
        return ture
    }else{
            return false
        }
    }
    //11.Write a function called largerThan3AndLessThan18 that takes three numbers as parameters and returns true if all 3 numbers are within the range and false if one or more are not.
    function largerThan3AndLessThan18(num1, num2, num3){
        if(a>3 && a<10){
            return ture
        }
    }
    //12.Write a function called cloudyAndRainy that takes two strings and returns true if it’s cloudy and rainy and false otherwise.
    function cloudyAndRainy(string1, string2){
        if("cloudy", "rainy"){
            return true
        }
    }
    //13.Write a function called weatherActivities that takes a type of weather (as a string) and returns an activity someone can do in that weather. Please include activities for at least four types of weather conditions.
    function weatherActivities(weather){
        switch (weather) {
            case "sunny":
                return "go to the gym";
            case "rainy":
                return"drink a hot choclate";
            case"snowy":
                return" read a book or sleep";
            case "cloudy":
                return"speek with your self in home and stay only";
            default:
                return"Check the weather and choose a suitable activity"
        }
    }
 // 14.Write a function called evenAndGreaterThan7 that takes a number as a parameter and returns true if the number is even and greater than 7 and false if otherwise.
 function evenAndGreaterThan7(number){
    if (num % 2 === 0 && num > 7) {
        return true;
      } else {
        return false;
      }
 }
 //EXTENTED
 //1.Write a function called areValidCredentials that takes name and password as a parameter and returns true if the name is longer than 3 characters, AND, the password is at least 8 characters long. Otherwise, it returns false.
 function areValidCredentials(name, password){
    if(length(name)>3 && length(password)>=8){
        return true;
    }else{
        return false ;
    }
 }
