import { DEFAULT_POSTS_LIMIT } from "@/constants";
import { Comment, Post } from "@/types";
import { CustomAxiosResponse } from "@/types/declare/axios";
import { clientApi } from "./config";


const getTotalPostsCount = async () => {
    const { total } = await clientApi.get("posts", {
        params: {
            _start: 0,
            _limit: 0,
        }
    });
    return total;
}

interface PostsFetchParams {
    start: number,
    gridColumnCount: number
}

type PostsResponse = Omit<Post, 'commentsCount'>[];

const getPosts = (
    params?: PostsFetchParams
): Promise<CustomAxiosResponse<PostsResponse>> => {
    const limit = params ? DEFAULT_POSTS_LIMIT * (params.start === 0 ? 1 : params.gridColumnCount) : undefined;
    return clientApi.get<PostsResponse>("posts", {
        params: {
            _start: params?.start,
            _limit: limit
        }
    });
};

interface CommentFetchParams {
    postId: number;
    page?: number;
    limit?: number;
}

const getCommentsByPostId = (
    { postId, page = 1, limit }: CommentFetchParams
): Promise<CustomAxiosResponse<Comment[]>> => {
    return clientApi.get<Comment[]>(
        `posts/${postId}/comments`, {
        params: {
            _page: page,
            _limit: limit
        }
    }
    );
};


export const postsApi = {
    getTotalPostsCount,
    getPosts,
    getCommentsByPostId,
}