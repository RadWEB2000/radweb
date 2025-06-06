import work_break_img from "@/img/work-break.webp"
import worker_img from "@/img/worker.webp"
import customer_img from "@/img/customer.webp"

interface home_page {
    hero: {
        title: string;
        slogan: string;
        gallery: Array<image>;
    };
    about: {
        title: string;
        slogan: string;
        button: link;
        description: string;
    };
    services: {
        title: string;
        description: string;
        offer: Array<{
            title: string;
            description: string;
            image: image;
            button: link;
            variant: service_type;
            subservices: Array<{
                title: string;
                description: string;
                image: image;
                uri: string;
                variant: service_type;
            }>
        }>
    }
    blog: {
        title: string;
        slogan: string;
        button: link;
        description: string;
        posts: Array<{
            image: image;
            title: string;
            uri: string;
            category: link & { variant: service_type };
            readingTime: number; /** mins */
            release: string | Date;

        }>
    }
}


export const home_page: home_page = {
    about: {
        button: {
            label: 'Poznaj mnie',
            uri: '#'
        },
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo et maxime beatae sapiente aut offi Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam itaque aliquam expedita quisquam impedit excepturi quis hic. Facilis, incidunt excepturi. Quod excepturi nesciunt molestiae velit debitis. Tenetur quisquam maxime error. Repellendus, id. Deleniti expedita, reiciendis eum atque at repellat sunt totam, architecto facere soluta ratione cumque ut molestiae delectus ad! Unde nesciunt dolore eos amet velit quidem quis blanditiis non. Dolorum numquam impedit beatae aut laboriosam architecto ad deserunt voluptates veritatis, reiciendis quidem. Illum minima, totam reiciendis sequi exercitationem incidunt expedita? Harum minima delectus, sequi facilis sit libero mollitia obcaecati! Ratione a corrupti, architecto animi quasi omnis alias libero laborum aliquid, repellat doloribus modi pariatur beatae eveniet quidem`,
        slogan: `Empower <span class="special-text" >youre business</span> /n Financal Future Ettorlessy`,
        title: `O mnie`
    },
    blog: {
        button: {
            label: `Wszystkie wpisy`,
            uri: '#'
        },
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex cupiditate similique beatae vel expedita obcaecati tempore harum. Placeat eveniet cupiditate qui at quia tenetur voluptatem commodi explicabo nisi culpa, tempore, soluta quas enim dolores similique! Facilis esse nesciunt eligendi voluptates, iusto neque, illum fuga necessitatibus perspiciatis, dolorem alias hic velit vitae nemo? Dolore deleniti exercitationem asperiores incidunt beatae omnis quis obcaecati accusamus eius atque consequuntur et placeat commodi.`,
        posts: [
            {
                category: {
                    label: 'Programowanie',
                    uri: '/blog/programowanie',
                    variant: 'insurance'
                },
                image: {
                    alt: '',
                    src: 'https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    title: ''
                },
                readingTime: 3,
                release: '21 kwi 2025',
                title: '10 rzeczy, które musisz wiedzieć, zanim zaczniesz',
                uri: '/'
            },
            {
                category: {
                    label: 'Programowanie',
                    uri: '/blog/programowanie',
                    variant: 'insurance'
                },
                image: {
                    alt: '',
                    src: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    title: ''
                },
                readingTime: 3,
                release: '21 kwi 2025',
                title: 'Jak osiągnąć sukces w [branża] – sprawdzone strategie na 2025 rok',
                uri: '/'
            },
            {
                category: {
                    label: 'Programowanie',
                    uri: '/blog/programowanie',
                    variant: 'insurance'
                },
                image: {
                    alt: '',
                    src: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    title: ''
                },
                readingTime: 3,
                release: '21 kwi 2025',
                title: 'Najczęstsze błędy w [temat] i jak ich unikać',
                uri: '/'
            },
            {
                category: {
                    label: 'Programowanie',
                    uri: '/blog/programowanie',
                    variant: 'insurance'
                },
                image: {
                    alt: '',
                    src: 'https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    title: ''
                },
                readingTime: 3,
                release: '21 kwi 2025',
                title: 'Co się zmieniło w [temat] w 2025 roku? Podsumowanie najważniejszych zmian',
                uri: '/'
            },
            {
                category: {
                    label: 'Programowanie',
                    uri: '/blog/programowanie',
                    variant: 'insurance'
                },
                image: {
                    alt: '',
                    src: 'https://images.pexels.com/photos/1144176/pexels-photo-1144176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    title: ''
                },
                readingTime: 3,
                release: '21 kwi 2025',
                title: '5 mitów o [temat], w które nadal wierzy zbyt wiele osób',
                uri: '/'
            },
            {
                category: {
                    label: 'Programowanie',
                    uri: '/blog/programowanie',
                    variant: 'insurance'
                },
                image: {
                    alt: '',
                    src: 'https://images.pexels.com/photos/27680492/pexels-photo-27680492/free-photo-of-islandia-snieg-krajobraz-natura.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    title: ''
                },
                readingTime: 3,
                release: '21 kwi 2025',
                title: 'Dlaczego [problem] to poważny temat – i co możesz z tym zrobić',
                uri: '/'
            },
        ],
        slogan: `Wondering how well we <span class="special-text" >know your industry</span>? Curious which tech stacks we support?`,
        title: 'Blog'
    },
    hero: {
        gallery: [
            {
                alt: '',
                src: work_break_img.src,
                title: ''
            },
            {
                alt: '',
                src: worker_img.src,
                title: ''
            },
            {
                alt: '',
                src: customer_img.src,
                title: ''
            },
        ],
        slogan: `Twoja bezpieczna przyszłość online`,
        title: 'RadWEB'
    },
    services: {
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore dolorum nihil atque. Quis quisquam magni facilis delectus, blanditiis culpa ullam vel velit ipsa numquam modi placeat nemo, pariatur voluptate illo. Tempore exercitationem suscipit pariatur, eos minus iure accusantium asperiores perspiciatis veniam molestiae nemo aut nobis odit repudiandae labore dolorum totam sapiente deleniti unde vitae impedit! At nostrum neque fuga voluptates.`,
        title: 'Co mogę Tobie zaoferować?',
        offer: [
            {
                title: 'Pozycjonowanie',
                button: {
                    label: 'Wybierz SEO',
                    uri: '#'
                },
                description: `Nowadays I still play a lot of video games but I also wake up early and study or write every day before my 9–5 starts. My behaviors changed which led to a new job with a 40% pay rise and moving into an apartment that I didn’t have to share with strangers. Life didn’t get easier, it got busier, but in the best way possible. I’m going to use video games as an analogy for how I study consistently because thinking this way makes studying fun.`,
                image: {
                    alt: '',
                    src: '',
                    title: ''
                },
                variant: 'seo',
                subservices: [
                    {
                        description: `Nowadays I still play a lot of video games but I also wake up early and study or write every day before my 9–5 starts. My behaviors changed which led to a new job with a 40% pay rise and moving into an apartment that I didn’t have to share with strangers. `,
                        image: {
                            alt: '',
                            src: '',
                            title: ''
                        },
                        title: 'Pozycjonowanie lokalne',
                        uri: '#',
                        variant: 'seo'
                    },
                    {
                        description: `Nowadays I still play a lot of video games but I also wake up early and study or write every day before my 9–5 starts. My behaviors changed which led to a new job with a 40% pay rise and moving into an apartment that I didn’t have to share with strangers. `,
                        image: {
                            alt: '',
                            src: '',
                            title: ''
                        },
                        title: '',
                        uri: '#',
                        variant: 'seo'
                    },
                    {
                        description: `Nowadays I still play a lot of video games but I also wake up early and study or write every day before my 9–5 starts. My behaviors changed which led to a new job with a 40% pay rise and moving into an apartment that I didn’t have to share with strangers. `,
                        image: {
                            alt: '',
                            src: '',
                            title: ''
                        },
                        title: 'SEO e-commerce',
                        uri: '#',
                        variant: 'seo'
                    },
                    {
                        description: `Nowadays I still play a lot of video games but I also wake up early and study or write every day before my 9–5 starts. My behaviors changed which led to a new job with a 40% pay rise and moving into an apartment that I didn’t have to share with strangers. `,
                        image: {
                            alt: '',
                            src: '',
                            title: ''
                        },
                        title: 'Analiza stron',
                        uri: '#',
                        variant: 'seo'
                    },
                    {
                        description: `Nowadays I still play a lot of video games but I also wake up early and study or write every day before my 9–5 starts. My behaviors changed which led to a new job with a 40% pay rise and moving into an apartment that I didn’t have to share with strangers. `,
                        image: {
                            alt: '',
                            src: '',
                            title: ''
                        },
                        title: 'Content marketing',
                        uri: '#',
                        variant: 'seo'
                    },
                    {
                        description: `Nowadays I still play a lot of video games but I also wake up early and study or write every day before my 9–5 starts. My behaviors changed which led to a new job with a 40% pay rise and moving into an apartment that I didn’t have to share with strangers. `,
                        image: {
                            alt: '',
                            src: '',
                            title: ''
                        },
                        title: 'Link building',
                        uri: '#',
                        variant: 'seo'
                    },
                    {
                        description: `Nowadays I still play a lot of video games but I also wake up early and study or write every day before my 9–5 starts. My behaviors changed which led to a new job with a 40% pay rise and moving into an apartment that I didn’t have to share with strangers. `,
                        image: {
                            alt: '',
                            src: '',
                            title: ''
                        },
                        title: 'Wizytówka Google',
                        uri: '#',
                        variant: 'seo'
                    },
                    {
                        description: `Nowadays I still play a lot of video games but I also wake up early and study or write every day before my 9–5 starts. My behaviors changed which led to a new job with a 40% pay rise and moving into an apartment that I didn’t have to share with strangers. `,
                        image: {
                            alt: '',
                            src: '',
                            title: ''
                        },
                        title: 'SEO Bing',
                        uri: '#',
                        variant: 'seo'
                    },
                ]
            },
            {
                title: 'Strony internetowe',
                button: {
                    label: 'Wybierz SEO',
                    uri: '#'
                },
                description: `Nowadays I still play a lot of video games but I also wake up early and study or write every day before my 9–5 starts. My behaviors changed which led to a new job with a 40% pay rise and moving into an apartment that I didn’t have to share with strangers. Life didn’t get easier, it got busier, but in the best way possible. I’m going to use video games as an analogy for how I study consistently because thinking this way makes studying fun.`,
                image: {
                    alt: '',
                    src: '',
                    title: ''
                },
                variant: 'www',
                subservices: [
                    {
                        description: `Nowadays I still play a lot of video games but I also wake up early and study or write every day before my 9–5 starts. My behaviors changed which led to a new job with a 40% pay rise and moving into an apartment that I didn’t have to share with strangers. `,
                        image: {
                            alt: '',
                            src: '',
                            title: ''
                        },
                        title: 'Blogi',
                        uri: '#',
                        variant: 'www'
                    },
                    {
                        description: `Nowadays I still play a lot of video games but I also wake up early and study or write every day before my 9–5 starts. My behaviors changed which led to a new job with a 40% pay rise and moving into an apartment that I didn’t have to share with strangers. `,
                        image: {
                            alt: '',
                            src: '',
                            title: ''
                        },
                        title: 'Wizytówki',
                        uri: '#',
                        variant: 'www'
                    },
                    {
                        description: `Nowadays I still play a lot of video games but I also wake up early and study or write every day before my 9–5 starts. My behaviors changed which led to a new job with a 40% pay rise and moving into an apartment that I didn’t have to share with strangers. `,
                        image: {
                            alt: '',
                            src: '',
                            title: ''
                        },
                        title: 'Landing page',
                        uri: '#',
                        variant: 'www'
                    },
                    {
                        description: `Nowadays I still play a lot of video games but I also wake up early and study or write every day before my 9–5 starts. My behaviors changed which led to a new job with a 40% pay rise and moving into an apartment that I didn’t have to share with strangers. `,
                        image: {
                            alt: '',
                            src: '',
                            title: ''
                        },
                        title: 'Certyfikaty SSL',
                        uri: '#',
                        variant: 'www'
                    }
                ]
            },
            {
                title: 'Ubezpieczenia',
                button: {
                    label: 'Wybierz SEO',
                    uri: '#'
                },
                description: `Nowadays I still play a lot of video games but I also wake up early and study or write every day before my 9–5 starts. My behaviors changed which led to a new job with a 40% pay rise and moving into an apartment that I didn’t have to share with strangers. Life didn’t get easier, it got busier, but in the best way possible. I’m going to use video games as an analogy for how I study consistently because thinking this way makes studying fun.`,
                image: {
                    alt: '',
                    src: '',
                    title: ''
                },
                variant: 'insurance',
                subservices: [
                    {
                        description: `Nowadays I still play a lot of video games but I also wake up early and study or write every day before my 9–5 starts. My behaviors changed which led to a new job with a 40% pay rise and moving into an apartment that I didn’t have to share with strangers. `,
                        image: {
                            alt: '',
                            src: '',
                            title: ''
                        },
                        title: 'Polisy turystyczne',
                        uri: '#',
                        variant: 'insurance'
                    },
                    {
                        description: `Nowadays I still play a lot of video games but I also wake up early and study or write every day before my 9–5 starts. My behaviors changed which led to a new job with a 40% pay rise and moving into an apartment that I didn’t have to share with strangers. `,
                        image: {
                            alt: '',
                            src: '',
                            title: ''
                        },
                        title: 'Polisy komunikacyjne',
                        uri: '#',
                        variant: 'insurance'
                    },
                    {
                        description: `Nowadays I still play a lot of video games but I also wake up early and study or write every day before my 9–5 starts. My behaviors changed which led to a new job with a 40% pay rise and moving into an apartment that I didn’t have to share with strangers. `,
                        image: {
                            alt: '',
                            src: '',
                            title: ''
                        },
                        title: 'Polisy majątkowe',
                        uri: '#',
                        variant: 'insurance'
                    },
                    {
                        description: `Nowadays I still play a lot of video games but I also wake up early and study or write every day before my 9–5 starts. My behaviors changed which led to a new job with a 40% pay rise and moving into an apartment that I didn’t have to share with strangers. `,
                        image: {
                            alt: '',
                            src: '',
                            title: ''
                        },
                        title: 'Polisy na życie',
                        uri: '#',
                        variant: 'insurance'
                    },
                    {
                        description: `Nowadays I still play a lot of video games but I also wake up early and study or write every day before my 9–5 starts. My behaviors changed which led to a new job with a 40% pay rise and moving into an apartment that I didn’t have to share with strangers. `,
                        image: {
                            alt: '',
                            src: '',
                            title: ''
                        },
                        title: 'Polisy NNW szkolne',
                        uri: '#',
                        variant: 'insurance'
                    },
                    {
                        description: `Nowadays I still play a lot of video games but I also wake up early and study or write every day before my 9–5 starts. My behaviors changed which led to a new job with a 40% pay rise and moving into an apartment that I didn’t have to share with strangers. `,
                        image: {
                            alt: '',
                            src: '',
                            title: ''
                        },
                        title: 'Polisy NNW',
                        uri: '#',
                        variant: 'insurance'
                    },
                    {
                        description: `Nowadays I still play a lot of video games but I also wake up early and study or write every day before my 9–5 starts. My behaviors changed which led to a new job with a 40% pay rise and moving into an apartment that I didn’t have to share with strangers. `,
                        image: {
                            alt: '',
                            src: '',
                            title: ''
                        },
                        title: 'Polisy OZE',
                        uri: '#',
                        variant: 'insurance'
                    }
                ]
            },
        ]
    }
}