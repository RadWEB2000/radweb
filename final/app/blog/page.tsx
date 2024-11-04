import { blog } from "data/blog"
import { Hero } from "v-blog/index"
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
            <h1>poznan</h1>
        </>
    )
}