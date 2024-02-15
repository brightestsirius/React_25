import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { IUser } from './types'

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://655655bc84b36e3a431f9829.mockapi.io/' }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getUsers: builder.query<IUser[], void>({
            query: () => `users`,
            providesTags: (result, error, arg) =>
                result
                    ? [...result.map(({ id }) => ({ type: 'User' as const, id })), 'User']
                    : ['User'],
        }),
        deleteUser: builder.mutation<IUser, string>({
            query: (id) => ({
                url: `users/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['User'],
        }),
    }),
})

export const { useGetUsersQuery, useDeleteUserMutation } = usersApi