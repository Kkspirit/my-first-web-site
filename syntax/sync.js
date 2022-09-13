var fs = require('fs');

// //readFileSync -> 동기 (동기적인 것은 쉽지만 리소스를 많이 사용한다.)
//
// console.log('A');
// var result = fs.readFileSync('syntax/sample.txt', 'utf-8');
// console.log(result);
// console.log('C');

//readFile -> 비동기 (비동기적인 것이 훨씬 효율적이다.)

console.log('A');
fs.readFile('syntax/sample.txt', 'utf-8', function(err, result){
    console.log(result);
});
console.log('C');
