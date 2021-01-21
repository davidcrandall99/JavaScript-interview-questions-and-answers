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
