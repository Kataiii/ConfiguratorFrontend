import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICity } from '../../entities/City/City';
import { API_URL } from '../../http';


export const cityAPI = createApi({
    reducerPath: 'cityAPI',
    tagTypes: ['City'],
    baseQuery: fetchBaseQuery({
        baseUrl: `${API_URL}/cities` ,
        headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
    }),
    endpoints: (build) => ({
        fetchAllCities: build.query<ICity[], number>({
            query: () => ({
                url: '',
                params: {}
            }),
            providesTags: result => ['City']
        })
    })
})