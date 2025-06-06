import logo from "@/img/logo.webp";

type layout = {
    navigation: {
        brand: link & {
            logo: image;
        };
        menu: Array<link & {
            submenu: Array<link> | null;
        }>
    }
}

export const layout: layout = {
    navigation: {
        brand: {
            label: 'RadWEB',
            logo: {
                alt: 'RadWEB - Agent ubezpieczeniowy | Specjalista SEO/SEM/SXO | Web developer | Front-end developer',
                src: logo.src,
                title: 'RadWEB - Agent ubezpieczeniowy | Specjalista SEO/SEM/SXO | Web developer | Front-end developer'
            },
            uri: '/'
        },
        menu: [
            {
                label: 'Start',
                uri: '/',
                submenu: null
            },
            {
                label: 'O mnie',
                uri: '/o-mnie',
                submenu: null
            },
            {
                label: 'SEO',
                uri: '/seo',
                submenu: [
                    {
                        label: 'Pozycjonowanie lokalne',
                        uri: '/seo/lokalne',
                    },
                    {
                        label: 'SEO e-commerce',
                        uri: '/seo/e-commerce',
                    },
                    {
                        label: 'Google Moja Firma',
                        uri: '/seo/gmf',
                    },
                    {
                        label: 'Link building',
                        uri: '/seo/link-building',
                    },
                    {
                        label: 'Content marketing',
                        uri: '/seo/content-marketing',
                    },
                    {
                        label: 'Analizy SEO',
                        uri: '/seo/analizy',
                    },
                ]
            },
            {
                label: 'Ubezpieczenia',
                uri: '/polisy',
                submenu: [
                    {
                        label: 'Polisy turystyczne',
                        uri: '/polisy/turystyczne',
                    },
                    {
                        label: 'Polisy komunikacyjne',
                        uri: '/polisy/komunikacyjne',
                    },
                    {
                        label: 'Polisy majątkowe',
                        uri: '/polisy/majatkowe',
                    },
                    {
                        label: 'Polisy na życie',
                        uri: '/polisy/na-zycie',
                    },
                    {
                        label: 'Polisy NNW szkolne',
                        uri: '/polisy/nnw/szkolne',
                    },
                    {
                        label: 'Polisy NNW',
                        uri: '/polisy/nnw',
                    },
                    {
                        label: 'Polisy OZE',
                        uri: '/polisy/oze',
                    },
                ]
            },
            {
                label: 'WWW',
                uri: '/www',
                submenu: [
                    {
                        label: 'Landing Page',
                        uri: '/www/landing-page',
                    },
                    {
                        label: 'Blogi',
                        uri: '/www/blogi',
                    },
                    {
                        label: 'Sklepy internetowe',
                        uri: '/www/e-commerce',
                    },
                    {
                        label: 'Certyfikaty SSL',
                        uri: '/www/ssl',
                    },
                    {
                        label: 'Domeny',
                        uri: '/www/domeny',
                    },
                    {
                        label: 'Hosting',
                        uri: '/www/hosting',
                    }
                ]
            },
            {
                label: 'Kontakt',
                uri: '/kontakt',
                submenu: null
            },
        ]
    }
}