import { createApi } from "@reduxjs/toolkit/query/react";
import { createBaceQuery } from "../config/data-bace";

export const usersData = createApi({
    reducerPath: "user_data",
    baseQuery: createBaceQuery(),
    tagTypes: ["load"],
    endpoints: (build) => ({
        UsersData: build.query({
            query: (page = 1) => {
                return {
                    url: "/todos",
                    params: {
                        _limit: 4,
                        _page: page,
                    },
                };
            },
            transformResponse: (data, res) => {
                let dataCounter = res?.response.headers.get("X-Total-count");
                if (dataCounter % 4 != 0) {
                    return {
                        data,
                        pageSize: Math.round((Number(dataCounter) + 1) / 4),
                    };
                }
                return { data, pageSize: Math.round(Number(dataCounter) / 4) };
            },
            providesTags: ["load"],
        }),
        postData: build.mutation({
            query: (data) => ({
                url: "/todos",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["load"],
        }),
        deleteData: build.mutation({
            query: (id) => ({ url: `/todos/${id}`, method: "DELETE" }),
            invalidatesTags: ["load"],
        }),
    }),
});

export const { useUsersDataQuery, usePostDataMutation, useDeleteDataMutation } =
    usersData;
