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

    } else {
        console.log(err)
    }
})