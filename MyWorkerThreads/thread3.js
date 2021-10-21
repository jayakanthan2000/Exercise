const randomgen = require("./randomgen"); 

const addCoordinateData = require('../myDatabase')
const delay = (ms) => new Promise((resolve) => setTimeout(resolve,ms));
    //console.log("Thread 3 Success");
    
    var res = randomgen.random();
    addCoordinateData.addCoordinateData(res)
    //console.log("Thread 3 Success");
    //await delay(2000); 

