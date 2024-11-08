import { blog } from "data/blog"
import { Hero, InsightsPanel } from "v-blog/index"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - RadWEB",
  description: "",
};
export default function BlogPage(){
    return (
        <>  
            <Hero
                {...blog.hero}
            />
            <main>
                <InsightsPanel
                    sections={blog.sections}
                />
            </main>
            <h1>poznan</h1>
        </>
    )
}