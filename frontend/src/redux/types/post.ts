export interface postInterface {
    title: string;
    description: string;
    content: string;
    imageURL: string;
    slug: string;
    createdAt: Date;
    tags: string[];
    category: string;
    createdBy: {
        userId: string;
        username: string;
    };
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
