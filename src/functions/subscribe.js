const axios = require("axios")

exports.handler = function(event, context, callback) {
  const {
    GATSBY_CONVERTKIT_API,
    GATSBY_CONVERTKIT_KEY,
    GATSBY_NEWSLETTER_ID,
  } = process.env

  const SUBSCRIBE_URL = `${GATSBY_CONVERTKIT_API}/${GATSBY_NEWSLETTER_ID}/subscribe`

  // Send form response
  const send = body => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(body),
    })
  }

  const addSubscriber = () => {
    axios
      .post(SUBSCRIBE_URL)
      .then(res => send(res.data))
      .catch(err => send(err))
  }

  if (event.httpMethod == "POST") {
    addSubscriber()
  }
}
