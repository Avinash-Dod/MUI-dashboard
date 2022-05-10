
import { TextField } from "@mui/material"

const Input = (props) => {

    const { label, name, onChange, placeholder,helperText } = props
    return (
        <TextField
            variant="outlined"
            name={name}
            onChange={onChange}
            label={label}
            placeholder={placeholder}
            required
            helperText={helperText}
            
            >

        </TextField>

    )
}
export default Input