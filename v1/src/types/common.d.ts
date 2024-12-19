import { ImageProps } from "next/image";
import {
  AnchorHTMLAttributes,
  SVGAttributes,
  VideoHTMLAttributes,
} from "react";

export {};

declare global {
  type tFontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

  type tImageFileType =
    | "image/apng"
    | "image/avif"
    | "image/gif"
    | "image/jpeg"
    | "image/png"
    | "image/svg"
    | "image/webp";

  type tVideoFileType = "video/mp4" | "video/webm" | "video/ogg";

  type tImage = {
    altText: string;
    sourceSrc: string;
    title: string;
    props?: ImageProps;
  };

  type tLink = {
    title: string;
    url: string;
    props?: AnchorHTMLAttributes<HTMLAnchorElement>;
  };

  type tVideo = {
    src: string;
    file?: tVideoFileType;
    props?: VideoHTMLAttributes<HTMLVideoElement>;
  };

  type tSVGFile = {
    attributes?: SVGAttributes<SVGElement>;
    className?: string;
  };
}
