export interface postInterface {
    _id: string;
    title: string;
    description: string;
    content: string;
    imageURL: string;
    slug: string;
    createdAt: string;
    tags: string[];
    category: string;
    createdBy: {
        _id: string;
        username: string;
    };
    comments: IComment[];
}
export interface IComment {
    _id: string;
    content: string;
    createdAt: string;
    createdBy: {
        username: string;
        imageURL: string;
        _id: string;
    };
    replies: [
        {
            _id: string;
            content: string;
            createdAt: string;
            createdBy: {
                username: string;
                imageURL: string;
                _id: string;
            };
        },
    ];
}
export interface shortPostInterface {
    title: string;
    description: string;
    slug: string;
    imageURL: string;
}
export interface multiplePostsResponse {
    numberOfElements: number;
    page: number;
    perPage: number;
    totalPages: number;
    results: shortPostInterface[];
}
export interface KnownError {
    message: string;
}
