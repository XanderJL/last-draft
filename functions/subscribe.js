require("dotenv").config()
const axios = require("axios")

exports.handler = function(event, context, callback) {
  // const { GATSBY_CONVERTKIT_KEY, GATSBY_NEWSLETTER_ID } = process.env
  const GATSBY_CONVERTKIT_KEY = "gnVcOhRtU3gzdp9bGGaTwQ"
  const GATSBY_NEWSLETTER_ID = "1302311"
  const API_URL = "https://api.convertkit.com/v3/forms"

  const FORMS_URL = `/${API_URL}?api_key=${GATSBY_CONVERTKIT_KEY}`
  const SUBSCRIBE_URL = `${API_URL}/${GATSBY_NEWSLETTER_ID}/subscribe`

  // Send form response
  const send = body => {
    callback(null, {
      statusCode: 200,
      headers: {
        "Content-Type: application/json; charset=utf-8"
      },
      body: JSON.stringify(body),
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
      .post(SUBSCRIBE_URL)
      .then(res => send(res.data))
      .catch(err => JSON.stringify(send(err), null, 2))
  }

  if (event.httpMethod == "POST") {
    addSubscriber()
  }
}
