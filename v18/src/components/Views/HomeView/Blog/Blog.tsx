import css from "@/v-home/Blog/Blog.module.scss";
import {tBlog} from "@/v-home/Blog/Blog.models";
import {RegularBlogCard as Card} from "@/cards/Blog/index";
import { PrimaryButton as Button} from "@/buttons/index";

export default function Blog(props:tBlog) {
  return (
    <div
      className={css.wrapper}
    >
      <section
        className={css.container}
      >
        <h2 className={css.title} >{props.title}</h2>
        <p
          className={css.content}
          dangerouslySetInnerHTML={{__html:props.content}}
        />
        <Button
          theme="light"
          variant="link"
          title={props.button.title}
          url={props.button.url}
          props={props.button.props}
        />
      </section>
      {
        props.cards && 
        <ul
          className={css.cards}
        >
          {
            props.cards.map((item) => {
              return (
                <Card
                  {...item}
                  key={item.title}
                />
              )
            })
          }
        </ul>
      }
    </div>
  );
}
