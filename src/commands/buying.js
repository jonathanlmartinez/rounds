
'use strict';

const _ = require('lodash')
const config = require('../config')

// const trending = require('github-trending')

// const request = require('./request.js');
// const endpoint = 'https://slack.com/api/channels.list?token=xoxp-2374481554-73987843683-366871886050-e77447a4ff23496bad74ff02e5206003&pretty=1'

const msgDefaults = {
  response_type: 'in_channel',
  username: 'Rounds',
  icon_emoji: config('ICON_EMOJI')
}

// function members () {
  
//   request(endpoint);
// }

const handler = (payload, res) => {
  // request(endpoint)

  // members((err, members) => {
  //   if (err) throw err

    // var attachments = repos.slice(0, 5).map((repo) => {
    //   return {
    //     title: `${repo.owner}/${repo.title} `,
    //     title_link: repo.url,
    //     text: `_${repo.description}_\n${repo.language} • ${repo.star}>`,
    //     mrkdwn_in: ['text', 'pretext']
    //   }
    // })

    let msg = _.defaults({
      channel: 'test',
    }, msgDefaults)

    res.set('content-type', 'application/json')
    res.status(200).json(msg)
    return
  // })
}

module.exports = { pattern: /buying/ig, handler: handler }
