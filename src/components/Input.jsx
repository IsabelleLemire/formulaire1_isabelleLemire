import React from 'react';
import BsInput from "react-bootstrap/FormControl";

const Input = ({value, onChange, id, type = "text", ...rest}) => {
    const handleChange = (event) => {
        const value = event.target.value; //va chercher la valeur de notre input
        console.log("handleChange");
        console.log("value", value, "id", id);
        onChange(value, id);
    }
  
    return (
    <BsInput 
        value={value}
        onChange={handleChange}
        type={type}
        {...rest}
    />
  )
};

export default Input;