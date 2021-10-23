let max = 61;
let min = -61;


function random(){
    var x =Math.floor(Math.random() * (max - min) + min);
    var y= Math.floor(Math.random() * (max - min) + min);
    return ([x,y]);
}

module.exports= {random};