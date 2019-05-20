
'use strict'

const _ = require('lodash')
const config = require('../config')
const https = require('https');

const msgDefaults = {
  response_type: 'in_channel',
  username: 'Starbot',
  icon_emoji: config('ICON_EMOJI')
}
var mandatory = require('mandatory');
var VError = require('verror');
var request = require('request');

 var obj = {}; 
 obj[ 'bar' ] = true;       
 obj[ 'foo' ] = false; 

console.log(obj)
console.log(obj.bar)
console.log(obj[0])
var turn = 0
// function checkDate() {
//     var date = new Date();
//     console.log(date.getDay());
//     console.log(date.getHours());
//     if(date.getDay() === 6 && date.getHours() === 17) {
//         console.log("HELLO WORLD!");
//     }
// }

// var dateLoop = setInterval(function() {
//     checkDate();
// },5000);















const handler = (payload, res) => {
  let attachments = [
    {
      text: 'Emily'
    },
    {
      text: 'Chris D.'
    },
    {
      text: 'Jon M.'
    },
    {
      text: 'Chris B.'
    },
    {
      text: 'Lauren'
    },
    {
      text: 'Tom K'
    },
    {
      text: 'Ryan S'
    },
    {
      text: 'Brad A'
    },
    {
      text: 'Mike W.'
    },
    {
      text: 'Mary S.'
    },
    {
      text: 'Vlad'
    },
    {
      text: 'Avi'
    },
    {
      text: 'Bill H.'
    }
  ]
  
  let msg = _.defaults({
    channel: payload.channel_name,
    attachments: attachments
  }, msgDefaults)
  
  

  res.set('content-type', 'application/json')
  res.status(200).json(msg)
  return
}

module.exports = { pattern: /test/ig, handler: handler }
