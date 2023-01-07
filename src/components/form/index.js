import React from "react"
import styled from "styled-components"
import { form, form__label, form__input, form__button, label__wrapper } from "./form.module.css"
import { navigate } from "@reach/router"

const Form = ({ handleSubmit, handleUpdate, currentPath }) => (
  <LoginWrapper>
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
      <div className={label__wrapper}>
        <label className={form__label}>
        Nome utente
        <input
          className={form__input}
          type="text"
          name="username"
          onChange={handleUpdate}
        />
      </label>
      </div>
      <div className={label__wrapper}>
        <label className={form__label}>
        Password
        <input
          className={form__input}
          type="password"
          name="password"
          onChange={handleUpdate}
        />
      </label>
      </div>
      <input className={form__button} type="submit" value="Accedi" />
    </form>
  </LoginWrapper>
)

const LoginWrapper = styled.div`
  height: 100%;
`

export default Form
