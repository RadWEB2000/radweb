import {tImage} from "../../types/types"
// import {tImage} from "ts/types"

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
            button: {
              title:string;
              url:string;
            }
          }[];
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
            button: {
              title:string;
              url:string;
            }
          }
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
        url:string;
      }[];
    }
  }
}

export interface IResult {
  hero: {
    title:string;
    slogan:string;
    image: tImage;
    buttons: {
      title:string;
      url:string;
    }[];
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
  aboutUs : {
    title:string;
    content:string;
    cards: {
      image:tImage;
      fullname: {
        firstname:string;
        lastname:string;
      }
      industry:string;
      uri:string;
    }
    button: {
      title:string;
      url:string;
    }
  }
}

