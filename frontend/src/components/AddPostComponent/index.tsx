import React, { useState } from "react";
import {
    AddPostContainer,
    AddPostForm,
    AddPostInput,
    AddPostLabel,
    AddPostTextArea,
    Message,
    Publish,
    PublishContainer,
} from "./AddPostComponents";
import { WithContext as ReactTags } from "react-tag-input";
import "./style.css";
import api from "../../utils/api";
import { AxiosError } from "axios";
import { postInterface } from "../../redux/types/post";
import { Link } from "react-router-dom";
const AddPostComponent = () => {
    interface ITag {
        id: string;
        text: string;
    }
    interface IFormData {
        title: string;
        content: string;
        imageURL: string;
        category: string;
    }
    interface IResult {
        message: string;
        post: postInterface;
    }
    interface IData {
        status: "idle" | "loading" | "succesfull" | "failed";
        result: IResult | null;
        error: string | null;
    }
    const [formData, setFormData] = useState<IFormData>({
        title: "",
        content: "",
        imageURL: "",
        category: "",
    });
    const [tags, setTags] = useState<ITag[]>([]);
    const [addPostCall, setAddPostCall] = useState<IData>({
        status: "idle",
        result: null,
        error: null,
    });
    const handleDrag = (tag: ITag, currPos: number, newPos: number) => {
        const newTags = tags.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        // re-render
        setTags(newTags);
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((newFormData) => {
            return { ...newFormData, [e.target.name]: e.target.value };
        });
    };
    const handleChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData((newFormData) => {
            return { ...newFormData, [e.target.name]: e.target.value };
        });
    };
    const handlePublish = (e: React.FormEvent) => {
        e.preventDefault();
        setAddPostCall({ ...addPostCall, status: "loading" });
        const tagsText = tags.map((tag) => tag.text);
        const data = { ...formData, tags: tagsText };
        api.post<IResult>("/post/add-post", data)
            .then((res) => {
                setAddPostCall({ status: "succesfull", result: res.data, error: null });
            })
            .catch((error) => {
                const err = error as AxiosError;
                if (err.response) {
                    if (err.response.data.message === "The session ended. Please reconnect") return;
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                    setAddPostCall({ status: "failed", result: null, error: err.response.data.message });
                    return;
                }
                console.log(error);
                setAddPostCall({ status: "failed", result: null, error: "An unkown error appeard. Please contact us" });
            });
    };
    const handleDelete = (i: number) => {
        setTags(tags.filter((tag, index) => index !== i));
    };

    const handleAddition = (tag: ITag) => {
        setTags([...tags, tag]);
    };
    return (
        <>
            <AddPostContainer>
                <AddPostForm onSubmit={handlePublish}>
                    <AddPostLabel htmlFor="title">Title</AddPostLabel>
                    <AddPostInput
                        type="text"
                        name="title"
                        placeholder="Type the desired title for your post"
                        onChange={handleChange}
                    />
                    <AddPostLabel htmlFor="imageURL">Image URL</AddPostLabel>
                    <AddPostInput type="text" name="imageURL" placeholder="Paste image URL" onChange={handleChange} />
                    <AddPostLabel htmlFor="content">Content</AddPostLabel>
                    <AddPostTextArea
                        name="content"
                        placeholder="Write the content of the post"
                        onChange={handleChangeTextarea}
                    ></AddPostTextArea>
                    <AddPostLabel>Tags</AddPostLabel>
                    <ReactTags
                        tags={tags}
                        handleDelete={handleDelete}
                        handleAddition={handleAddition}
                        handleDrag={handleDrag}
                    />
                    <AddPostLabel htmlFor="category">Category</AddPostLabel>
                    <AddPostInput
                        type="text"
                        name="category"
                        placeholder="Specify the category"
                        onChange={handleChange}
                    />
                    <PublishContainer>
                        <Publish>Publish Post</Publish>
                    </PublishContainer>
                    {addPostCall.status === "loading" && <Message color="white">Loading...</Message>}
                    {addPostCall.status === "succesfull" && (
                        <Message color="lightgreen">
                            {
                                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                                addPostCall.result?.message
                            }{" "}
                            You can see it{" "}
                            <Link to={
                                 // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                                `/blog/${addPostCall.result?.post.slug}`}>
                                <Message color="lightgreen">here</Message>
                            </Link>
                        </Message>
                    )}
                    {addPostCall.status === "failed" && <Message color="red">{addPostCall.error}</Message>}
                </AddPostForm>
            </AddPostContainer>
        </>
    );
};

export default AddPostComponent;
