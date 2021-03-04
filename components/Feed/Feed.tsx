import { FunctionComponent } from "react"
import { Category, Post } from "../../shared/types"
import { Section } from "../Section"

interface FeedProps {
    posts: Post[]
    categories: Category[]
}

export const Feed: FunctionComponent<FeedProps> = ({ posts, categories }) => {
    return (
        <>
            {
                categories.map((currentCatregory) => {
                    const inSection = posts.filter(
                        (post) => post.category === currentCatregory
                    )

                    return (
                        <Section 
                            key={currentCatregory}
                            title={currentCatregory}
                            posts={inSection}
                            isCompact
                        />
                    )
                })
            }
        </>
    )
}
