//-----sort()----
//converts elements into strings and sorts them lexicographically (dictionary order)

let numbers = [1,2,10,9,3,8,7,6,5,4];

let people = [{name: "songebob",age: 13, gpa: 3.2},
              {name: "professor",age: 43, gpa: 2.2},
              {name: "VIP",age: 45, gpa: 3.8},
              {name: "oh-il-nam",age: 79, gpa: 3.9}]

//this will give in ascending order

numbers.sort((a,b) => a - b);

//to sort people we will use .localeCompare method

people.sort((a,b) => a.gpa - (b.gpa))

console.log(people[1].gpa)

console.log(numbers)
