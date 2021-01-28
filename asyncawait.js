//ASYNCHROUNOUS FUNCTIONS

/*

Async functions are ES6 functions that are asynchronous and return a Promise.
Within an async function, you can call 'await', so everything within that function's stack will wait until the process has completed
Because async functions return a promise, you can use the '.then()' and '.catch()' methods for synchronous events or error handling, for example.

*/


const fetch = require("node-fetch"); //using to fetch some data to demonstrate

async function myFunction() {
    //using fetch to get some data, and converting the response toa text string
    let data = await fetch("https://www.davidcrandall.com").then((res) =>
      res.text()
    );

    return data;
}

myFunction()
    //do stuff with the response
    .then((x) => { console.log(x)})
    //do stuff with the error
    .catch(e=>{ console.log('ERROR: ', e) });
