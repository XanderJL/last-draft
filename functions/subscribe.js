const axios = require("axios")
require("dotenv").config()

exports.handler = function(event, context, callback) {
  const {
    GATSBY_CONVERTKIT_SECRET,
    GATSBY_CONVERTKIT_KEY,
    GATSBY_NEWSLETTER_ID,
  } = process.env
  const API_URL = "https://api.convertkit.com/v3/forms/"

  const FORMS_URL = `${API_URL}?api_key=${GATSBY_CONVERTKIT_KEY}`
  const SUBSCRIBE_URL = `${API_URL}/${GATSBY_NEWSLETTER_ID}/subscribe`

  // Send form response
  const send = body => {
    callback(null, {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      },
      body: JSON.stringify(body, null, 2),
    })
  }

  // Get list of forms
  const getForms = () => {
    axios
      .get(FORMS_URL)
      .then(res => send(res.data))
      .catch(err => send(err))
  }

  // Make sure method is GET
  if (event.httpMethod == "GET") {
    getForms()
  }

  const addSubscriber = () => {
    axios
      .post(SUBSCRIBE_URL, {
        api_key: GATSBY_CONVERTKIT_KEY,
        first_name: body.first_name,
        email: body.email,
      })
      .then(res => send(res.data))
      .catch(err => send(err))
  }

  if (event.httpMethod == "POST") {
    addSubscriber()
  }
}
