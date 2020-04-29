let Twitter = require('twitter');
let config = require('./config.js');

let T = new Twitter(config)

let params = {
    // q is the only required parameter for this.  -- this is the tweets that it is going to be pulling from
    q: '#coronavirus',
    count: 10, // specifying the amount of tweets I would like to return
    result_type: 'recent', 
    lang: 'en' // only english results
}

// the link below provides instructions on the request I am making. 
// https://developer.twitter.com/en/docs/tweets/search/api-reference/get-search-tweets


T.get('search/tweets', params, function(err, data, response){
    if(!err){
        for (let i = 0; i < data.statuses.length; i++){
            // looping through the 10 tweets I am retrieving, then going to grab their id
            let id = { id: data.statuses[i].id_str}
            // going to create a post route to favorite the tweet
            T.post('favorites/create', id, function(err, response){
                if (err){
                    console.log(err[0].message)
                } else {
                    let username = response.user.screen_name;
                    let tweetId = response.id_str;
                    console.log('favorited: ', `https://twitter.com/${username}/status/${tweetId}`)
                }
            })
        }
    } else {
        console.log(err)
    }
})