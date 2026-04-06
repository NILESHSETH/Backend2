
require('dotenv').config()
const express = require('express')
const app = express()
const port = 5000

const gitdata = {
  "login": "hiteshchoudhary",
  "id": 11613311,
  "node_id": "MDQ6VXNlcjExNjEzMzEx",
  "avatar_url": "https://avatars.githubusercontent.com/u/11613311?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/hiteshchoudhary",
  "html_url": "https://github.com/hiteshchoudhary",
  "followers_url": "https://api.github.com/users/hiteshchoudhary/followers",
  "following_url": "https://api.github.com/users/hiteshchoudhary/following{/other_user}",
  "gists_url": "https://api.github.com/users/hiteshchoudhary/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/hiteshchoudhary/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/hiteshchoudhary/subscriptions",
  "organizations_url": "https://api.github.com/users/hiteshchoudhary/orgs",
  "repos_url": "https://api.github.com/users/hiteshchoudhary/repos",
  "events_url": "https://api.github.com/users/hiteshchoudhary/events{/privacy}",
  "received_events_url": "https://api.github.com/users/hiteshchoudhary/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Hitesh Choudhary",
  "company": null,
  "blog": "https://hitesh.ai",
  "location": "India",
  "email": null,
  "hireable": null,
  "bio": "I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out",
  "twitter_username": "hiteshdotcom",
  "public_repos": 119,
  "public_gists": 6,
  "followers": 56184,
  "following": 0,
  "created_at": "2015-03-23T13:03:25Z",
  "updated_at": "2026-03-16T18:36:23Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// this upper for the home page..

// now if we nat to go in any other tab then we need to writre the tab  name after that..like the link functuon whaich also acts as the href but the oly difference that in link the page git refersh if any durected,,but in the href the whole page is used to get reloded means a new page is generated for that simpke purpose..
app.get('/github', (req,res) =>{
    res.json(gitdata)
})


app.get('/twitter', (req, res) => {
  res.redirect('https://hiteshchoudhary.com/') // 👈 change this
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})