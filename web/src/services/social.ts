import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMessage } from "../interfaces/IMessage";
import { IPost } from "../interfaces/IPost";
import { IUser } from "../interfaces/IUser";

export type SetPost = {
  description: IPost["description"];
  media: IPost["media"] | ArrayBuffer | null;
};

type GetAllPostsResponse = IMessage<Omit<IPost<[IUser]>, "comments">[]>;

const TOKEN = window.localStorage.getItem("token");
export const socialApi = createApi({
  reducerPath: "socialApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SERVER_URI,
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${TOKEN}`);
      return headers;
    },
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getAllPosts: builder.query<
      IMessage<Omit<IPost<[IUser]>, "comments">[]>,
      undefined
    >({
      query: () => `/posts`,
      providesTags: ["Post"],
      transformResponse: (response: GetAllPostsResponse) => {
        const sortedData = response.data?.sort(
          (a, b) =>
            new Date(b.creationDate).getTime() -
            new Date(a.creationDate).getTime()
        );
        if (sortedData) {
          return {
            ...response,
            data: sortedData,
          };
        }
        return response;
      },
    }),
    setLike: builder.mutation<
      IMessage<Omit<IPost<[IUser]>, "comments" | "reactions">[]>,
      string
    >({
      query: (id) => ({
        url: `/posts/like/${id}`,
        method: "POST",
      }),

      invalidatesTags: ["Post"],
    }),
    setPost: builder.mutation<IMessage<IPost<[IUser]>>, SetPost>({
      query: (obj) => {
        return {
          url: "/posts",
          method: "POST",
          body: obj,
        };
      },
      invalidatesTags: ["Post"],
    }),
    removePost: builder.mutation<IMessage<IPost<[IUser]>>, string>({
      query: (id: string) => {
        return {
          url: `/posts/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useSetLikeMutation,
  useSetPostMutation,
  useRemovePostMutation,
} = socialApi;
