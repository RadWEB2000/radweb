import BlogProvider from "context/BlogContext"
import { blog } from "data/blog"
import {  Container,  Hero } from "v-blog/index"

export default function BlogPage() {
    return (
        <>
            <Hero
                {...blog.hero}
            />
            <main>
                <BlogProvider>
                    <Container
                        categories={blog.categories}
                        controlPanel={{
                            search:blog.search,
                            sort:blog.sort
                        }}
                    />
                </BlogProvider>
            </main>
            <h1>blog</h1>
        </>
    )
}