console.log(`Let's see what we get!`);

const Twit = require('twit');
const config = require('./config.js');
const say = require('say');

const T = new Twit(config);

const params = {
  q: 'AOC',
  count: 1,
};

T.get('search/tweets', params, gotData);


function gotData(err, data, response) {
  const texts = data.statuses;
  for (let i = 0; i < texts.length; i++) {
    console.log(texts[i].text);
    say.speak(texts[i].text);
  }
}
