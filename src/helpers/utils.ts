import { formatDistance } from "date-fns";
import { PostResponse } from "../schemas";

export const userStoraged = () => {
    const user = localStorage.getItem('user');
    if (user) {
        return JSON.parse(user);
    }
    return null;
}

// create a funtion to order the array of objects by date
export const orderByDate = (list: PostResponse[]) => {
    return list.slice().sort((a: PostResponse, b: PostResponse) => {
        return new Date(b.created_datetime).getTime() - new Date(a.created_datetime).getTime();
    }) as PostResponse[] | [];
}

export const formatDate = (date: Date) => {
    const dateFormated = formatDistance(
        new Date(date),
        new Date()
    );
    return dateFormated;
}