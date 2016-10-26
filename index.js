#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander');

program
  .version('0.0.1')
  .option('-t, --title [title]', 'Add title,default is 来吧 来吧 相约16 ', '来吧 来吧 相约16')
  .parse(process.argv);


const fs = require('fs');
const tpl = require('./template');
const now = require('./now')();

const title = program.title || '来吧 来吧 相约98'; //if no -t option,default title will be '来吧 来吧 相约98'

const data = tpl(title,now);
console.log(data)



fs.writeFile('message.txt', data, (err) => {
  if (err) throw err;
  console.log('File is saved!');
});




console.log(' title is - %s ', title);
