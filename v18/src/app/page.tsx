import { About, Blog, Hero, Overview, Projects, Services, WhyUs } from "@/v-home/index";
import service_img_1 from "@/img/abstract-one.webp";
import service_img_2 from "@/img/abstract-two.webp";
import service_img_3 from "@/img/girls.webp";
import overview_img from "@/img/overview.webp";
import hands_img from "@/img/hands.jpg";
import about_img from "@/img/r-adamczyk-gray.webp";
import vr_img from "@/img/vr.webp";
import girl_img from "@/img/girl.webp";

export default function HomePage() {
  return (
    <>
      <Hero
        content={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia doloremque atque eius dolorem sapiente voluptatibus labore, rerum quibusdam cum incidunt error, dolore, quaerat`}
        services={[
          {
            button: {
              url: "/",
            },
            excerpt: `Fuga ipsum similique omnis beatae, eius nulla quae officiis dolorum blanditiis quis incidunt quibusdam dignissimos saepe aperiam laboriosam vero modi ea eos delectus inventore deserunt nam! Modi, aliquid! Cum, quos?`,
            image: {
              altText: ``,
              sourceSrc: service_img_1.src,
              title: ``,
            },
            title: `SEO`,
          },
          {
            button: {
              url: "/",
            },
            excerpt: `Fuga ipsum similique omnis beatae, eius nulla quae officiis dolorum blanditiis quis incidunt quibusdam dignissimos saepe aperiam laboriosam vero modi ea eos delectus inventore deserunt nam! Modi, aliquid! Cum, quos?`,
            image: {
              altText: ``,
              sourceSrc: service_img_2.src,
              title: `Strony internetowe`,
            },
            title: `Strony internetowe`,
          },
          {
            button: {
              url: "/",
            },
            excerpt: `Fuga ipsum similique omnis beatae, eius nulla quae officiis dolorum blanditiis quis incidunt quibusdam dignissimos saepe aperiam laboriosam vero modi ea eos delectus inventore deserunt nam! Modi, aliquid! Cum, quos?`,
            image: {
              altText: ``,
              sourceSrc: service_img_3.src,
              title: ``,
            },
            title: `Web Care`,
          },
        ]}
        title="RadWEB"
        video={{
          src: `/bridge.mp4`,
          props: {
            // autoPlay: true,
            controls: false,
            muted: true,
            // loop: true,
            disablePictureInPicture: true,
            disableRemotePlayback: true,
          },
        }}
        buttons={[
          {
            title: `Blog`,
            url: `#`,
          },
          {
            title: `Oferta`,
            url: `#`,
          },
          {
            title: `Kontakt`,
            url: `#`,
          },
        ]}
        articles={[
          {
            button: {
              url: `#`,
            },
            release: `21 paź 2023`,
            title: `Jak wykorzystać AI do promocji biznesu?`,
          },
          {
            button: {
              url: `#`,
            },
            release: `21 paź 2023`,
            title: `Samodzielne pozycjonowanie strony`,
          },
          {
            button: {
              url: `#`,
            },
            release: `21 paź 2023`,
            title: `Co to jest storytelling?`,
          },
          {
            button: {
              url: `#`,
            },
            release: `21 paź 2023`,
            title: `Czym jest recykling treści i jak skutecznie go wdrożyć?`,
          },
          {
            button: {
              url: `#`,
            },
            release: `21 paź 2023`,
            title: `Co to jest infografika, czyli o wizualnej stronie contentu`,
          },
        ]}
      />
      <main className="main__home">
        <Overview
          content={`While scrolling down, note how the inset value of 50% 10% causes the animation to start at 10% from the bottom and finish at 50% from the top. As animation moves forward along the timeline the subject grows. Conversely, when scrolling up the animation proceeds in the reverse direction, starting at 50% from the top, moving backward through the animation, and ending at 10% from the bottom. So, as the animation happens backwards the subject shrinks. To aid<br/><br/> the understanding of the result, extra elements subject-container, top, and bottom have been used. The subject-container shows the bounds of the animation. And semi-transparent top and bottom overlays mark inset offsetted scrollport. Finally, note that for non-replaced inline elements, the amount of space taken up (the contribution to the height of the line) is determined by the line-height property, even though the borders and padding are still displayed around the content.The size of the margin area is determined by the margin-top, margin-right, margin-bottom, margin-left, and shorthand margin properties. When margin collapsing occurs, the margin area is not clearly defined since margins are shared between boxes.`}
          image={{
            altText: ``,
            sourceSrc: overview_img.src,
            title: ``,
          }}
          title="Wybierz specjalistę nie agencję"
          slogan="Jasna strona marketingu"
        />
        <About
          button={{
            title: `Poznaj mnie`,
            url: `#`,
          }}
          content={`To create a CSS animation sequence, you style the element you want to animate with the animation property or its sub-properties. This lets you configure the timing, duration, and other details of how the animation sequence should progress. This does not configure the actual appearance of the animation, which is done using the @keyframes at-rule as described in the Defining animation sequence using keyframes section below.`}
          image={{
            altText: ``,
            sourceSrc: about_img.src,
            title: ``,
          }}
          title="Kim jestem?"
        />
        <Services
          button={{
            title: `Wszystkie usługi`,
            url: "",
          }}
          content={`the subject shrinks. To aid the understanding of the result, extra elements subject-container, top, and bottom have been used. The subject-container shows the bounds of the animation. And semi-transparent top and bottom overlays mark inset offsetted scrollport. Finally, note that for non-replaced inline elements, the amount of space taken up (the contribution to the height of the line) is determined by the line-height property, even though the borders and padding`}
          title="Usługi marketingu online"
          slogan="Co oferuję?"
          cards={[
            {
              button: {
                title: `Więcej`,
                url: `#`,
              },
              content: `Finally, note that for non-replaced inline elements, the amount of space taken up (the contribution to the height of the line) is determined`,
              image: {
                altText: "",
                sourceSrc: service_img_1.src,
                title: "",
              },
              title: "Pozycjonowanie stron",
            },
            {
              button: {
                title: `Więcej`,
                url: `#`,
              },
              content: `Finally, note that for non-replaced inline elements, the amount of space taken up (the contribution to the height of the line) is determined`,
              image: {
                altText: "",
                sourceSrc: service_img_2.src,
                title: "",
              },
              title: "Strony internetowe",
            },
            {
              button: {
                title: `Więcej`,
                url: `#`,
              },
              content: `Finally, note that for non-replaced inline elements, the amount of space taken up (the contribution to the height of the line) is determined`,
              image: {
                altText: "",
                sourceSrc: service_img_3.src,
                title: "",
              },
              title: "Web care",
            },
          ]}
        />
        <Projects
          button={{
            title: `Wszystkie prace`,
            url: "/",
          }}
          content="An independent web design and branding agency in Manchester set up in 2010 who care, build relationships, have industry experience, and win awards."
          title="Projekty"
          cards={[
            {
              categories: ["SEO", "WWw", "Identyfikacja wizualna"],
              image: {
                altText: "",
                sourceSrc: vr_img.src,
                title: "",
              },
              release: "2024",
              subtitle: `Agromar`,
              title: "Refreshing Gary Neville's digital presence",
              url: "#",
            },
            {
              categories: ["SEO", "WWw", "Identyfikacja wizualna"],
              image: {
                altText: "",
                sourceSrc: girl_img.src,
                title: "",
              },
              release: "2024",
              subtitle: `Agromar`,
              title: "A workplace consultancy creating inspiring environments",
              url: "#",
            },
            {
              categories: ["SEO", "WWw", "Identyfikacja wizualna"],
              image: {
                altText: "",
                sourceSrc: vr_img.src,
                title: "",
              },
              release: "2024",
              subtitle: `Agromar`,
              title: "Reimagining the built environment",
              url: "#",
            },
            {
              categories: ["SEO", "WWw", "Identyfikacja wizualna"],
              image: {
                altText: "",
                sourceSrc: girl_img.src,
                title: "",
              },
              release: "2024",
              subtitle: `Agromar`,
              title: "Bringing architectural ideas to life",
              url: "#",
            },
          ]}
          slogan="Take a look at our projects"
        />
        <div className="into-light-bg" >
        <WhyUs
          cards={[
            {
              content:`Andronis Hotels, a leader in the Tourism & Hospitality sector, needed a unified communication system to ensure seamless collaboration between its hotels. modulus undertook the creation of a comprehensive telephony solution with 3CX and VoIP telephony, connecting the telephone system with their hotel management system (PMS), providing smooth operation and enhancement of internal communication across all the hotels in the group.`,
              title:`Andronis Hotels: Integrated Communication`
            },
            {
              content:`Andronis Hotels, a leader in the Tourism & Hospitality sector, needed a unified communication system to ensure seamless collaboration between its hotels. modulus undertook the creation of a comprehensive telephony solution with 3CX and VoIP telephony, connecting the telephone system with their hotel management system (PMS), providing smooth operation and enhancement of internal communication across all the hotels in the group.`,
              title:`Andronis Hotels: Integrated Communication`
            },
            {
              content:`Andronis Hotels, a leader in the Tourism & Hospitality sector, needed a unified communication system to ensure seamless collaboration between its hotels. modulus undertook the creation of a comprehensive telephony solution with 3CX and VoIP telephony, connecting the telephone system with their hotel management system (PMS), providing smooth operation and enhancement of internal communication across all the hotels in the group.`,
              title:`Andronis Hotels: Integrated Communication`
            },
          ]}
          content="The installation and customization of the 3CX cloud system by modulus has significantly improved internal communication in our hotels. The integration with the management system was smooth, and the support was immediate and helpful, ensuring that our needs were effectively met."
          image={{
            altText:``,
            sourceSrc:hands_img.src,
            title:``
          }}
          title="Dlaczego właśnie ja?"
        />
        </div>
        <Blog
          button={{
            title:`Wszystkie wpisy`,
            url:`/`
          }}
          content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga fugiat sed, cupiditate pariatur eligendi commodi eum tempora laborum
          blanditiis ipsa illolestiae soluta nulla magnam ipsa
          ea. Tempore, impedit hic facilis excepturi voluptatem est sit?
          Nesciunt aspernatur, amet omnis et corporis enim inventore aliquam
          harum minima, sequi fugiat distinctio optio modi magnam quis tempore
          ratione corrupti accusamus iusto itaque. Hic quidem "
          title="Blog"
          cards={[
            {
              categories:[
                {
                  title:`SEO`,
                  url:`/`
                },
                {
                  title:`Google`,
                  url:`/`
                },
                {
                  title:`Copywriting`,
                  url:`/`
                },
              ],
              image:{
                altText:``,
                sourceSrc:service_img_1.src,
                title:``
              },
              release:`21 kwi 2024`,
              title:`CTA – czym jest i jak je wykorzystywać?`,
              url:`/`
            },
            {
              categories:[
                {
                  title:`Sprzedaź`,
                  url:`/`
                }
              ],
              image:{
                altText:``,
                sourceSrc:service_img_1.src,
                title:``
              },
              release:`21 kwi 2024`,
              title:`Cross-selling i Up-selling – jak je stosować, aby zwiększyć sprzedaż w swoim sklepie?`,
              url:`/`
            },
            {
              categories:[
                {
                  title:`SEO`,
                  url:`/`
                },
                {
                  title:`Google`,
                  url:`/`
                },
                {
                  title:`Analityka`,
                  url:`/`
                },
              ],
              image:{
                altText:``,
                sourceSrc:service_img_1.src,
                title:``
              },
              release:`21 kwi 2024`,
              title:`Jak wykorzystać Google Trends w sprzedaży?`,
              url:`/`
            },
            {
              categories:[
                {
                  title:`Strony internetowe`,
                  url:`/`
                },
                {
                  title:`Analityka`,
                  url:`/`
                },
                {
                  title:`JavaScript`,
                  url:`/`
                },
              ],
              image:{
                altText:``,
                sourceSrc:service_img_1.src,
                title:``
              },
              release:`21 kwi 2024`,
              title:`Czym jest evergreen content i jak go stworzyć?`,
              url:`/`
            },
            {
              categories:[
                {
                  title:`Copywriting`,
                  url:`/`
                },
                {
                  title:`Content marketing`,
                  url:`/`
                },
              ],
              image:{
                altText:``,
                sourceSrc:service_img_1.src,
                title:``
              },
              release:`21 kwi 2024`,
              title:`Co to jest storytelling?`,
              url:`/`
            },
          ]}
        />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga fugiat
          sed, cupiditate pariatur eligendi commodi eum tempora laborum
          blanditiis ipsa illum sequi consectetur suscipit aspernatur nemo esse
          necessitatibus voluptate autem? Magni ipsa repellendus fugit nulla
          dolorum maxime omnis eligendi nobis iusto adipisci et expedita
          obcaecati eveniet non, reprehenderit nostrum voluptatum, iure sunt
          accusamus dolor officiis odit sed dolorem? At, veniam. Reprehenderit
          iure itaque nisi saepe temporibus odit expedita aspernatur vero, ut
          numquam eaque nostrum nam molestias molestiae soluta nulla magnam ipsa
          ea. Tempore, impedit hic facilis excepturi voluptatem est sit?
          Nesciunt aspernatur, amet omnis et corporis enim inventore aliquam
          harum minima, sequi fugiat distinctio optio modi magnam quis tempore
          ratione corrupti accusamus iusto itaque. Hic quidem possimus ratione
          rem nisi! Vel obcaecati odit quisquam molestias unde distinctio
          reiciendis illo vitae recusandae sunt laboriosam corporis, quos et
          inventore voluptate voluptatum amet, reprehenderit hic quia
          repellendus minus? Ullam ipsam dolorem similique repellat! Ducimus
          atque aliquid quisquam dolorem odit aperiam dolor dolorum quia, quae
          illo dicta quam exercitationem corrupti tempore vel optio voluptates
          reiciendis. Aliquam ex provident accusamus at. Quas, tempore beatae.
          Facere? Illum voluptas eum veritatis vel adipisci harum ipsam rem.
          Dignissimos molestiae repellat porro at obcaecati ad, facilis
          accusantium quibusdam natus, earum ea recusandae suscipit ut vero nemo
          illo maiores molestias? Cum itaque fugiat, ullam nemo at placeat
          veritatis distinctio expedita, doloribus dignissimos eveniet ipsam
          eaque, fugit quia odio alias quo praesentium. Quas, nostrum commodi
          optio fugiat totam veritatis esse delectus. Distinctio ea sed fuga
          labore non vel, enim optio nostrum aut. Aliquam sapiente distinctio
          libero, expedita ab facere alias. Adipisci officia velit quis alias
          nam magni mollitia nihil eius ea? Quaerat accusamus iusto sed eaque
          unde error non ipsam eveniet quod, odio quae, eligendi, veniam
          nesciunt ea? Dicta cum quisquam, blanditiis repellendus adipisci eius
          ratione, dolores facilis dolore doloremque natus? Quos illum, tenetur
          odio praesentium cumque animi corrupti odit provident ipsa est
          blanditiis dolorum delectus nobis earum excepturi eos totam natus
          laboriosam consectetur iusto quas vitae sapiente! Enim, architecto
          temporibus! Iure nisi mollitia accusantium atque asperiores eveniet
          aliquid, et nulla. Harum asperiores nesciunt quia numquam explicabo
          consequatur voluptatum quas at inventore reprehenderit, nemo officiis?
          Dolor exercitationem distinctio voluptas iusto perspiciatis?
        </div>
      </main>
    </>
  );
}
