fs = require('fs');




var coordinateList = []
qua1 = qua2 = qua3 = qua4 = 0

// console.log(qua1);


function addCoordinateData(x) {
    //console.log(x);
    fs.appendFile('data.txt', x+"\n" , function (err) {
        if (err) return console.log(err);
        //console.log('Hello World > helloworld.txt');
      });
  
}

function printDatabase() {
    // corordinateList.push([x,y]);
    console.log(coordinateList);
}

module.exports = {addCoordinateData, printDatabase}








