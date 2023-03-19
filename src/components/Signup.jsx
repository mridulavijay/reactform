import * as React from 'react'
import { useFormInputValidation } from "react-form-input-validation";
    import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
const Signup = () => {
    const [fields, errors, form] = useFormInputValidation({
        email_address: "",
        password: "",
      }, {
        email_address: "required|email",
        password: "required"
      });
  return (
   
    
   
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          onSubmit={form.handleSubmit}
        >
          <div>
            <TextField
              
              id="outlined-error"
                name='email_address'
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
              value={fields.email_address}
              helperText={errors.email_address
                ? errors.email_address
                : "" }
            />
            
        </div>
                <div>
            <TextField
            
              name='password'
              id="outlined-error-helper-text"
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
              value={fields.password}
              helperText={errors.password
                ? errors.password
                : ""}
            />
            
          </div>
         
        </Box>
      
    
  
  )
}

export default Signup