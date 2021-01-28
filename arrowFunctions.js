//ARROW FUNCTIONS
/*

Arrow functions are a ES6 syntaxual way of writing functions. They work much the same as a regular function, except in some key areas. One of the most common 'gotchas' is that arrow functions do not have access to 'this' within methods

*/

let firstObject = {
    name: 'David',
    age: '31',
    introduction: function() {
        return `Hello, my name is ${this.name}, and I am ${this.age} years old`;
    }
}
// var name = "Billy" // If we define name and age globally, the arrow functions can access them, but they cannot access 'this'
// var age = "22"

let secondObject = {
    name: 'David',
    age: '31',
    introduction: () => {
        return `Hello, my name is ${this.name}, and I am ${this.age} years old`;
    }
}

//works, because standard functions can access values of 'this'
console.log(firstObject.introduction())

// Doesn't work, because arrow functions cannot access values of 'this' 
// Instead, values will be pulled from the global scope. If they have not been defined, then they will return 'undefined'.
console.log(secondObject.introduction())
