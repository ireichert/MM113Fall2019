console.log(tweets)
const tweet2 function() {
    //TODO: output the contents of the second tweet below the first one:

    document.querySelector('#tweet2 .message').innerHTML = tweets.statuses[1].text
    document.querySelector('#tweet2 .username').innerHTML = tweets.statuses[1].user.screen_name
    document.querySelector('#tweet2 .date').innerHTML = tweets.statuses[1].created_at

}

const tweet3 = () => {
    //TODO: output the contents of the third tweet below the second one:
    document.querySelector('#tweet1 .message').innerHTML = tweets.statuses[2].text
    document.querySelector('#tweet1 .username').innerHTML = tweets.statuses[2].user.screen_name
    document.querySelector('#tweet1 .date').innerHTML = tweets.statuses[2].created_at
}

