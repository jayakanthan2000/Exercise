// import express from "express"
const express = require('express')
// import runService from './core'
const lineReader = require('line-reader');
const runMyCronJob = require('./core')
const compute = require('./MyWorkerThreads/compute')
const myApp = express()
const port = 5000
myApp.get("/", (req, res) => {
    runMyCronJob()
    var lines = 0
    /*lineReader.eachLine('./data.txt',(line,last)=>{
        lines+=1;
    })*/
    //console.log(lines)
    return res.send("Yeah I am working");
})
myApp.listen(port, () => {
    return console.log(`App is Listening in the Port ${port}`);
})
