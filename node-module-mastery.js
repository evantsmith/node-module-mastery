// Part 1

//console.log("Hello World");


// Part 2

/*
function add(){
    var sum = 0;
    for(var i = 2; i < process.argv.length; i++){
        sum += Number(process.argv[i]);
    }
    return sum;
}

console.log(add());
*/

// Part 3

/*
var fs = require('fs');


var newText = fs.readFileSync(process.argv[2],'utf8');
var arrText = newText.split("\n");


console.log(arrText.length);
*/

// Part 4

var fs = require('fs');

fs.readFile(process.argv[2],'utf8', function read(err,data) {
    if(err){
        throw err;
    }
    var arrText = data.split("\n");
    console.log(arrText.length);
});



//console.log(newText);



