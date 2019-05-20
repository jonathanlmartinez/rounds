
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

// let attachments = [
//   {
//     text: 'Emily'
//   },
//   {
//     text: 'Chris D.'
//   },
//   {
//     text: 'Jon M.'
//   },
//   {
//     text: 'Chris B.'
//   },
//   {
//     text: 'Lauren'
//   },
//   {
//     text: 'Tom K'
//   },
//   {
//     text: 'Ryan S'
//   },
//   {
//     text: 'Brad A'
//   },
//   {
//     text: 'Mike W.'
//   },
//   {
//     text: 'Mary S.'
//   },
//   {
//     text: 'Vlad'
//   },
//   {
//     text: 'Avi'
//   },
//   {
//     text: 'Bill H.'
//   }
// ]

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

module.exports = { pattern: /list/ig, handler: handler }


