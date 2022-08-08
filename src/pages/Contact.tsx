// src/pages/Contact.tsx

import React, {ReactElement, FC} from "react";
import {Box, Typography} from "@mui/material";

const Contact: FC<any> = (): ReactElement => {
    return (
        <Box sx={{
            flexGrow: 1,
            backgroundColor: 'primary.dark',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Typography variant="h3">Contact</Typography>
        </Box>
    );
};

export default Contact;