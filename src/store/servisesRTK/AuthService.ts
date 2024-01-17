import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AuthResponse } from "../../entities/Response/AuthResponse";
import { API_URL } from "../../http/Index";
import { initialState, setState } from "../sliceRTK/AuthSlice";


export const authAPI = createApi({
    reducerPath: 'authAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: `${API_URL}/auth`,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }),
    
    endpoints: (build) => ({
        loginUser: build.mutation({
            query: () => ({
                url: '/login',
                credentials: 'include'
            }),
            transformResponse: (result: { data: AuthResponse }) =>
                result.data,
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(
                        setState({ accessToken: data.accessToken, account: data.account })
                    );
                    console.log(initialState);
                } catch (error) { }
            }
        })
    })
})