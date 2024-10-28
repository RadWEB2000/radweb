import { home } from "data/home"
import { About, Blog, Hero, Overview, Projects, Services, WhyWorth } from "v-home/index"

export default function HomePage(){
  return (
    <>
      <Hero
        {...home.hero}
      />
      <main>
        <Overview
          {...home.overview}
        />
        <About
          {...home.about}
        />
        <Services
          {...home.services}
        />
        <Projects
          {...home.projects}
        />
        {/* Blog */}
        <Blog
          {...home.blog}
          />
        {/* Przejrzyste warunki współpracy / kroki: https://ks.pl/ */}
        <WhyWorth
          {...home.whyWorth}
        />


        {/* Dlaczego ja? */}
        {/* Marketing Twojej firmy w dobrych rękach */}
        {/* Sektory */}
        {/* Pozostałe usługi? */}
        {/* Dlaczego warto? 1. Mieć stronę? 2. Mieć SEO? */}
        {/* Opinie klientów */}
        {/* Case studies */}
        {/* FAQ */}
        {/* Sociale / - ostatnie wpisy z fb / ig/ yt / x */}

      </main>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ad inventore autem iusto? Velit, architecto non sapiente provident assumenda cumque accusantium accusamus dignissimos debitis. Neque iure aliquid ducimus quia facilis.
      Voluptas fugit veritatis illo inventore perferendis reiciendis mollitia nobis odio neque placeat porro ullam voluptatum adipisci est quod tempore amet sint, commodi sunt? Itaque voluptatum tempora facilis praesentium voluptates natus!
      Voluptates omnis sit perspiciatis repudiandae dolorum modi suscipit dolorem laudantium quis maxime earum sequi a sunt fuga labore nesciunt, blanditiis at asperiores alias! Magni pariatur quis at tempore veritatis blanditiis.
      Blanditiis odio optio ducimus velit rem cupiditate quae, quam sequi at earum placeat magni dolor ab perspiciatis quidem commodi ut consectetur reprehenderit cumque autem non. Et sequi cupiditate dignissimos possimus.
      Veritatis, nisi dignissimos. Quia, impedit esse adipisci sequi officia placeat assumenda soluta similique porro earum accusamus cupiditate! Saepe amet ut alias tempore obcaecati aspernatur nisi nesciunt assumenda, delectus sit tempora?
      Voluptatum asperiores voluptate eum libero enim natus laborum, nesciunt et qui recusandae corporis ipsa quia esse saepe dolore accusamus unde nobis impedit quo consequuntur quasi a officia. Quidem, molestiae corrupti.
      Ipsam corrupti quia magnam laboriosam officia, aut nam nisi debitis iste at tenetur, corporis molestiae amet aliquid possimus repellat hic explicabo, repudiandae consectetur illo quisquam! Tempore at eveniet deserunt facere.
      Tempore dolore illum illo ut labore quam magni! Aspernatur totam sunt magni quod. Magnam, similique illo, pariatur tempore quae harum, sapiente nisi labore omnis qui suscipit expedita aliquid culpa cumque!
      Ex cum accusamus quae soluta suscipit, quas impedit aperiam explicabo, fugit tempore debitis quos. Quis deleniti tenetur delectus sed ex maxime molestiae sit dolores maiores cupiditate, voluptate a assumenda dicta.
      Veniam consectetur voluptatum nemo, quos voluptate molestiae hic id autem, facere mollitia inventore. Tempore, necessitatibus! Cupiditate ratione sapiente nisi commodi qui, iure incidunt aperiam sunt, fugit recusandae, velit esse consequatur!
      Praesentium eaque libero voluptatum natus sunt debitis animi accusantium doloribus tenetur consequuntur quaerat totam, veritatis aut nobis maxime esse, sit non soluta deserunt odit, earum atque ea. Dolore, laudantium impedit.
      Dolorem at sint quam dicta fuga cupiditate nostrum repellendus nam reiciendis ea ullam labore error, maxime, assumenda, quis sed totam perspiciatis. Consequuntur neque ullam enim corrupti excepturi eum nemo veniam.
      <h1>home page</h1>
    </>
  )
}