import React from "react";

import { Items } from "../components/items/items";
import { Form } from "../components/form/form";
import { IconButton, Skeleton, Stack } from "@mui/material";
import { useUsersDataQuery } from "../redux/users";

export const Users = () => {
    const [page, resPage] = React.useState(1);
    const { data, isLoading, isFetching } = useUsersDataQuery(page);

    const remPage = (newPage) => {
        resPage(newPage);
    };
    return (
        <div>
            <Form />
            {isLoading || isFetching ? (
                <div>
                    <Stack gap={"2px"} mb={"20px"}>
                        <Skeleton height={"167px"} width={"600px"} />
                        <Skeleton height={"167px"} width={"600px"} />
                        <Skeleton height={"37px"} width={"600px"} />
                    </Stack>
                    <Stack gap={"2px"} mb={"20px"}>
                        <Skeleton height={"167px"} width={"600px"} />
                        <Skeleton height={"167px"} width={"600px"} />
                        <Skeleton height={"37px"} width={"600px"} />
                    </Stack>
                    <Stack gap={"2px"} mb={"20px"}>
                        <Skeleton height={"167px"} width={"600px"} />
                        <Skeleton height={"167px"} width={"600px"} />
                        <Skeleton height={"37px"} width={"600px"} />
                    </Stack>
                    <Stack gap={"2px"} mb={"20px"}>
                        <Skeleton height={"167px"} width={"600px"} />
                        <Skeleton height={"167px"} width={"600px"} />
                        <Skeleton height={"37px"} width={"600px"} />
                    </Stack>
                </div>
            ) : (
                data?.data?.map((item) => <Items key={item.id} {...item} />)
            )}

            {Array(data?.pageSize)
                ?.fill(null)
                ?.map((_, index) => (
                    <IconButton
                        key={index}
                        sx={{
                            bgcolor: `${page == index + 1 ? "teal" : ""}`,
                        }}
                        onClick={() => remPage(index + 1)}
                    >
                        {index + 1}
                    </IconButton>
                ))}
        </div>
    );
};
