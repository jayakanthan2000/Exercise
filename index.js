const express = require('express')

const lineReader = require('line-reader');

const runMyCronJob = require('./core')

const compute = require('./MyWorkerThreads/compute')

const myApp = express()

const port = 5000

const fs = require('fs')
myApp.get("/", (req, res) => {
    
    runMyCronJob()
    var lines = 0
    fs.truncate('./data.txt', 0, function(){console.log('')})

    /*lineReader.eachLine('./data.txt',(line,last)=>{
        lines+=1;
    })*/
    //console.log(lines)
    return res.send('<h1>"Yeah I am working"</h1>');
})

myApp.get("/login", (req, res) => {
    //console.log('<h1> Generated values </h1>');
    fs.readFile('./data.txt',function (err,data){
        res.send(data.toString());
    })
 })


myApp.listen(port, () => {
    return console.log(`App is Listening in the Port ${port}`);
})
