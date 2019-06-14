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

var bar = ['Vlad'
,'Avi'
,'Bill'
,'Emily'
,'Chris D.'
,'Jon'
,'Chris B.'
,'Lauren'
,'Tom K '
,'Ryan'
,'Bartman'
,'Hayk'
,'Mary'
,'Mike'
,'Allen'
];

var turn = 0

const handler = (payload, res) => {
  let attachments = [
    {
      title: 'Hayk',
      color: '#008baa',
      text: '',
      mrkdwn_in: ['text']
    },
    {
      title: 'Bartman',
      color: '#008baa',
      text: '',
      mrkdwn_in: ['text']
    },
    {
      title: 'Mike',
      color: '#008baa',
      text: '',
      mrkdwn_in: ['text']
    },
    {
      title: 'Allen',
      color: '#008baa',
      text: '',
      mrkdwn_in: ['text']
    },
    {
      title: 'Mary',
      color: '#008baa',
      text: '',
      mrkdwn_in: ['text']
    },
    {
      title: 'Vlad',
      color: '#008baa',
      text: '',
      mrkdwn_in: ['text']
    },
    {
      title: 'Avi',
      color: '#008baa',
      text: '',
      mrkdwn_in: ['text']
    },
    {
      title: 'Bill',
      color: '#008baa',
      text: '',
      mrkdwn_in: ['text']
    },
    {
      title: 'Emily',
      color: '#008baa',
      text: '',
      mrkdwn_in: ['text']
    },
    {
      title: 'Chris D.',
      color: '#008baa',
      text: '',
      mrkdwn_in: ['text']
    },
    {
      title: 'Jon',
      color: '#008baa',
      text: '',
      mrkdwn_in: ['text']
    },
    {
      title: 'Chris B.',
      color: '#008baa',
      text: '',
      mrkdwn_in: ['text']
    },
    {
      title: 'Lauren',
      color: '#008baa',
      text: '',
      mrkdwn_in: ['text']
    },
    {
      title: 'Tom',
      color: '#008baa',
      text: '',
      mrkdwn_in: ['text']
    },
    {
      title: 'Ryan',
      color: '#008baa',
      text: '',
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


