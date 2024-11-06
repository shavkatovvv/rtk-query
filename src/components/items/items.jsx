import { Box, Button, Stack, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";
import React from "react";
import { useDeleteDataMutation } from "../../redux/users";

export const Items = ({ title, description, id }) => {
    const [deleteUser] = useDeleteDataMutation();
    const deleteItem = (id) => {
        deleteUser(id)
            .unwrap()
            .then((res) => {});
    };
    return (
        <Box
            bgcolor={"teal"}
            borderRadius={"20px"}
            padding={"30px"}
            width={"600px"}
            mb={"20px"}
        >
            <Typography color="white" variant="h3">
                {title}
            </Typography>
            <Typography color="white" mb={"15px"} variant="h4">
                {description}
            </Typography>
            <Button onClick={() => deleteItem(id)} variant="contained">
                delete
            </Button>
        </Box>
    );
};
