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
var url = 'https://api.github.com/users/rsp';

var bar = ['Brad A'
,'Mike W.'
,'Mary S.' 
,'Vlad '
,'Avi'
,'Bill H.'
,'Emily'
,'Chris D.'
,'Jon M.'
,'Chris B.'
,'Lauren'
,'Tom K '
,'Ryan S'
];

var turn = 0

const handler = (payload, res) => {
  let attachments = [
    {
      title: 'Brad A',
      color: '#2FA44F',
      text: bar[turn],
      mrkdwn_in: ['text']
    },
    {
      title: 'Mike W.',
      color: '#E3E4E6',
      text: bar[turn + 1],
      mrkdwn_in: ['text']
    },
    {
      title: 'Mary',
      color: '#E3E4E6',
      text: bar[turn + 2],
      mrkdwn_in: ['text']
    },
    {
      title: 'Vlad',
      color: '#E3E4E6',
      text: bar[turn + 1],
      mrkdwn_in: ['text']
    },
    {
      title: 'Avi',
      color: '#E3E4E6',
      text: bar[turn + 2],
      mrkdwn_in: ['text']
    },
    {
      title: 'Bill H.',
      color: '#2FA44F',
      text: bar[turn],
      mrkdwn_in: ['text']
    },
    {
      title: 'Emily',
      color: '#E3E4E6',
      text: bar[turn + 1],
      mrkdwn_in: ['text']
    },
    {
      title: 'Chris D.',
      color: '#E3E4E6',
      text: bar[turn + 2],
      mrkdwn_in: ['text']
    },
    {
      title: 'Jon M.',
      color: '#E3E4E6',
      text: bar[turn + 1],
      mrkdwn_in: ['text']
    },
    {
      title: 'Chris B.',
      color: '#E3E4E6',
      text: bar[turn + 2],
      mrkdwn_in: ['text']
    },
    {
      title: 'Lauren',
      color: '#E3E4E6',
      text: bar[turn + 2],
      mrkdwn_in: ['text']
    },
    {
      title: 'Tom K ',
      color: '#E3E4E6',
      text: bar[turn + 1],
      mrkdwn_in: ['text']
    },
    {
      title: 'Ryan S',
      color: '#E3E4E6',
      text: bar[turn + 2],
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

module.exports = { pattern: /list/ig, handler: handler }


