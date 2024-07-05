import { tImage } from "ts/types";

export const homePageQuery:string = `
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
    }
  }
}
`

export interface iHomePageQuery {
    data: {
        page: {
            homePage :{ 
                hero:{
                    title:string;
                    slogan:string;
                    image: {
                        node:tImage;
                    };
                    buttons: {
                        button: {
                            title:string;
                            url:string;
                        }
                    }[]
                };
                designation: {
                    content:string;
                    image: {
                        node:tImage;
                    }
                };
                howWeWork: {
                    title:string;
                    content:string; 
                    cards : {
                        title:string;
                        content:string;
                    }[]
                }
            };
        }
    }
}

export interface iHomePageResult  {
    hero : {
        title:string;
        slogan:string;
        image:tImage;
        buttons: {
            label:string;
            uri:string;
        }[];
    };
    designation: {
        content:string;
        image:tImage;
    };
    howWeWork:{
        title:string;
        content:string;
        cards: {
            title:string;
            content:string;
        }[];
    }
}