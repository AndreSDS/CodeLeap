import { z } from "zod";

export const UserSchema = z.object({
    username: z.string().nonempty(),
});

export type User = z.infer<typeof UserSchema>;

export const PostSchema = z.object({
    title: z.string().nonempty(),
    content: z.string().nonempty()
});

export type Post = z.infer<typeof PostSchema>;

export const PostRequestSchema = z.object({
    ...UserSchema.shape,
    ...PostSchema.shape,
});

export type PostRequest = z.infer<typeof PostRequestSchema>;

export const PostResponseSchema = z.object({
    id: z.number(),
    ...PostRequestSchema.shape,
    created_datetime: z.date(),
});

export type PostResponse = z.infer<typeof PostResponseSchema>;

export type ResponseData = {
    count: number;
    next: string | null;
    previous: string | null;
    results: PostResponse[];
}