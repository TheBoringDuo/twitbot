console.log("yay. its starting.");
var Twit = require('twit');
var T = new Twit({
//config
  consumer_key:         '',
  consumer_secret:      '',
  access_token:         '',
  access_token_secret:  '',
  timeout_ms:           60*1000,

})

// You can choose what option to call

// You need to config everything before using.
// Not created to use that way
// You need to write the other things yourself.

tweetIt();
function tweetIt(){

    var tweet = {
      status: 'Test'
    }

    T.post('statuses/update', tweet, tweeted)

    function tweeted(err, data, response){
      if(err){
        console.log("MISTAKE");
      }
      else{
        console.log("IT WORKED!");
      }
    }
}

function postrandom(){

    var r = Math.floor(Math.random()*100);
    var tweet = {
      status: 'just a random number ' + r + ' #test'
    }

    T.post('statuses/update', tweet, tweeted)

    function tweeted(err, data, response){
      if(err){
        console.log("MISTAKE");
      }
      else{
        console.log("IT WORKED!");
      }
    }
}
