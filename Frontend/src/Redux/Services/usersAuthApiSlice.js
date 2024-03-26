import { AUTH_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const usersAuthApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: `${AUTH_URL}register`,
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: data,
            }),
        }),

        login: builder.mutation({
            query: (data) => ({
                url: `${AUTH_URL}login`,
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: data,
            }),
        }),
    }),
});

export const { useRegisterMutation, useLoginMutation } = usersAuthApiSlice;
