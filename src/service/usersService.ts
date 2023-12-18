
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface user{
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

interface Users {
    page: number;
    total_pages: number;
    data: user[];
}

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api' }),
  endpoints: (builder) => ({
    getUsersByPage: builder.query<Users, number>({
      query: (page) => `users?page=${page}`,
    }),
  }),
})


export const { useGetUsersByPageQuery  } = usersApi