// import express from "express"
const express = require('express')


// import runService from './core'
const lineReader = require('line-reader');


const runMyCronJob = require('./core')

//const printDatabase = require('./myDatabase')

const compute = require('./MyWorkerThreads/compute')


// import sendNotification from "./FirebaseCloudMessaging/fcm.js"


const myApp = express()



// import * as fcmJs from "./FirebaseCloudMessaging/fcm.js"



const port = 3000

myApp.get("/", (req, res) => {
    // sendNotification()
    runMyCronJob()
    var lines = 0
    /*lineReader.eachLine('./data.txt',(line,last)=>{
        lines+=1;
    })*/
    //console.log(lines)
    return res.send("Yeah I am working");
})

//myApp.get("/login", (req, res) => {
  //  console.log("DB Values");
    //printDatabase.printDatabase()
    //return res.send("You are at Login Route");
// })


myApp.listen(port, () => {
    return console.log(`App is Listening in the Port ${port}`);
})
