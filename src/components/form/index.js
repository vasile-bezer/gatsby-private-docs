import React from "react"
import { form, form__label, form__input, form__button } from "./form.module.css"
import { navigate } from "@reach/router"

const Form = ({ handleSubmit, handleUpdate, currentPath }) => (
  <form
    className={form}
    method="post"
    onSubmit={event => {
      handleSubmit(event)
      /* currentPath takes current value if not falsey else /*/
      currentPath = currentPath ?? `/`
      navigate(currentPath)
    }}
  >
    <p>
      For this demo, please log in with the username <code>gatsby</code> and the
      password <code>demo</code>.
    </p>
    <label className={form__label}>
      Username
      <input
        className={form__input}
        type="text"
        name="username"
        onChange={handleUpdate}
      />
    </label>
    <label className={form__label}>
      Password
      <input
        className={form__input}
        type="password"
        name="password"
        onChange={handleUpdate}
      />
    </label>
    <input className={form__button} type="submit" value="Log In" />
  </form>
)

export default Form
