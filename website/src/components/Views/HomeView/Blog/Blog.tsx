import { PrimaryBlogCard as Card } from "cards/index"
import {tBlog} from "v-home/Blog/Blog.models"

export default function Blog({button,cards,content,title}:tBlog){
    return (
        <div>
            <section>
                <h2 dangerouslySetInnerHTML={{__html:title}}  />
                <p  dangerouslySetInnerHTML={{__html:content}} />
            </section>
            {
                cards && 
                <ul>
                    {cards.map((item,index) => {
                        return (
                            <Card
                                {...item}
                                key={index}
                            />
                        )
                    })}
                </ul>
            }
        </div>
    )
}