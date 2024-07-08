import {tImage, tButton} from "ts/types"
import {tAboutUs} from "v-home/AboutUs/AboutUs.models"

export const query:string = `
  query HomePage {
    page(id: "/", idType: URI) {
      homePage {
        hero {
          title
          slogan
          image {
            node {
              altText
              sourceUrl(size: POST_THUMBNAIL)
              title(format: RENDERED)
            }
          }
          buttons {
            button {
              title
              url
            }
          }
        }
        designation {
          content
          image {
            node {
              altText
              sourceUrl(size: POST_THUMBNAIL)
              title(format: RENDERED)
            }
          }
        }
        howWeWork {
          title
          content
          cards {
            title
            content
          }
        }
        aboutUs {
          title
          content
          button {
            url
            title
          }
        }
        services {
          title
          content
          button_card
          button {
            url
            title
          }
        }
      }
    }
    teammates(first: 3) {
      nodes {
        uri
        featuredImage {
          node {
            altText
            sourceUrl(size: POST_THUMBNAIL)
            title(format: RENDERED)
          }
        }
        teammatePage {
          fullname {
            firstname
            lastname
          }
          industry
        }
      }
    }
    services(first: 6) {
      nodes {
        title(format: RENDERED)
        uri
        featuredImage {
          node {
            altText
            sourceUrl(size: POST_THUMBNAIL)
            title(format: RENDERED)
          }
        }
        excerpt(format: RENDERED)
      }
    }
  }
`

export interface IResponse {
  data: {
    page: {
      homePage: {
        hero: {
          title:string;
          slogan:string;
          image: {
            node:tImage;
          }
          buttons: {
            button:tButton;
          }[];
        }
        designation: {
          content:string;
          image: {
            node:tImage;
          }
        }
        howWeWork: {
          title:string;
          content:string;
          cards: {
            title:string;
            content:string;
          }[];
        }
        aboutUs : {
          title:string;
          content:string;
          button:tButton;
        }
        services: {
          title:string;
          content:string;
          "button_card":string;
          button: tButton;
        }
      }
    },
    teammates: {
      nodes:{
        featuredImage:{
          node:tImage;
        };
        teammatePage:{
          fullname: {
            firstname:string;
            lastname:string;
          };
          industry:string;
        };
        uri:string;
      }[];
    }
    services: {
      nodes: {
        title:string;
        uri:string;
        featuredImage :{
          node:tImage;
        };
        excerpt:string;
      }[];
    }
  }
}

export interface IResult {
  hero: {
    title:string;
    slogan:string;
    image: tImage;
    buttons: tButton[];
  }
  designation: {
    content:string;
    image: tImage;
  }
  howWeWork: {
    title:string;
    content:string;
    cards: {
      title:string;
      content:string;
    }[];
  }
  aboutUs : tAboutUs;
  services: {
    title:string;
    content:string;
    buttonCard:string;
    button:tButton;
    cards: {
      title:string;
      uri:string;
      image:tImage;
      excerpt:string;
    }[]
  }
}

