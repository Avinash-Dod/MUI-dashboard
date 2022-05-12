import { Box, Button, FormLabel, Stack, Typography } from "@mui/material"

import Input from "../UI/input"

const RegisterForm = () => {


    return (
        <Box flexGrow={1} textAlign="center">
            {/* <Typography variant="h5" component="span" color="primary">
                        Register Vendor
                    </Typography> */}
            <FormLabel>Full Name</FormLabel>
            <Input
                name="Full name"
                value=" "
                label="Full Name Required"
                placeholder="Enter Your Full Name"
                helperText="Please enter correct name"
            />

            <FormLabel>Shop Name</FormLabel>
            <Input

                label="Required Shop Name"
                name="Shop Name"

                placeholder="Enter Your Shop Name"
            >
            </Input>
            <FormLabel>Address</FormLabel>
            <Input
                label="Required Address"
                required
                placeholder="Enter Your Address"
            >
            </Input>
            <FormLabel>Mobile No.</FormLabel>
            <Input
                label="Required Mobile No."
                required
                placeholder="Enter Your Shop Name"
            >
            </Input>
            <Button variant="contained" aria-label="Add Business" >Submit</Button>

        </Box>



    )
}
export default RegisterForm