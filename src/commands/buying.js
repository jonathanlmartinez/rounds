
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

var text = '{ "members" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';


const handler = (payload, res) => {

 
  let attachments = [
    {
      title: 'Buying This Week',
      color: '#2FA44F',
      text: text,
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
  let msg = _.defaults({
    channel: payload.channel_name,
    attachments: attachments
  }, msgDefaults)
  
  

  res.set('content-type', 'application/json')
  res.status(200).json(msg)
  return
}

module.exports = { pattern: /buying/ig, handler: handler }


// 'use strict';
// var request = require('request');

// var url = 'https://api.github.com/users/rsp';

// request.get({
//     url: url,
//     json: true,
//     headers: {'User-Agent': 'request'}
//   }, (err, res, data) => {
//     if (err) {
//       console.log('Error:', err);
//     } else if (res.statusCode !== 200) {
//       console.log('Status:', res.statusCode);
//     } else {
//       // data is already parsed as JSON:
//       console.log(data.html_url);
//     }
// });




// request.get({
//     url: url,
//     json: true,
//     headers: {'User-Agent': 'request'}
//   }, (err, res, data) => {
//     if (err) {
//       console.log('Error:', err);
//     } else if (res.statusCode !== 200) {
//       console.log('Status:', res.statusCode);
//     } else {
//       // data is already parsed as JSON:
//       console.log(data.html_url);
//     }
// });

// ===================
// 'use strict'

// const _ = require('lodash')
// const config = require('../config')
// const trending = require('github-trending')

// const msgDefaults = {
//   response_type: 'in_channel',
//   username: 'Starbot',
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




// 'use strict'

// const _ = require('lodash')
// const config = require('../config')

// const msgDefaults = {
//   response_type: 'in_channel',
//   username: 'Rounds',
//   icon_emoji: config('ICON_EMOJI')
// }

// var request = require('request');
// var url = 'https://api.github.com/users/rsp';

// function getData() {

//   request.get({

//     url: url,
//     json: true,
//     headers: {'User-Agent': 'request'}
//   }, (err, res, data) => {
//     if (err) {
//       return 'Error:' + err;
//     } else if (res.statusCode !== 200) {
//       return 'Status:' + res.statusCode;
//     } else {
//       // data is already parsed as JSON:
//       return "YES";
//     }
//   });
// }


// var theData = getData()
// var attachments = [
//   {
//     title: 'Buying This Week',
//     color: '#2FA44F',
//     text: theData,
//     mrkdwn_in: ['text']
//   },
//   {
//     title: 'On Deck:',
//     color: '#E3E4E6',
//     text: 'Somebody',
//     mrkdwn_in: ['text']
//   },
//   {
//     title: 'In the hole:',
//     color: '#E3E4E6',
//     text: 'NoBody',
//     mrkdwn_in: ['text']
//   }
// ]

// const handler = (payload, res) => {
//   let msg = _.defaults({
//     channel: payload.channel_name,
//     attachments: attachments
//   }, msgDefaults)

//   res.set('content-type', 'application/json')
//   res.status(200).json(msg)
//   return
// }

// module.exports = { pattern: /buying/ig, handler: handler }