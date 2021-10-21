

const fs = require('fs')
const lineReader = require('line-reader');
global.list = new Array()



function fun(){
    /*try {
    const data = fs.readFileSync('./data.txt', 'utf8')
    console.log(data)
    } catch (err) {
    console.error(err)
    }*/
    var qua1 =0 
    var qua2 =0
    var qua3 =0
    var qua4 =0

    lineReader.eachLine('./data.txt',(line,last)=>{
        list.push(line)
        x = line.split(",");


        if (x[0] >= 0 && x[1] >= 0)
            qua1 += 1
        else if (x[0] <= 0 && x[1] >= 0)
            qua2 += 1
        else if (x[0] <= 0 && x[1] <= 0)
            qua3 += 1
        else if (x[0] >= 0 && x[1] <= 0)
            qua4 += 1
        
        if(last){
            //console.log(qua1+" "+qua2+" "+qua3+" "+qua4)
            console.log(qua2+" | "+qua1)
            console.log("-------")
            console.log(qua3+" | "+qua4)

            fs.truncate('./data.txt', 0, function(){console.log('')})

        }

        ///console.log(x[0])
    })
    //console.log(qua1+" "+qua2+" "+qua3)

};


module.exports = {fun}