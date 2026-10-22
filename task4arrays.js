
/*// 1. Create an array of 5 fruits. Add 3 fruits at the end using push() and print the array.

 let fruits=["apple","orange","mango","banana","lemon"];
 fruits.push("kiwi","strawbery","pineapple");
 console.log(fruits);
 


// 2. Create an array of 6 numbers. Remove the last element using pop() and print the result.

let num=[1,2,3,4,5]
num.pop(num.length1-1)
console.log(num);



// 3. Create an array of 5 names. Remove the first element using shift() and print the array.

let name=["aaa","bbb","ccc","ddd","eee"];
name.shift();
console.log(name);




// 4. Create an array of 4 numbers. Add two numbers at the beginning using unshift().

let arr1=[5,7,9,11];
arr1.unshift(1,3);
console.log(arr1);


// 5. Given let arr = [10, 20, 30, 40, 50], remove 2 elements starting from index 1 using splice().

let arr2 = [10, 20, 30, 40, 50];
arr2.splice(0,2)
console.log(arr2);

// 6. Given let arr = [1, 2, 3, 4, 5], replace the value 3 with 100 using splice().

  let arr3=[1,2,3,4,5];
  arr3.splice(2,1,100);
  console.log(arr3);
  

// 7. Create an array of 5 numbers and use fill() to replace the elements from index 2 to index 4 with "hello".


let arr4=[1,2,3,4,5];
arr4.fill("hello",2,5);
console.log(arr4);


// 8. Create two arrays of numbers and combine them using concat().

   let arr5=[1,2,3]
   let arr6=[4,5,6]
   let arr7=arr5.concat(arr6);
   console.log(arr7);
   

// 9. Given let arr = [10, 20, 30, 40, 50, 60], extract elements from index 1 to index 4 using slice().


let arr8=[10,20,30,40,50]
let arr9=arr8.slice(1,5)
console.log(arr9);





// 10. Create a nested array and convert it into a single-level array using flat(Infinity).

let nestedarr=[1,2,[3,4],5,6,[7]];
let flatarr=nestedarr.flat(Infinity);
console.log(flatarr);


// 11. Given let arr = [10, 20, 30, 40, 50], check whether the value 30 exists using includes().

let arr10 = [10, 20, 30, 40, 50];
console.log( arr10.includes(30));





// 12. Given let arr = [5, 10, 15, 20, 25], find the index of 20 using indexOf().

let arr11=[5, 10, 15, 20, 25];
console.log(arr11.indexOf(20));


// 13. Given let arr = [1, 2, 3, 2, 1, 2], find the last index of 2 using lastIndexOf().

let arr12 = [1, 2, 3, 2, 1, 2];
console.log(arr12.lastIndexOf(2));


// 14. Create an array of numbers and arrange its elements using sort().

let arr13=[5,4,3,2,1]
console.log(arr13.sort());

// 15. Create an array of 7 numbers and reverse the order using reverse().

let arr14=[7,6,5,4,3,2,1];
console.log(arr14.reverse());



// Part 3: Spread and Rest Operators
// 16. Create two arrays containing 4 numbers each. Merge them into one array using the spread operator.

 let arr15=[1,2,3,4]
 let arr16=[5,6,7,8,]
 let arr17=[...arr15,...arr16];
 console.log(arr17);
 

// 17. Create two objects: one containing student details and another containing job details. Merge both objects using the spread operator.

let obj1=
{
    name:"venkat",
    age:23,
    place:"salem"
}
let obj2=
{
    role:"developer",
    package:2,
    companylocation:"banglore"
    
}

let obj3={...obj1,...obj2}
console.log(obj3);


// 18. Create a function that accepts two parameters and uses the rest operator to collect all remaining arguments into an array.

function add(a,b,...c)
{
  console.log(a);
  console.log(b);
  console.log(c);
  
  
  
}
add(10,20,30,40,50);



// 19. Write a function using function one(a, b, ...c) that prints the sum of a, b, c[0], and c[1].
 function sum(a,b,...c) {


    console.log(a+b+c[0]+c[1]);
    
 }

 sum(1,2,3,4,5)

// 20. Create two arrays and use the spread operator to copy all elements from the first array into a new array.

let arr19=[10,20,30,40]
let arr20=[50,60,70,80]
let arr21=[...arr19,...arr20]
console.log(arr21);



// 21. Given let arr = [10, 20, 30, 40], extract all four values into separate variables using array destructuring.

 let arr22=[10, 20, 30, 40];
 let [a,b,c,d]=arr22;
 console.log(a);
 console.log(b);
  console.log(c);
   console.log(d);
 

 

// 22. Given let nested = [1, 2, [3, 4, [5, 6]]], extract the values 1, 2, 3, 4, 5, and 6 using nested destructuring.


   let nested= [1, 2, [3, 4, [5, 6]]]

     let [a1,b1,c1,d1,e1,f1,]=nested;

     console.log(nested);
     
// 23. Create an array containing a student's name, age, and CGPA. Extract these values using destructuring and print them.

let arr23=[ "venkat",23,8]
let[namee,age,cgpa]=arr23

console.log(arr23);    */


// Part 5: Object Destructuring
// 24. Create an object containing name, role, and location. Extract these properties using object destructuring.


let demo=
{
    name3:"raman",
    role:"AWS Developer",
    location1:"Hyderabad",
}
let {name3,role,location1}=demo;
console.log(demo);


// 25. Create an object containing a student's name and a nested address object with city and state.
//  Extract the city and state using nested object destructuring.

let demo1=
{
    sname:"gugan",


}

let demo2=
{
    city:"salem",
   studentstate:"tamilnadu"
}

let{city,studentstate}=demo2;
console.log(city,studentstate);


// 26. Given an object with name, role, and location: { mainLocation, currentLocation }, print all four values using destructuring.

let user=
{ uname:"babu",
    urole:"Devops engineer",
    location:
    {
        mainlocation:"chennai",
        currentlocation:"salem"
    }
 
}

let{ uname,urole,mainlocation,currentlocation}=user
console.log(user);


// Part 6: Mixed Practical Challenges
// 27. Create an array of 10 numbers. Remove the first and last elements, add two new numbers at the beginning, and print the final array.

let a=[1,2,3,4,5,6,7,8,9,10];
console.log(a);

a.pop();// to remove last value
console.log(a);
a.shift() //to remove first value
console.log(a);

a.unshift(10,20); //to add values in the first
console.log(a);




// 28. Create an array containing duplicate numbers. Use includes(), indexOf(), and lastIndexOf() to check and print information about one selected number.

     let arry30=[1,3,3,4,4,5,6];
     console.log(arry30.includes(3));// to check the number is present or not
     console.log(arry30.indexOf(3));  //to check the index of the given  number
     console.log(arry30.lastIndexOf(4));  // to check the last index of thr given  number
     
     
     

// 29. Create two objects containing employee information. Merge them using the spread operator, then destructure and print the employee's name and role.

let test1=
{
     employeename:"sharath",
     employeerole:"developer",
     employeesalary:"7 LPA"
}

let test2=
{
     employeename2:"Barath",
     employeerole2:" Front end developer",
     employeesalary2:"5 LPA"
}

let test3=
{
    ...test1,...test2
}

let{employeename,employeename2,employeerole,employeerole2}=test3;
console.log(employeename, employeerole);
console.log(employeename2,employeerole2);
  


// 30. Create a nested array containing numbers. Flatten it using flat(Infinity), reverse the resulting array, and print the final result.


let lastarr=[1,2,[3,4],5,6,[7]];
let res=lastarr.flat(Infinity);
console.log(res);
console.log(res.reverse());



