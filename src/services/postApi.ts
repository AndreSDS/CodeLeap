import axios from "axios";
import {
    ResponseData,
    Post,
    PostRequest,
    PostResponse,
} from "../schemas";

const postApi = axios.create({
    baseURL: "http://dev.codeleap.co.uk/careers/",
});

async function getPosts() {
    try {
        const {
            data: { results },
        } = await postApi.get<ResponseData>("/");
        return results;
    } catch (error) {
        console.error(error);
    }
}

async function createPost(post: PostRequest) {
    try {
        const { data } = await postApi.post<PostResponse>("/", post);
        return data;
    } catch (error) {
        console.error(error);
    }
}

async function updatePost(id: number, { title, content }: Post) {
    try {
        const { data } = await postApi.patch<PostResponse>(`/${id}/`, { title, content });
        return data;
    } catch (error) {
        console.error(error);
    }
}

async function deletePost(id: number) {
    try {
        await postApi.delete<PostResponse>(`/${id}/`);
    } catch (error) {
        console.error(error);
    }
}

export { getPosts, createPost, updatePost, deletePost };
