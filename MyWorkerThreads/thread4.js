const randomgen = require("./randomgen"); 

const addCoordinateData = require('../myDatabase')
const delay = (ms) => new Promise((resolve) => setTimeout(resolve,ms));
   // console.log("Thread 4 Success");
    
    var res = randomgen.random();
    addCoordinateData.addCoordinateData(res)
   // console.log("Thread 4 Success");
   //await delay(2000);
