//ESSENTIAL
//1.Fix the syntax & style issues with the three objects below:
self={firstName:"Yan",lastName:"Fan",animal:"dog",noise:"bark",age:3,type:"Golden Retriever",color:"pink"}
//2. Create an object that represents you. It should contain your first name, last name, age and hometown. Assign it to a variable called person
Person={FirstName:"Nour",LastName:"Taamalli",age:"19",hometown:NewMadina}
//3.Access the favorite food property in the object using dot notation, and reassign it to a different food
Food={
MyFood:["Roast Meat"],
AnotherFood:["salade","pizza"]
}
//4.Change your object to have a single name key, the value of which is an object – this object should have first, last and middle keys containing your first, last, and middle names respectively.
 Object = {
    name: {
      first: "Nour",
      last: "Taamalli",
      middle: "Houda"
    }
  }
  //5.Write a function called emptyObject that takes no parameters and returns an empty objec
  function emptyObject(){
    object={}
    return object ;
  }
  //6.Write a function called addProperty that takes two parameters, an object, and a key as a string. It then adds the key as a property in the object and gives it the value true.
  function addProperty(object, key){
    object[key]=true;
  }
  let myObject ={};
  addProperty(MyObject,"newKey")




