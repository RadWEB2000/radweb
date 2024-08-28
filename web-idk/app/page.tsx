import { AboutUs, Blog, Faq, Hero, Projects, Services, WhyUs } from "v-home/index";
import radek_img from "img/radek-adamczyk.webp";
import filip_img from "img/filip-bukowiecki.webp"

export default function Page(){
  return (
    <>
      <Hero
          buttons={[
            {
               title:"Wiedza",
               url:"#"
            },
            {
               title:"Oferta",
               url:"#"
            },
            {
               title:"Kontakt",
               url:"#"
            },
          ]}
          media="movie"
          slogan="Współczesny marketing online"
          title="RadWEB"
          video={{
            source:"https://videos.pexels.com/video-files/3163534/3163534-uhd_2560_1440_30fps.mp4",
            type:"video/mp4"
          }}
          socials={[
            "facebook.com",
            "instagram.com",
            "medium.com",
            "x.com",
          ]}
          statistics={[
            {
              label:"Lat doświadczenia",
              value:new Date().getFullYear() - 2016
            },
            {
              label:"Zrealizowanych prac",
              value:13
            },
          ]}
      />
      <main>
        <WhyUs
          content={`There Are Some Things Money Can’t Buy. For Everything Else, There’s Mastercard.`}
          images={[
            {
              altText:"",
              sourceUrl:"https://img.freepik.com/free-photo/top-view-group-friends-holding-hands_23-2148212319.jpg?t=st=1724430348~exp=1724433948~hmac=cbf127337c46897f77b44098a79098ad3f210dbcaf5910d2ed1260bf60d0b0aa&w=740",
              title:""
            },
            {
              altText:"",
              sourceUrl:"https://img.freepik.com/free-photo/front-view-friends-high-five_23-2148342044.jpg?t=st=1724429941~exp=1724433541~hmac=a752f411a1802af63a39cbb81e7af0d95b707addb412577a22eacb13f016b1f3&w=740",
              title:""
            },
            {
              altText:"",
              sourceUrl:"https://img.freepik.com/free-photo/coworkers-working-plans-break_23-2147707751.jpg?t=st=1724430344~exp=1724433944~hmac=bf2bcc6586ccea14baaf1f352e3fb986f02c88b9dea6d820c89ed185cf05a8ed&w=740",
              title:""
            },
          ]}
        />
        <AboutUs
          button={{
            title:"Poznaj nas",
            url:"#"
          }}
          cards={[
            {
              fullname:{
                firstname:"Radosław",
                lastname:"Adamczyk"
              },
              image:{
                altText:"",
                sourceUrl:radek_img.src,
                title:""
              },
              occupation:"SEO - SEM - WWW",
              url:"#"
            },
            {
              fullname:{
                firstname:"Filip",
                lastname:"Bukowiecki"
              },
              image:{
                altText:"",
                sourceUrl:filip_img.src,
                title:""
              },
              occupation:"Videomaking",
              url:"#"
            },
          ]}
          content={`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`}
          title="Specjaliści RadWEB"
        />
        <Services
          button={{
            title:"Nasza oferta",
            url:"#"
          }}
          content={`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of`}
          title="Usługi RadWEB"
          grid={[
            {
              button:{
                title:"Więcej",
                url:"#"
              },
              content:`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`,
              title:"Strony internetowe",
              cards:[
                {
                  content:`Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)`,
                  image:{
                    altText:"",
                    sourceUrl:"https://img.freepik.com/premium-photo/medium-shot-woman-living-farmhouse_23-2150621719.jpg?t=st=1724588684~exp=1724589284~hmac=cb1546d4d2f68b0084237c4c32047a7c3f0b205da6b2765b691c9fa849344400&w=826",
                    title:""
                  },
                  title:"Portfolio",
                  url:"#"
                },
                {
                  content:`Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)`,
                  image:{
                    altText:"",
                    sourceUrl:"https://img.freepik.com/premium-photo/side-view-adventurous-couple-bivouacking_23-2150562891.jpg?t=st=1724588684~exp=1724589284~hmac=e380700973d30effe4f27ff5625047f4423509cd098b69828a2764919f1893f5",
                    title:""
                  },
                  title:"Blogi",
                  url:"#"
                },
                {
                  content:`Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)`,
                  image:{
                    altText:"",
                    sourceUrl:"https://img.freepik.com/free-photo/beautiful-landscape-mother-nature_23-2148992406.jpg?t=st=1724588684~exp=1724589284~hmac=e59dcf8a6ccaf13dd10086d2cdc417cc8b5434dc59ab82198aa39bc744afac30",
                    title:""
                  },
                  title:"E-commerce",
                  url:"#"
                },
              ]
            },
            {
              button:{
                title:"Więcej",
                url:"#"
              },
              content:`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`,
              title:"SEO",
              cards:[
                {
                  content:`Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)`,
                  image:{
                    altText:"",
                    sourceUrl:"https://img.freepik.com/premium-photo/medium-shot-woman-living-farmhouse_23-2150621719.jpg?t=st=1724588684~exp=1724589284~hmac=cb1546d4d2f68b0084237c4c32047a7c3f0b205da6b2765b691c9fa849344400&w=826",
                    title:""
                  },
                  title:"Portfolio",
                  url:"#"
                },
                {
                  content:`Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)`,
                  image:{
                    altText:"",
                    sourceUrl:"https://img.freepik.com/premium-photo/side-view-adventurous-couple-bivouacking_23-2150562891.jpg?t=st=1724588684~exp=1724589284~hmac=e380700973d30effe4f27ff5625047f4423509cd098b69828a2764919f1893f5",
                    title:""
                  },
                  title:"Blogi",
                  url:"#"
                },
                {
                  content:`Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)`,
                  image:{
                    altText:"",
                    sourceUrl:"https://img.freepik.com/free-photo/beautiful-landscape-mother-nature_23-2148992406.jpg?t=st=1724588684~exp=1724589284~hmac=e59dcf8a6ccaf13dd10086d2cdc417cc8b5434dc59ab82198aa39bc744afac30",
                    title:""
                  },
                  title:"E-commerce",
                  url:"#"
                },
              ]
            },
            {
              button:{
                title:"Więcej",
                url:"#"
              },
              content:`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`,
              title:"Strony internetowe",
              cards:[
                {
                  content:`Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)`,
                  image:{
                    altText:"",
                    sourceUrl:"https://img.freepik.com/premium-photo/medium-shot-woman-living-farmhouse_23-2150621719.jpg?t=st=1724588684~exp=1724589284~hmac=cb1546d4d2f68b0084237c4c32047a7c3f0b205da6b2765b691c9fa849344400&w=826",
                    title:""
                  },
                  title:"Portfolio",
                  url:"#"
                },
                {
                  content:`Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)`,
                  image:{
                    altText:"",
                    sourceUrl:"https://img.freepik.com/premium-photo/side-view-adventurous-couple-bivouacking_23-2150562891.jpg?t=st=1724588684~exp=1724589284~hmac=e380700973d30effe4f27ff5625047f4423509cd098b69828a2764919f1893f5",
                    title:""
                  },
                  title:"Blogi",
                  url:"#"
                },
                {
                  content:`Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)`,
                  image:{
                    altText:"",
                    sourceUrl:"https://img.freepik.com/free-photo/beautiful-landscape-mother-nature_23-2148992406.jpg?t=st=1724588684~exp=1724589284~hmac=e59dcf8a6ccaf13dd10086d2cdc417cc8b5434dc59ab82198aa39bc744afac30",
                    title:""
                  },
                  title:"E-commerce",
                  url:"#"
                },
              ]
            },
          ]}
        />
        <Projects
          button={{
            title:"Nasze realizacje",
            url:"#"
          }}
          content={`I understand your point but this won't scale. I have over 200 000 entries for ~150 000 different dates. It's impossible to create that many files and totally impossible to maintain those. That's why I'm wondering how to handle this in some sane way. Possibly some redirect on the server side? `}
          title="Projekty"
          cards={[
            {
              content:`The Link component with the as prop to create a "pretty" URL and pass a hidden ID as a query parameter. This way, the ID will be hidden in the visible URL while still being accessible within your Next.js components.`,
              image:{
                altText:"",
                sourceUrl:"https://img.freepik.com/free-photo/front-view-black-sedan-sport-car-bridge_114579-4068.jpg?t=st=1724692463~exp=1724696063~hmac=935305cdb4dce6f9494199909fce3fff404b9d345ac808e8e6a7341885a15436&w=740",
                title:""
              },
              release:2023,
              slogan:"WWW & SEO",
              title:"Mechanik Ludomy",
              url:"#"
            },
            {
              content:`The Link component with the as prop to create a "pretty" URL and pass a hidden ID as a query parameter. This way, the ID will be hidden in the visible URL while still being accessible within your Next.js components.`,
              image:{
                altText:"",
                sourceUrl:"https://img.freepik.com/free-photo/woman-holding-basket-full-different-vegetables_23-2148580022.jpg?t=st=1724692781~exp=1724696381~hmac=30fdfa9165b3b5e1845e2e7ac1a6b7c5d174aa02a083bed8fdb28b9ebbe4c17d&w=996",
                title:""
              },
              release:2024,
              slogan:"WWW",
              title:"Agromar",
              url:"#"
            },
            {
              content:`The Link component with the as prop to create a "pretty" URL and pass a hidden ID as a query parameter. This way, the ID will be hidden in the visible URL while still being accessible within your Next.js components.`,
              image:{
                altText:"",
                sourceUrl:"https://img.freepik.com/free-photo/people-working-office-side-view_23-2149739377.jpg?t=st=1724692846~exp=1724696446~hmac=2f925dfaf11cbb23b6b6d9116bc103b1d5e61fc5e0d07b5263e6b095e0e0dca7&w=740",
                title:""
              },
              release:2024,
              slogan:"WWW",
              title:"RadWEB CMS",
              url:"#"
            },
          ]}
        />
        <Blog
          button={{
            title:"Wszystkie wpisy",
            url:"#"
          }}
          content={`Gąska sosnowa rośnie głównie w lasach iglastych, zwłaszcza w okolicach sosen, z którymi tworzy mikoryzę. Obecnie najczęściej występuje w Azji (głównie w Chinach i Japonii), a także w USA. Szczególnie ceniona jest w kraju kwitnącej wiśni. Japończycy uważają ją za przysmak oraz symbol luksusu. Trudność w jej zdobyciu sprawia, że kilogram tych grzybów, kosztuje tam nawet dwa tysiące euro.`}
          title="Blog"
          cards={[
            {
              category:{
                title:"Programownie",
                url:"#"
              },
              excerpt:`Gąska sosnowa (Tricholoma matsutake), zwana należąca do rodzaju opieńka (Armillaria), zyskała sławę jako jeden z najdroższych grzybów na świecie. Ceniona za wyjątkowe walory smakowe i zdrowotne, ponownie została zaobserwowana w Polsce po blisko stu latach od pierwszego odkrycia. Rzadkość występowania tego grzyba sprawia, że cena za kilogram osiąga astronomiczne kwoty.`,
              fullname: {
                firstname:"Radosław",
                lastname:"Adamczyk"
              },
              image:{
                altText:"",
                sourceUrl:"https://img.freepik.com/free-photo/warrior-leader-from-ancient-maya-inca-lost-empire_23-2151683551.jpg?t=st=1724785615~exp=1724789215~hmac=c23f95e097952d9612315f6998ed31324ea462b2b66a845cba6a5b225517c7d7&w=2000",
                title:""
              },
              release:"21 kwi 2024",
              title:"Najdroższy grzyb na świecie rośnie w Polsce. W Japonii wręcza się go nawet w prezencie ślubnym",
              url:"#"
            },
            {
              category:{
                title:"Programownie",
                url:"#"
              },
              excerpt:`Gąska sosnowa (Tricholoma matsutake), zwana należąca do rodzaju opieńka (Armillaria), zyskała sławę jako jeden z najdroższych grzybów na świecie. Ceniona za wyjątkowe walory smakowe i zdrowotne, ponownie została zaobserwowana w Polsce po blisko stu latach od pierwszego odkrycia. Rzadkość występowania tego grzyba sprawia, że cena za kilogram osiąga astronomiczne kwoty.`,
              fullname: {
                firstname:"Radosław",
                lastname:"Adamczyk"
              },
              image:{
                altText:"",
                sourceUrl:"https://img.freepik.com/free-photo/fantasy-eye-illustrated_23-2151675280.jpg?t=st=1724785715~exp=1724789315~hmac=174c6fd1e421cda6d49d9beaa1d9920456e95511003fb51a6ee8971e87b65e04&w=2000",
                title:""
              },
              release:"21 kwi 2024",
              title:"Uber z gigantyczną karą. Firma zapłaci 300 mln euro przez UE",
              url:"#"
            },
            {
              category:{
                title:"Programownie",
                url:"#"
              },
              excerpt:`Gąska sosnowa (Tricholoma matsutake), zwana należąca do rodzaju opieńka (Armillaria), zyskała sławę jako jeden z najdroższych grzybów na świecie. Ceniona za wyjątkowe walory smakowe i zdrowotne, ponownie została zaobserwowana w Polsce po blisko stu latach od pierwszego odkrycia. Rzadkość występowania tego grzyba sprawia, że cena za kilogram osiąga astronomiczne kwoty.`,
              fullname: {
                firstname:"Radosław",
                lastname:"Adamczyk"
              },
              image:{
                altText:"",
                sourceUrl:"https://img.freepik.com/free-photo/anime-style-entity-with-fire_23-2151152132.jpg?t=st=1724785709~exp=1724789309~hmac=3b72c28c011814a364aaeef4627ca9ec0c9e6983d72c2c62c751eae1d73cb089&w=2000",
                title:""
              },
              release:"21 kwi 2024",
              title:"Awaria w mBanku. Problemy z bankowością online",
              url:"#"
            },
            {
              category:{
                title:"Programownie",
                url:"#"
              },
              excerpt:`Gąska sosnowa (Tricholoma matsutake), zwana należąca do rodzaju opieńka (Armillaria), zyskała sławę jako jeden z najdroższych grzybów na świecie. Ceniona za wyjątkowe walory smakowe i zdrowotne, ponownie została zaobserwowana w Polsce po blisko stu latach od pierwszego odkrycia. Rzadkość występowania tego grzyba sprawia, że cena za kilogram osiąga astronomiczne kwoty.`,
              fullname: {
                firstname:"Radosław",
                lastname:"Adamczyk"
              },
              image:{
                altText:"",
                sourceUrl:"https://img.freepik.com/free-photo/dragons-fantasy-artificial-intelligence-image_23-2150400916.jpg?t=st=1724785997~exp=1724789597~hmac=b42805b58a597992e8c6d8d27e276bbf256aa84c04cf60cee9d29eb96cb7ac6d&w=2000",
                title:""
              },
              release:"21 kwi 2024",
              title:"Apple szykuje się do pokazania iPhone'a 16. Poznaliśmy datę konferencji",
              url:"#"
            },
            {
              category:{
                title:"Programownie",
                url:"#"
              },
              excerpt:`Gąska sosnowa (Tricholoma matsutake), zwana należąca do rodzaju opieńka (Armillaria), zyskała sławę jako jeden z najdroższych grzybów na świecie. Ceniona za wyjątkowe walory smakowe i zdrowotne, ponownie została zaobserwowana w Polsce po blisko stu latach od pierwszego odkrycia. Rzadkość występowania tego grzyba sprawia, że cena za kilogram osiąga astronomiczne kwoty.`,
              fullname: {
                firstname:"Radosław",
                lastname:"Adamczyk"
              },
              image:{
                altText:"",
                sourceUrl:"https://img.freepik.com/free-photo/cool-scene-with-futuristic-dragon-creature_23-2151201681.jpg?t=st=1724785948~exp=1724789548~hmac=9a1e1d9b4c276780e15820cb7cd0db577dafeb79e465ee2773fbb97a840539d1&w=2000",
                title:""
              },
              release:"21 kwi 2024",
              title:"Ludzkość nie odejdzie od ropy. Tak twierdzi gigant tego rynku",
              url:"#"
            },
            {
              category:{
                title:"Programownie",
                url:"#"
              },
              excerpt:`Gąska sosnowa (Tricholoma matsutake), zwana należąca do rodzaju opieńka (Armillaria), zyskała sławę jako jeden z najdroższych grzybów na świecie. Ceniona za wyjątkowe walory smakowe i zdrowotne, ponownie została zaobserwowana w Polsce po blisko stu latach od pierwszego odkrycia. Rzadkość występowania tego grzyba sprawia, że cena za kilogram osiąga astronomiczne kwoty.`,
              fullname: {
                firstname:"Radosław",
                lastname:"Adamczyk"
              },
              image:{
                altText:"",
                sourceUrl:"https://img.freepik.com/free-photo/front-view-man-with-wings-flying_23-2151110190.jpg?t=st=1724785965~exp=1724789565~hmac=f438eb081f8d96e19ef43a356f7cb6d76bcb3a70556d9db9c05c8e17978501d6&w=2000",
                title:""
              },
              release:"21 kwi 2024",
              title:"Na Bliskim Wschodzie wybuchnie wielka wojna? Generał z USA tłumaczy",
              url:"#"
            },
          ]}
        />
        <Faq
          content={`Widoczność w internecie stała się jednym z najważniejszych wyznaczników sukcesu dla firm. Agencje SEO i SEM odgrywają w tym obszarze fundamentalną rolę. Pomagają przedsiębiorcom wspinać się coraz wyżej w wynikach wyszukiwania Google, a tym samym zwiększać świadomość marki wśród przedstawicieli konkretnej grupy docelowej i przyciągać nowych klientów.<br/><br/>Poniżej odpowiadamy na najczęściej pojawiające się pytania w kontekście tego rodzaju agencji. Wyjaśniamy różnice pomiędzy SEM i SEO, omawiamy zakres usług, a także podpowiadamy, jak rozpocząć kariery w tych dynamicznie rozwijających się branżach. Sprawdzamy również, jakich kosztów muszą się spodziewać firmy chcące wypromować swój biznes w internecie.`}        
          title="Pytania i odpowiedzi"
          cards={[
            {
              title:"Co to jest SEO i SEM?",
              content:`SEO (Search Engine Optimization), czyli optymalizacja stron internetowych pod kątem wyszukiwarek, to proces polegający na takim dostosowywaniu strony internetowej, aby uzyskała jak najwyższą pozycję w wynikach wyszukiwania dla określonych fraz kluczowych. SEO obejmuje zarówno optymalizację techniczną strony, jak i jej treści. <br/><br/>SEM (Search Engine Marketing) to szerszy termin, który oprócz SEO oznacza także płatne strategie marketingu w wyszukiwarkach, takie jak reklamy PPC (pay-per-click). SEM skupia się na zwiększeniu widoczności strony w wynikach wyszukiwania zarówno przez optymalizację, jak i poprzez wykorzystanie nowoczesnych platform reklamowych.<br/><br/>SEO i SEM to dwa rodzaje digital marketingu, choć ich metody i cel są nieco różne. SEO koncentruje się na długoterminowej widoczności w organicznych wynikach wyszukiwania i wymaga ciągłej pracy nad stroną. Działania te obejmują nie tylko optymalizację techniczną (jak poprawa szybkości ładowania, zapewnienie responsywności czy usprawnienie struktury URL), ale również tworzenie treści odpowiadających na potrzeby i zapytania użytkowników.`
            },
            {
              title:"Jak długo uczyłeś się programowania przed pierwszą pracą?",
              content:`Od początku! A tak serio – sposobów może być wiele, ale warto na początku poczytać trochę na temat samego programowania i dziedzin, którymi możemy się potencjalnie zajmować. Frontend, Backend, Machine Learning, Devops, Aplikacje Mobilne – tego jest naprawdę sporo. Jeśli jednak zdecydujesz się na frontend, to nagrałem o tym odcinek, który na bank Ci pomoże.`
            },
            {
              title:"W czym programujesz?",
              content:`Zacząłem w 2014 roku, ale miałem po drodze kilka przerw. Najbardziej intensywny okres nauki przypada na 2016-2017 gdzie przez te dwa lata cisnąłem naprawdę solidnie. Kilka miesięcy przed dostaniem się do pracy zrealizowałem kilka projektów jako freelancer.`
            },
            {
              title:"W czym programujesz?",
              content:`Jestem Frontendowcem, więc na co dzień posługuję się HTMLem, CSSem, JavaScriptem. Znam też podstawy Pythona, Ruby, Go, a ostatnio rozwijam swoje umiejętności związane z Node.js (w uproszczeniu – backendowym stackiem JavaScriptowym).`
            },
            {
              title:"Co frontendowiec musi umieć?",
              content:`Dobre pytanie! Frontend to jedna z tych dziedzin programowania, która zmienia się bardzo dynamicznie. To co było aktualne 2-3 lata temu, obecnie odchodzi w niepamięć. Aby pozostać na bieżąco warto czytać artykuły na Medium, słuchać podcastów i śledzić ciekawe projekty na GitHubie. Mam też odcinek, w którym opowiadam co warto wiedzieć o Frontendzie w 2020 roku.`
            },
          ]}
        />
      </main>
    </>
  )
}