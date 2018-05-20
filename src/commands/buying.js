
// 'use strict'

// const _ = require('lodash')
// const config = require('../config')
// const trending = require('github-trending')


// const msgDefaults = {
//   response_type: 'in_channel',
//   username: 'Rounds',
//   icon_emoji: config('ICON_EMOJI')
// }


// const handler = (payload, res) => {
//   trending('javascript', (err, repos) => {
//     if (err) throw err

//     var attachments = repos.slice(0, 5).map((repo) => {
//       return {
//         title: `${repo.owner}/${repo.title} `,
//         title_link: repo.url,
//         text: `_${repo.description}_\n${repo.language} • ${repo.star}>`,
//         mrkdwn_in: ['text', 'pretext']
//       }
//     })

//     let msg = _.defaults({
//       channel: payload.channel_name,
//       attachments: attachments
//     }, msgDefaults)

//     res.set('content-type', 'application/json')
//     res.status(200).json(msg)
//     return
//   })
// }

// module.exports = { pattern: /repos/ig, handler: handler }

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
    title: 'Buying This Week',
    color: '#2FA44F',
    text: 'Someone',
    mrkdwn_in: ['text']
  },
  {
    title: 'On Deck:',
    color: '#E3E4E6',
    text: 'Somebody',
    mrkdwn_in: ['text']
  },
  {
    title: 'In the hole:',
    color: '#E3E4E6',
    text: 'NoBody',
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

module.exports = { pattern: /buying/ig, handler: handler }