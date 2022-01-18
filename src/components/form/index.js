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
      Per questa demo, accedere con il nome utente <code>gatsby</code> e la
      password <code>demo</code>.
    </p>
    <label className={form__label}>
      Nome utente
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
    <input className={form__button} type="submit" value="Accedi" />
  </form>
)

export default Form
