export type tHero = {
  media:
    | ({
        type: "video";
      } & tVideo)
    | ({
        type: "image";
      } & tImage);
  title: string;
  slogan: string;
  buttons: tLink[];
};
