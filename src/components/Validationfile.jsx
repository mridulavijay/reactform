import React from 'react'
import { useFormInputValidation } from "react-form-input-validation";
const Validationfile = () => {
     const [fields, errors, form] = useFormInputValidation({
      email_address: "",
      password: "",
    }, {
      email_address: "required|email",
      password: "required"
    });
  return (
    
       

    
    <div style={{maxWidth: "600px", margin: "0 auto"}}>
    
    <form
      className="myForm"
      noValidate
      autoComplete="off"
      onSubmit={form.handleSubmit}
    >
      <p>
        <label>
          Email
          <input
            type="email"
            name="email_address"
            onBlur={form.handleBlurEvent}
             onChange={form.handleChangeEvent}
            value={fields.email_address}
          />
        </label>
        <label className="error">
          {errors.email_address
            ? errors.email_address
            : ""}
        </label>
      </p>
  
      <p>
        <label>
          Password
          <input
            type="tel"
            name="password"
            onBlur={form.handleBlurEvent}
            onChange={form.handleChangeEvent}
            value={fields.password}
          />
        </label>
        <label className="error">
          {errors.password
            ? errors.password
            : ""}
        </label>
      </p>
  
      <p>
        <button type="submit">Submit</button>
      </p>
    </form>
    </div>
  )
}

export default Validationfile