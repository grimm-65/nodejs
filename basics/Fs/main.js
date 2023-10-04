const fs = require('fs');

const targ = fs.readFileSync('Targets.txt', 'utf8');

console.log(targ);

const r = 'facebook';

fs.writeFileSync('Targets.txt', r);

const readNewData = fs.readFileSync('Targets.txt', 'utf8');

console.log(readNewData);


fs.mkdirSync('Fs');

//To delete
// fs.rmdirSync('Fs');
