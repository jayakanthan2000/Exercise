const { Worker } = require('worker_threads')
const compute = require('./MyWorkerThreads/compute')
 

function runService1(workerData) {
   // console.log("Running Service");
    return new Promise((resolve, reject) => {
        const worker = new Worker('./MyworkerThreads/thread1.js', {workerData});
        worker.on('message', (value) => {
            // console.log("Got a Message");
        });
        worker.on('error', (value) => {
            // console.log("Got a Error");
        });
        worker.on('exit', (value) => {
            // console.log("Got a Exit Action");
        });
    })
}

function runService2(workerData) {
    //  console.log("Running Service");
     return new Promise((resolve, reject) => {
         const worker = new Worker('./MyworkerThreads/thread2.js', {workerData});
         worker.on('message', (value) => {
             // console.log("Got a Message");
         });
         worker.on('error', (value) => {
             // console.log("Got a Error");
         });
         worker.on('exit', (value) => {
             // console.log("Got a Exit Action");
         });
     })
 }
 
 
 function runService3(workerData) {
    //  console.log("Running Service");
     return new Promise((resolve, reject) => {
         const worker = new Worker('./MyworkerThreads/thread3.js', {workerData});
         worker.on('message', (value) => {
             // console.log("Got a Message");
         });
         worker.on('error', (value) => {
             // console.log("Got a Error");
         });
         worker.on('exit', (value) => {
             // console.log("Got a Exit Action");
         });
     })
 }
 
 
 function runService4(workerData) {
    //  console.log("Running Service");
     return new Promise((resolve, reject) => {
         const worker = new Worker('./MyworkerThreads/thread4.js', {workerData});
         worker.on('message', (value) => {
             // console.log("Got a Message");
         });
         worker.on('error', (value) => {
             // console.log("Got a Error");
         });
         worker.on('exit', (value) => {
             // console.log("Got a Exit Action");
         });
     })
 }




const delay = (ms) => new Promise((resolve) => setTimeout(resolve,ms));


async function runMyCronJob() {
    setInterval(() => runService1(), 30000)
    setInterval(() => runService2(), 30000)
    setInterval(() => runService3(), 60000)
    setInterval(() => runService4(), 60000)
    setInterval(() => compute.fun(), 300500)


    
    }





module.exports = runMyCronJob

