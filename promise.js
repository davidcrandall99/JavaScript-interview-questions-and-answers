//the following function calculates 'n'. if 'n' is 3, it will return the number. if it is not 3, it will return nothing.

let x = new Promise((resolve, reject) => {

    var n = 3; // if this number is anything other than 3, it will throw an error
    setTimeout(function(){ 

        //we use 'resolve' and reject so data can be passed
        if(n !== 3) {
            reject(`${n} is not the right number`)
        }

        resolve(n);
    }, 400)
    
});

x.then(data => {
    console.log(data)
}).catch(e=> {
    console.log(`Error: ${e}`)
})

