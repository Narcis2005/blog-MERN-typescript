export interface postInterface {
    title: string;
    description: string;
    imageURL: string;
    slug?: string;
    createdAt?: Date;
}

export interface multiplePostsResponse {
    numberOfElements: number;
    page: number;
    perPage: number;
    totalPages: number;
    results: postInterface[];
}
export interface KnownError {
    message: string;
}
