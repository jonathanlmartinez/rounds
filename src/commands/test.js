
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

var const = [
    {name: 'jon', current: false},
    {name: 'mike', current: false},
    {name: 'ryan', current: false},
    {name: 'avi', current: true},
    {name: 'hyke', current: false},
    {name: 'bartman', current: false},
    {name: 'mary', current: false},
    {name: 'lauren', current: false},
    {name: 'chris', current: false}
]

function Switch() {
  var current = list.find(item => item.current === true);
  var currentIndex = list.indexOf(current);
  list[currentIndex].current = false;
  var next = currentIndex + 1;
  list[next].current = true;
  list = list;
};

Switch();
var x = list.find(item => item.current === true);
const handler = (payload, res) => {
  
  let attachments = [
    {
      title: 'Buying This Week',
      color: '#E3E4E6',
      text: x.name,
      mrkdwn_in: ['text']
    },
    {
      title: 'On Deck:',
      color: '#E3E4E6',
      text: "efsa" ,
      mrkdwn_in: ['text']
    },
    {
      title: 'In the hole:',
      color: '#E3E4E6',
      text: "turn",
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
