import { FunctionComponent } from "react"
import Link from "next/link";
import { Card, Content, Figure, Title } from "./style";
import { Post as PostType } from "../../shared/types";

interface PostProps {
    post: PostType
}

export const Post: FunctionComponent<PostProps> = ({ post }) => {
    return (
        <Link href='/post/[id]' as={`/post/${post.id}`} passHref>
            <Card>
                <Figure>
                    <img alt={post.title} src={post.image} />
                </Figure>
                <Title>{post.title}</Title>
                <Content>{post.lead}</Content>
            </Card>
        </Link>
    )
}
