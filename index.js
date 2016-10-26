#!/usr/bin/env node

/**
 * Module dependencies.
 */

 function categories(val) {
   return val.split(',');
 }


var program = require('commander');

program
  .version('0.0.1')
  .option('-t, --title [title]', 'Add title,default is 来吧 来吧 相约16 ', '来吧 来吧 相约16')
  .option('-c, --categories <categories>', 'Add categories,add , to multiple words,no space', categories )
  .parse(process.argv);


const fs = require('fs');
const tpl = require('./template');
const now = require('./now')();




const title = program.title || '来吧 来吧 相约98'; //if no -t option,default title will be '来吧 来吧 相约98'




const cat = program.categories?program.categories.join(' '):'test';

const data = tpl(title,now,cat);
console.log(data)



fs.writeFile('message.txt', data, (err) => {
  if (err) throw err;
  console.log('File is saved!');
});




console.log(' title is - %s ', title);
