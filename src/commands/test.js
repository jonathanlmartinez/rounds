
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
 obj[ 'dog' ] = false; 

console.log(obj)
console.log(obj.bar)

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
      title: 'Buying This Week',
      color: '#2FA44F',
      text: turn,
      mrkdwn_in: ['text']
    },
    {
      title: 'On Deck:',
      color: '#E3E4E6',
      text: turn ,
      mrkdwn_in: ['text']
    },
    {
      title: 'In the hole:',
      color: '#E3E4E6',
      text: turn,
      mrkdwn_in: ['text'] 
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
