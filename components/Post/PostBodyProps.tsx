import { FunctionComponent } from "react";
import { Post } from "../../shared/types";
import { Content, Figure, Meta, Title } from "./PostBodyStyle";
import Link from "next/link";
import { Breadcrumbs } from "../Breadcrumbs";

interface PostBodyProps {
    post: Post
}

export const PostBodyProps:FunctionComponent<PostBodyProps> = ({ post }) => {
    return (
        <div>
            <Breadcrumbs post={post} />
            <Title>{post.title}</Title>
            <Figure>
                <img src={post.image} alt={post.title} />
            </Figure>
            <Content dangerouslySetInnerHTML={{ __html: post.content }} />
            <Meta>
                <span>{post.date}</span>
                <span>&middot;</span>
                <Link href='/category/[id]' as={`/category/${post.category}`}>
                    <a href={post.category}>Source</a>
                </Link>
                <span>&middot;</span>
                <a href={post.source}></a>
            </Meta>
        </div>
    )
}
