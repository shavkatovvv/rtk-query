import { Button, Stack, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { usePostDataMutation } from "../../redux/users";

export const Form = () => {
    const { handleSubmit, register, reset } = useForm();
    const [userMutation] = usePostDataMutation();

    const submit = (data) => {
        userMutation(data)
            .unwrap()
            .then((res) => {});

        reset();
    };
    return (
        <Stack direction={"row"} justifyContent={"center"}>
            <form onSubmit={handleSubmit(submit)}>
                <Stack gap={"20px"} mb={"40px"}>
                    <TextField
                        sx={{ width: "500px" }}
                        placeholder="Title"
                        {...register("title")}
                    />
                    <TextField
                        sx={{ width: "500px" }}
                        placeholder="Description"
                        {...register("description")}
                    />
                    <Button
                        sx={{ width: "500px" }}
                        type="submit"
                        variant="contained"
                    >
                        send
                    </Button>
                </Stack>
            </form>
        </Stack>
    );
};
