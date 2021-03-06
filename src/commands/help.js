
'use strict'

const _ = require('lodash')
const config = require('../config')

const msgDefaults = {
  response_type: 'in_channel',
  username: 'Starbot',
  icon_emoji: config('ICON_EMOJI')
}

let attachments = [
  {
    title: 'Rounds will let us know who\'s up next to buy beer',
    color: '#2FA44F',
    text: '`/rounds buying` returns who is buying for the next 3 weeks',
    mrkdwn_in: ['text']
  },
  {
    title: 'Help',
    color: '#E3E4E6',
    text: '`/rounds help` ... you\'re lookin at it! \n',
    mrkdwn_in: ['text']
  }
]

const handler = (payload, res) => {
  let msg = _.defaults({
    channel: payload.channel_name,
    attachments: attachments
  }, msgDefaults)

  res.set('content-type', 'application/json')
  res.status(200).json(msg)
  return
}

module.exports = { pattern: /help/ig, handler: handler }
