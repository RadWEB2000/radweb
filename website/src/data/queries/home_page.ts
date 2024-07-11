import {tImage, tButton} from "ts/types"
import {tAboutUs} from "v-home/AboutUs/AboutUs.models"
import {tBlog} from "v-home/Blog/Blog.models";

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
              sourceUrl(size: THUMBNAIL)
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
              sourceUrl(size: THUMBNAIL)
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
        projects {
          title
          content
          buttonCard
          button {
            title
            url
          }
        }
        blog {
          title
          content
          button {
            title
            url
          }
        }
        partners {
            title
            content
            cards {
              title
              content
              logo {
                node {
                  altText
                  sourceUrl(size: THUMBNAIL)
                  title(format: RENDERED)
                }
              }
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
            sourceUrl(size: THUMBNAIL)
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
            sourceUrl(size: THUMBNAIL)
            title(format: RENDERED)
          }
        }
        excerpt(format: RENDERED)
      }
    }
    projects(first: 6) {
      nodes {
        title(format: RENDERED)
        uri
        date
        excerpt(format: RENDERED)
        featuredImage {
          node {
            altText
            sourceUrl(size: THUMBNAIL)
            title(format: RENDERED)
          }
        }
      }
    }
    posts(first: 4) {
      nodes {
        title(format: RENDERED)
        uri
        featuredImage {
          node {
            altText
            sourceUrl(size: THUMBNAIL)
            title(format: RENDERED)
          }
        }
        excerpt(format: RENDERED)
        date
        categories(first: 1) {
          nodes {
            name
            uri
          }
        }
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
        },
        blog: {
          title:string;
          content:string;
          button:tButton;
        },
        designation: {
          content:string;
          image: {
            node:tImage;
          }
        },
        howWeWork: {
          title:string;
          content:string;
          cards: {
            title:string;
            content:string;
          }[];
        },
        aboutUs : {
          title:string;
          content:string;
          button:tButton;
        },
        services: {
          title:string;
          content:string;
          "button_card":string;
          button: tButton;
        },
        projects: {
          title:string;
          content:string;
          button:tButton;
          buttonCard:string;
        },
        partners: {
          title:string;
          content:string;
          cards:{
            title:string;
            content:string;
            logo:{
              node:tImage;
            }
          }[];
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
    },
    projects: {
      nodes: {
        title:string;
        uri:string;
        date:string;
        excerpt:string;
        featuredImage:{
          node:tImage;
        }
      }[];
    },
    posts: {
      nodes: {
        title:string;
        uri:string;
        date:string;
        excerpt:string;
        featuredImage:{
          node:tImage;
        }
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
  },
  blog: tBlog,
  designation: {
    content:string;
    image: tImage;
  },
  howWeWork: {
    title:string;
    content:string;
    cards: {
      title:string;
      content:string;
    }[];
  },
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
    }[];
  },
  projects: {
    title:string;
    content:string;
    button:tButton;
    buttonCard:string;
    cards:{
      title:string;
      uri:string;
      date:string;
      excerpt:string;
      image:tImage;
    }[];
  }
  partners: {
    title:string;
    content:string;
    cards:{
      title:string;
      content:string;
      logo:tImage;
    }[];
  }
}

