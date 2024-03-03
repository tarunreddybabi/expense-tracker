import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const baseURL="http://localhost:8080";

export const apiSlice=createApi({
    baseQuery:fetchBaseQuery({baseUrl:baseURL}),
    endpoints: builder=>({
        getCategories:builder.query({
            query:()=>"/api/categories"
        })
    })
})

export default apiSlice;