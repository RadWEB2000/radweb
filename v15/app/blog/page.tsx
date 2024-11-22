import { blog } from "data/blog"
import { Hero } from "v-blog/index"

export default function BlogPage() {
    return (
        <>
            <Hero
                {...blog.hero}
            />
            <h1>blog</h1>
        </>
    )
}