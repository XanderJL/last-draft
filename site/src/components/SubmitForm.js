/** @jsx jsx */
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { theme, Box } from "@chakra-ui/core"
import { css, jsx } from "@emotion/core"
import Modal from "./Modal"

const formStyles = css`
  max-width: 900px;
  margin: 0 auto;

  input,
  textarea {
    border-radius: 0;
    border-color: ${theme.colors.black};
  }
`

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const SubmitForm = () => {
  const { register, handleSubmit, errors, reset } = useForm()
  const [modal, setModal] = useState(false)

  const onSubmit = (data, e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "submission", data }),
    })
      .then(() => {
        alert("Success!")
        setModal(!modal)
        reset()
      })
      .catch(error => alert(error))

    e.preventDefault()
  }

  const re = /\S+@\S+\.\S+/

  return (
    <>
      <form
        name="submission"
        data-netlify="true"
        css={formStyles}
        onSubmit={handleSubmit(onSubmit)}
      >
        <input type="hidden" name="form-name" value="submission" />
        <Box d="flex" flexDirection={["column", "column", "row"]}>
          <div
            css={css`
              flex: 1;
              @media (min-width: ${theme.breakpoints[1]}) {
                margin-right: 12px;
              }
            `}
            className="field"
          >
            <label className="label is-montserrat is-uppercase">
              First Name <span className="has-text-danger">*</span>
            </label>
            <div className="control is-extended">
              <input
                name="firstName"
                ref={register({ required: true })}
                type="text"
                className="input"
              />
              {errors.firstName && (
                <span className="has-text-danger">
                  Your first name is required.
                </span>
              )}
            </div>
          </div>
          <div
            css={css`
              flex: 1;
              margin-bottom: 12px;
            `}
            className="field"
          >
            <label className="label is-montserrat is-uppercase">
              Last Name
            </label>
            <div className="control is-extended">
              <input
                name="lastName"
                ref={register}
                type="text"
                className="input"
              />
            </div>
          </div>
        </Box>
        <div className="field">
          <label className="label is-montserrat is-uppercase">
            Email <span className="has-text-danger">*</span>
          </label>
          <div className="control">
            <input
              name="email"
              ref={register({ required: true, pattern: re })}
              type="email"
              className="input"
            />
            {errors.email?.type === "required" && (
              <span className="has-text-danger">Your email is required.</span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="has-text-danger">
                Please enter a valid email address.
              </span>
            )}
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label className="label is-montserrat is-uppercase">
              Message <span className="has-text-danger">*</span>
            </label>
            <textarea
              name="message"
              ref={register({ required: true, minLength: 2 })}
              rows="10"
              className="textarea"
            />
            {errors.message?.type === "required" && (
              <span className="has-text-danger">
                Your message cannot be left blank.
              </span>
            )}
            {errors.message?.type === "minLength" && (
              <span className="has-text-danger">
                Your message must be longer than two characters.
              </span>
            )}
          </div>
        </div>
        <div className="control">
          <input type="submit" className="button" />
        </div>
      </form>
      {modal && (
        <Modal
          header="Thank You for Your Submission!"
          body="We'll get back to you as soon as we can."
        />
      )}
    </>
  )
}

export default SubmitForm
