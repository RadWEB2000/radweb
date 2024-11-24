import BlogProvider from "context/BlogContext"
import { blog } from "data/blog"
import { Hero, Search, Sort } from "v-blog/index"

export default function BlogPage() {
    return (
        <>
            <Hero
                {...blog.hero}
            />
            <main>
                <BlogProvider>
                    <Search
                        label="Znajdź artykuł"
                        placeholder="Szukaj"
                    />
                    <Sort
                        {...blog.sort}
                    />
                </BlogProvider>
            </main>
            <h1>blog</h1>
        </>
    )
}