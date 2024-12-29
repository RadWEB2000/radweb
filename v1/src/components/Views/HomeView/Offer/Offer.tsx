import css from "@/v-home/Offer/Offer.module.scss";
import { tOffer } from "@/v-home/Offer/Offer.models";
import { HomePageOfferCard as Card, PrimaryButton as Button } from "@/ui/index";

export default function Offer(props: tOffer) {
  return (
    <div className={css.wrapper}>
      <section className={css.container}>
        <h2
          className={css.title}
          dangerouslySetInnerHTML={{ __html: props.title }}
        />
        <p
          className={css.content}
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
        <Button {...props.button} mode="link" theme="white" />
      </section>
      {props.cards && (
        <ul className={css.cards}>
          {props.cards.map((item) => {
            return <Card key={item.title} {...item} />;
          })}
        </ul>
      )}
    </div>
  );
}
