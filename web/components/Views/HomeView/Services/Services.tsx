import {tServices} from "v-home/Services/Services.models";
import css from "v-home/Services/Services.module.scss"
export default function Services({button,content,title}:tServices){
    return (
        <div>
            <section>
                <h2
                    dangerouslySetInnerHTML={{__html:title}}
                />
                <p
                    dangerouslySetInnerHTML={{__html:content}}
                />
            </section>
            <ul>

            </ul>
        </div>
    )
}