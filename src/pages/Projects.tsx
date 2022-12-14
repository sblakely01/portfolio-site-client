// src/pages/Projects.tsx

import React, {ReactElement, FC} from "react";
import {Box, Typography} from "@mui/material";

const Projects: FC<any> = (): ReactElement => {
    return (
        <Box sx={{
            flexGrow: 1,
            backgroundColor: 'primary.dark',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Typography variant="h3">Projects</Typography>
        </Box>
    );
};

export default Projects;